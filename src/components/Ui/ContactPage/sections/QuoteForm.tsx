"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { CircleCheck, Upload, Send } from "lucide-react";

interface QuoteFormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  propertyType: "Residential" | "Commercial";
  message: string;
}

const SERVICES = [
  "Roof Repair",
  "Roof Replacement",
  "New Roof",
  "Roof Inspection",
  "Storm Damage",
  "Commercial Roofing",
  "Other",
];

const fieldClass =
  "w-full rounded-lg border border-brand-900/15 bg-white px-3.5 py-2.5 text-sm text-brand-900 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20";
const labelClass = "text-sm font-medium text-brand-900";
const errorClass = "text-xs text-red-500";

const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>();

  const onSubmit = async (data: QuoteFormValues) => {
    // NOTE: no backend endpoint wired up yet — simulate submission so the
    // form is fully usable; swap in a real API call when one exists.
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log("Quote request:", data);
    toast.success("Estimate request received — we'll be in touch shortly!");
    setSubmitted(true);
    reset();
    setFileName(null);
  };

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-2xl border border-brand-900/10 bg-white p-10 text-center shadow-sm">
        <CircleCheck size={48} className="text-brand-600" />
        <h3 className="font-heading text-xl font-bold text-brand-900">Request Received!</h3>
        <p className="text-sm text-brand-900/60">
          Thanks for reaching out. A member of our team will contact you
          shortly to schedule your free estimate.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-semibold text-brand-600 hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto grid max-w-3xl grid-cols-1 gap-5 rounded-2xl border border-brand-900/10 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8"
    >
      <div className="flex flex-col gap-1.5">
        <label className={labelClass} htmlFor="firstName">First Name *</label>
        <input id="firstName" className={fieldClass} placeholder="John" {...register("firstName", { required: "First name is required" })} />
        {errors.firstName && <span className={errorClass}>{errors.firstName.message}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass} htmlFor="lastName">Last Name *</label>
        <input id="lastName" className={fieldClass} placeholder="Doe" {...register("lastName", { required: "Last name is required" })} />
        {errors.lastName && <span className={errorClass}>{errors.lastName.message}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass} htmlFor="phone">Phone Number *</label>
        <input id="phone" type="tel" className={fieldClass} placeholder="(800) 555-0148" {...register("phone", { required: "Phone number is required" })} />
        {errors.phone && <span className={errorClass}>{errors.phone.message}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass} htmlFor="email">Email Address *</label>
        <input
          id="email"
          type="email"
          className={fieldClass}
          placeholder="you@example.com"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
          })}
        />
        {errors.email && <span className={errorClass}>{errors.email.message}</span>}
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass} htmlFor="address">Property Address *</label>
        <input id="address" className={fieldClass} placeholder="123 Main St, Dallas, TX" {...register("address", { required: "Property address is required" })} />
        {errors.address && <span className={errorClass}>{errors.address.message}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass} htmlFor="service">Service Needed *</label>
        <select id="service" className={fieldClass} defaultValue="" {...register("service", { required: "Please select a service" })}>
          <option value="" disabled>Select a service</option>
          {SERVICES.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
        {errors.service && <span className={errorClass}>{errors.service.message}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <span className={labelClass}>Property Type *</span>
        <div className="flex h-[42px] items-center gap-6">
          <label className="flex items-center gap-2 text-sm text-brand-900/80">
            <input type="radio" value="Residential" className="accent-brand-600" {...register("propertyType", { required: true })} />
            Residential
          </label>
          <label className="flex items-center gap-2 text-sm text-brand-900/80">
            <input type="radio" value="Commercial" className="accent-brand-600" {...register("propertyType", { required: true })} />
            Commercial
          </label>
        </div>
        {errors.propertyType && <span className={errorClass}>Please select a property type</span>}
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass} htmlFor="message">Tell Us About Your Roofing Problem</label>
        <textarea id="message" rows={4} className={fieldClass} placeholder="Describe what's going on with your roof..." {...register("message")} />
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <span className={labelClass}>Upload Photos</span>
        <label
          htmlFor="photos"
          className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-brand-900/20 bg-brand-50/50 px-4 py-4 text-sm text-brand-900/60 transition hover:border-brand-600/40"
        >
          <Upload size={18} className="text-brand-600" />
          {fileName ?? "Click to upload photos of the damage (optional)"}
        </label>
        <input
          id="photos"
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => setFileName(e.target.files && e.target.files.length > 0 ? `${e.target.files.length} file(s) selected` : null)}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-900 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
      >
        <Send size={16} /> {isSubmitting ? "Submitting..." : "Request My Free Estimate"}
      </button>
    </form>
  );
};

export default QuoteForm;
