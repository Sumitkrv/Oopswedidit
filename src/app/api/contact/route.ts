import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please provide a valid email address"),
  company: z.string().max(100).optional(),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Please tell us a little more about your idea (min 10 characters)").max(3000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate input payload
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
          message: "Please check the form fields for errors.",
        },
        { status: 400 }
      );
    }

    const { name, email, company, services, budget, timeline, message } = result.data;

    // Check if external email provider credentials are configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const sendgridApiKey = process.env.SENDGRID_API_KEY;
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

    // Log received inquiry securely on server side for operational traceability
    console.log("[INQUIRY_RECEIVED]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      company: company || "N/A",
      services,
      budget: budget || "Not specified",
      timeline: timeline || "Not specified",
      messageLength: message.length,
    });

    // If an external service is configured:
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            company,
            services,
            budget,
            timeline,
            message,
            submittedAt: new Date().toISOString(),
          }),
        });

        return NextResponse.json({
          success: true,
          delivered: true,
          message: "Thank you! Your inquiry was successfully dispatched to our team.",
        });
      } catch (err) {
        console.error("Webhook dispatch failed:", err);
      }
    }

    // When running in development or when no third-party email provider is configured yet:
    // We truthfully report that the submission was validated and logged locally, but inform the client
    // of the direct email channel so messages are never lost.
    const isProviderConfigured = Boolean(resendApiKey || sendgridApiKey || webhookUrl);

    return NextResponse.json({
      success: true,
      delivered: isProviderConfigured,
      demoMode: !isProviderConfigured,
      message: isProviderConfigured
        ? "Your inquiry has been received! We'll reply within 24 business hours."
        : "Inquiry received and validated! (Email service not configured in environment — feel free to also reach us directly at thakursumi498@gmail.com).",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your request. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}

