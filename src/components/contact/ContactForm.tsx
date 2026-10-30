"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

const SERVICE_OPTIONS = [
  "Website Design & Development",
  "Software Development",
  "Branding & Graphic Design",
  "Social Media & Marketing",
  "Automation & AI",
  "Multiple Services",
  "Not Sure Yet",
];

const BUDGET_OPTIONS = [
  "Prefer to discuss",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
];

const TIMELINE_OPTIONS = [
  "Immediately / Within 2 weeks",
  "Within 1 month",
  "1 – 3 months",
  "Flexible / Exploring",
];

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid work email"),
  company: z.string().optional(),
  services: z.array(z.string()).min(1, "Please select at least one service category"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Please share a few details about your vision (min 10 characters)"),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  initialService?: string;
}

export function ContactForm({ initialService }: ContactFormProps) {
  const searchParams = useSearchParams();
  const serviceQuery = searchParams ? searchParams.get("service") || initialService : initialService;

  const [submissionStatus, setSubmissionStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
    demoNotice?: boolean;
  }>({ type: "idle", message: "" });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      services: serviceQuery ? [serviceQuery] : ["Website Design & Development"],
      budget: "Prefer to discuss",
      timeline: "Within 1 month",
      message: "",
    },
  });

  useEffect(() => {
    if (serviceQuery) {
      setValue("services", [serviceQuery]);
    }
  }, [serviceQuery, setValue]);

  const selectedServices = watch("services") || [];
  const selectedBudget = watch("budget");
  const selectedTimeline = watch("timeline");

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setValue(
        "services",
        selectedServices.filter((s) => s !== srv),
        { shouldValidate: true }
      );
    } else {
      setValue("services", [...selectedServices, srv], { shouldValidate: true });
    }
  };

  const onSubmit = async (data: FormData) => {
    setSubmissionStatus({ type: "loading", message: "Sending your message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (response.ok && res.success) {
        setSubmissionStatus({
          type: "success",
          message: res.message,
          demoNotice: res.demoMode,
        });
        reset();
      } else {
        setSubmissionStatus({
          type: "error",
          message: res.message || "Failed to submit. Please try again or email us directly.",
        });
      }
    } catch {
      setSubmissionStatus({
        type: "error",
        message:
          "Network connection error. Please email us directly at thakursumi498@gmail.com.",
      });
    }
  };

  return (
    <div className="bg-cream-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-coffee/15 shadow-xl relative overflow-hidden">
      {submissionStatus.type === "success" ? (
        <div className="py-12 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-terracotta text-cream flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-coffee">
              Idea received!
            </h3>
            <p className="text-coffee/80 text-base sm:text-lg max-w-lg mx-auto font-sans">
              {submissionStatus.message}
            </p>
          </div>

          {submissionStatus.demoNotice && (
            <div className="max-w-md mx-auto p-4 rounded-xl bg-peach/30 border border-coffee/10 text-xs text-coffee/80 space-y-1 text-left">
              <span className="font-bold block uppercase tracking-wider text-coffee">
                Integration Notice:
              </span>
              <p>
                To route submissions to an external inbox or CRM, set{" "}
                <code className="bg-coffee/10 px-1 rounded">CONTACT_WEBHOOK_URL</code> or{" "}
                <code className="bg-coffee/10 px-1 rounded">RESEND_API_KEY</code> in your environment variables.
              </p>
            </div>
          )}

          <div className="pt-4">
            <button
              onClick={() => setSubmissionStatus({ type: "idle", message: "" })}
              className="text-sm font-semibold text-terracotta hover:underline cursor-pointer"
            >
              Send another message →
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Section 1: Contact Details */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-terracotta font-bold block">
              01 // The Basics
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-wider text-coffee/70 font-semibold"
                >
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Maya Lin"
                  {...register("name")}
                  className={`w-full px-4 py-3.5 rounded-xl bg-cream border text-coffee text-sm font-sans focus:outline-none focus:ring-2 focus:ring-terracotta transition-all ${
                    errors.name ? "border-red-500" : "border-coffee/15"
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-wider text-coffee/70 font-semibold"
                >
                  Work Email *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="e.g. maya@company.com"
                  {...register("email")}
                  className={`w-full px-4 py-3.5 rounded-xl bg-cream border text-coffee text-sm font-sans focus:outline-none focus:ring-2 focus:ring-terracotta transition-all ${
                    errors.email ? "border-red-500" : "border-coffee/15"
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Company */}
            <div className="space-y-1.5">
              <label
                htmlFor="company"
                className="block text-xs uppercase tracking-wider text-coffee/70 font-semibold"
              >
                Company / Project Name
              </label>
              <input
                id="company"
                type="text"
                placeholder="e.g. Horizon Labs"
                {...register("company")}
                className="w-full px-4 py-3.5 rounded-xl bg-cream border border-coffee/15 text-coffee text-sm font-sans focus:outline-none focus:ring-2 focus:ring-terracotta transition-all"
              />
            </div>
          </div>

          {/* Section 2: Services Selector */}
          <div className="space-y-3 pt-4 border-t border-coffee/10">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-terracotta font-bold block">
                02 // What do you need help with? *
              </span>
              <span className="text-xs text-coffee/50">Select all that apply</span>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {SERVICE_OPTIONS.map((srv) => {
                const isSelected = selectedServices.includes(srv);

                return (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => toggleService(srv)}
                    className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                      isSelected
                        ? "bg-terracotta text-cream shadow-sm"
                        : "bg-cream text-coffee/80 border border-coffee/15 hover:border-terracotta"
                    }`}
                  >
                    {srv}
                  </button>
                );
              })}
            </div>
            {errors.services && (
              <p className="text-xs text-red-600">{errors.services.message}</p>
            )}
          </div>

          {/* Section 3: Budget & Timeline */}
          <div className="space-y-6 pt-4 border-t border-coffee/10">
            {/* Budget */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-terracotta font-bold block">
                03 // Estimated Investment (Optional)
              </span>
              <div className="flex flex-wrap gap-2">
                {BUDGET_OPTIONS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setValue("budget", b)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium cursor-pointer transition-all ${
                      selectedBudget === b
                        ? "bg-coffee text-cream"
                        : "bg-cream text-coffee/80 border border-coffee/15 hover:bg-peach/20"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-terracotta font-bold block">
                04 // Project Timeline (Optional)
              </span>
              <div className="flex flex-wrap gap-2">
                {TIMELINE_OPTIONS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setValue("timeline", t)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium cursor-pointer transition-all ${
                      selectedTimeline === t
                        ? "bg-coffee text-cream"
                        : "bg-cream text-coffee/80 border border-coffee/15 hover:bg-peach/20"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4: Message */}
          <div className="space-y-2 pt-4 border-t border-coffee/10">
            <span className="text-xs uppercase tracking-widest text-terracotta font-bold block">
              05 // Tell us about your idea *
            </span>
            <textarea
              rows={4}
              placeholder="What are your goals, current pain points, or dream features? The more details, the better."
              {...register("message")}
              className={`w-full p-4 rounded-xl bg-cream border text-coffee text-sm font-sans focus:outline-none focus:ring-2 focus:ring-terracotta transition-all ${
                errors.message ? "border-red-500" : "border-coffee/15"
              }`}
            />
            {errors.message && (
              <p className="text-xs text-red-600">{errors.message.message}</p>
            )}
          </div>

          {/* Error notice if submission failed */}
          {submissionStatus.type === "error" && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{submissionStatus.message}</span>
            </div>
          )}

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={submissionStatus.type === "loading"}
              className="w-full py-4 px-8 rounded-full bg-terracotta hover:bg-coffee text-cream font-display font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {submissionStatus.type === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting Inquiry...</span>
                </>
              ) : (
                <>
                  <span>Send My Idea</span>
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </button>
            <p className="text-center text-xs text-coffee/60 pt-3">
              We respect your privacy. No spam, ever.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
