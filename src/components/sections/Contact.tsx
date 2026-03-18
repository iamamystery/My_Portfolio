"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: `New Project Inquiry: ${formData.projectType}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", projectType: "", budget: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-[#111111]" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A24A] text-sm tracking-[4px] uppercase mb-4">
            Start Your Project
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">
            Ready to <span className="text-gold-gradient">Scale?</span>
          </h2>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            Tell me about your project. I'll review and get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          onSubmit={handleSubmit}
          className="luxury-card p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="block text-sm text-[#A0A0A0] mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="luxury-input"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-[#A0A0A0] mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="luxury-input"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Project Type */}
            <div>
              <label className="block text-sm text-[#A0A0A0] mb-2">Project Type</label>
              <select
                required
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="luxury-input"
              >
                <option value="">Select a service</option>
                <option value="Funnel Development">Funnel Development</option>
                <option value="Automation Systems">Automation Systems</option>
                <option value="Full-Stack App">Full-Stack Application</option>
                <option value="UI/UX Systems">UI/UX Systems</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm text-[#A0A0A0] mb-2">Budget Range</label>
              <select
                required
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="luxury-input"
              >
                <option value="">Select budget</option>
                <option value="$5K - $10K">$5K - $10K</option>
                <option value="$10K - $25K">$10K - $25K</option>
                <option value="$25K - $50K">$25K - $50K</option>
                <option value="$50K+">$50K+</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className="block text-sm text-[#A0A0A0] mb-2">Project Details</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="luxury-input resize-none"
              placeholder="Tell me about your project, goals, and timeline..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-[#0A0A0A]/30 border-t-[#0A0A0A] rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex items-center gap-3 text-green-400 bg-green-400/10 border border-green-400/30 rounded-lg p-4"
            >
              <CheckCircle className="w-5 h-5" />
              <p>Message sent! I'll get back to you within 24 hours.</p>
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex items-center gap-3 text-red-400 bg-red-400/10 border border-red-400/30 rounded-lg p-4"
            >
              <AlertCircle className="w-5 h-5" />
              <p>Something went wrong. Please try again or email me directly.</p>
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
