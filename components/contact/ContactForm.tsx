"use client";

import { useState } from "react";
import { z } from "zod";
import { CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const inputBase =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-luxe-400/60 transition-colors";
const labelBase = "block text-xs uppercase tracking-[0.25em] text-luxe-300 mb-2";
const errorBase = "text-red-400 text-xs mt-1";

export default function ContactForm() {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as keyof ContactFormData] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
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
          className="flex flex-col items-center justify-center text-center py-12 space-y-5"
        >
          <div className="w-14 h-14 rounded-full bg-luxe-400/20 flex items-center justify-center">
            <CheckCircle className="w-7 h-7 text-luxe-300" />
          </div>
          <h3 className="font-heading text-2xl text-luxe-200">Message Sent</h3>
          <p className="text-white/60 text-sm max-w-xs">
            Thank you, {formData.name}. We'll respond to {formData.email} within
            one business day.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({});
            }}
            className="text-xs text-white/30 hover:text-luxe-300 transition-colors"
          >
            Send another message
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
              <label className={labelBase}>Name *</label>
              <input
                type="text"
                placeholder="Your name"
                value={formData.name ?? ""}
                onChange={(e) => update("name", e.target.value)}
                className={inputBase}
              />
              {errors.name && <p className={errorBase}>{errors.name}</p>}
            </div>
            <div>
              <label className={labelBase}>Email *</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={formData.email ?? ""}
                onChange={(e) => update("email", e.target.value)}
                className={inputBase}
              />
              {errors.email && <p className={errorBase}>{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className={labelBase}>Subject *</label>
            <input
              type="text"
              placeholder="How can we help?"
              value={formData.subject ?? ""}
              onChange={(e) => update("subject", e.target.value)}
              className={inputBase}
            />
            {errors.subject && <p className={errorBase}>{errors.subject}</p>}
          </div>

          <div>
            <label className={labelBase}>Message *</label>
            <textarea
              rows={5}
              placeholder="Tell us about your project, sourcing needs, or simply say hello…"
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
                Sending…
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
