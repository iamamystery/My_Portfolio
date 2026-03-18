"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Funnel, Zap, Code, Palette, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Funnel,
    title: "Funnel Development",
    description: "End-to-end sales funnels that convert visitors into customers. Landing pages, email sequences, and automated follow-ups.",
    outcome: "Higher conversions, automated sales",
  },
  {
    icon: Zap,
    title: "Automation Systems",
    description: "GoHighLevel, Zapier, and custom automation workflows that eliminate manual tasks and scale your operations.",
    outcome: "Save 20+ hours/week, zero errors",
  },
  {
    icon: Code,
    title: "Full-Stack Web Apps",
    description: "Next.js, React, and Node.js applications built for performance, scalability, and user experience.",
    outcome: "Fast, reliable, future-proof tech",
  },
  {
    icon: Palette,
    title: "UI/UX Systems",
    description: "Design systems and interfaces that guide users to action. Every element optimized for conversion.",
    outcome: "Better UX, higher engagement",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-[#111111]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <p className="text-[#C9A24A] text-sm tracking-[4px] uppercase mb-4">
            What I Deliver
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">
            Systems Built for <span className="text-gold-gradient">Results</span>
          </h2>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            Not just code. Not just design. Complete systems that automate, convert, and scale.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="service-card group cursor-pointer"
            >
              <div className="icon-wrapper">
                <service.icon className="w-6 h-6 text-[#C9A24A]" />
              </div>

              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4">
                {service.title}
              </h3>

              <p className="text-[#A0A0A0] leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-white/8">
                <p className="text-sm text-[#C9A24A]">
                  Result: {service.outcome}
                </p>
                <ArrowRight className="w-5 h-5 text-[#C9A24A] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
