"use client";

import { useState } from "react";
import { z } from "zod";
import { CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name is required"),
  email: z.string().email("Please enter a valid email address"),
  country: z.string().min(2, "Country is required"),
  category: z.string().min(1, "Please select a product category"),
  moq: z.string().min(1, "Please indicate your MOQ requirement"),
  message: z.string().min(10, "Please describe your requirements (min 10 chars)")
});

type LeadFormData = z.infer<typeof leadSchema>;
type FormErrors = Partial<Record<keyof LeadFormData, string>>;

const productCategories = [
  "Tote Bags",
  "Clutches",
  "Satchels",
  "Shoppers",
  "Potli Bags",
  "Bucket Bags",
  "Travel Bags",
  "Mixed / Full Catalogue"
];

const moqOptions = [
  "50–100 units",
  "100–500 units",
  "500–1,000 units",
  "1,000–5,000 units",
  "5,000+ units (bulk)"
];

const inputBase =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-luxe-400/60 focus:bg-white/8 transition-colors";
const labelBase = "block text-xs uppercase tracking-[0.25em] text-luxe-300 mb-2";
const errorBase = "text-red-400 text-xs mt-1";

export default function LeadForm() {
  const [formData, setFormData] = useState<Partial<LeadFormData>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (field: keyof LeadFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = leadSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof LeadFormData;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    // Simulate async submit (no backend)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center text-center py-12 space-y-6"
        >
          <div className="w-16 h-16 rounded-full bg-luxe-400/20 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-luxe-300" />
          </div>
          <div className="space-y-2">
            <h3 className="font-heading text-2xl text-luxe-200">
              Enquiry Received
            </h3>
            <p className="text-white/60 max-w-sm text-sm">
              Thank you, {formData.name}. Our export desk will reach out to{" "}
              {formData.email} within 24 hours with a tailored proposal.
            </p>
          </div>
          <div className="glass rounded-2xl px-6 py-4 text-sm text-white/50 space-y-1 w-full max-w-sm text-left">
            <p>
              <span className="text-luxe-300">Company:</span> {formData.company}
            </p>
            <p>
              <span className="text-luxe-300">Category:</span> {formData.category}
            </p>
            <p>
              <span className="text-luxe-300">MOQ:</span> {formData.moq}
            </p>
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({});
            }}
            className="text-xs text-white/30 hover:text-luxe-300 transition-colors"
          >
            Submit another enquiry
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelBase}>Full Name *</label>
              <input
                type="text"
                placeholder="Your full name"
                value={formData.name ?? ""}
                onChange={(e) => update("name", e.target.value)}
                className={inputBase}
              />
              {errors.name && <p className={errorBase}>{errors.name}</p>}
            </div>
            <div>
              <label className={labelBase}>Company *</label>
              <input
                type="text"
                placeholder="Company or brand name"
                value={formData.company ?? ""}
                onChange={(e) => update("company", e.target.value)}
                className={inputBase}
              />
              {errors.company && <p className={errorBase}>{errors.company}</p>}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelBase}>Email *</label>
              <input
                type="email"
                placeholder="you@company.com"
                value={formData.email ?? ""}
                onChange={(e) => update("email", e.target.value)}
                className={inputBase}
              />
              {errors.email && <p className={errorBase}>{errors.email}</p>}
            </div>
            <div>
              <label className={labelBase}>Country *</label>
              <input
                type="text"
                placeholder="Country / Region"
                value={formData.country ?? ""}
                onChange={(e) => update("country", e.target.value)}
                className={inputBase}
              />
              {errors.country && <p className={errorBase}>{errors.country}</p>}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelBase}>Product Category *</label>
              <select
                value={formData.category ?? ""}
                onChange={(e) => update("category", e.target.value)}
                className={inputBase + " appearance-none"}
              >
                <option value="" disabled>
                  Select category
                </option>
                {productCategories.map((c) => (
                  <option key={c} value={c} className="bg-neutral-900">
                    {c}
                  </option>
                ))}
              </select>
              {errors.category && <p className={errorBase}>{errors.category}</p>}
            </div>
            <div>
              <label className={labelBase}>Minimum Order Qty *</label>
              <select
                value={formData.moq ?? ""}
                onChange={(e) => update("moq", e.target.value)}
                className={inputBase + " appearance-none"}
              >
                <option value="" disabled>
                  Select MOQ range
                </option>
                {moqOptions.map((m) => (
                  <option key={m} value={m} className="bg-neutral-900">
                    {m}
                  </option>
                ))}
              </select>
              {errors.moq && <p className={errorBase}>{errors.moq}</p>}
            </div>
          </div>

          <div>
            <label className={labelBase}>Requirements & Notes *</label>
            <textarea
              rows={4}
              placeholder="Describe your requirements: product types, customization, packaging, certifications, timelines…"
              value={formData.message ?? ""}
              onChange={(e) => update("message", e.target.value)}
              className={inputBase + " resize-none"}
            />
            {errors.message && <p className={errorBase}>{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-full bg-luxe-400 text-neutral-950 font-semibold flex items-center justify-center gap-2 hover:bg-luxe-300 transition-colors disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending Enquiry…
              </>
            ) : (
              "Submit Trade Enquiry"
            )}
          </button>

          <p className="text-xs text-white/30 text-center">
            Our export desk responds within 24 business hours.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
