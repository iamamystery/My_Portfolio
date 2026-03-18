"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-[#0A0A0A] relative overflow-hidden" ref={ref}>
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C9A24A]/5 via-transparent to-[#C9A24A]/5"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F5F5] mb-6 leading-tight">
            Let's Build Something That
            <br />
            <span className="text-gold-gradient">Actually Makes Money</span>
          </h2>
          
          <p className="text-xl text-[#A0A0A0] mb-12 max-w-2xl mx-auto">
            Stop wasting time on agencies that don't deliver. Get a system that works — 
            built by someone who understands business, not just code.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <a
              href="#contact"
              className="btn-gold inline-flex items-center gap-3 text-lg px-12 py-5"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <p className="text-sm text-[#A0A0A0] mt-8">
            Average project turnaround: 2-4 weeks • Free strategy call included
          </p>
        </motion.div>
      </div>
    </section>
  );
}
