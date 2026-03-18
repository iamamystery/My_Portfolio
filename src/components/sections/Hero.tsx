"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Content */}
      <div className="max-w-5xl mx-auto w-full px-6 md:px-12">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.15 }}
          className="text-center"
        >
          {/* Pre-headline */}
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-[#C9A24A] text-sm tracking-[4px] uppercase mb-8"
          >
            Muhammad Jawad • System Architect & Founder
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F5F5F5] leading-[1.1] mb-6"
          >
            I Build Systems That
            <br />
            <span className="text-gold-gradient">Turn Traffic Into Revenue</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Automation, lead generation, and full-stack solutions that scale your business 
            without scaling your workload.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="btn-gold flex items-center gap-2 group"
            >
              View Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="btn-outline"
            >
              Book a Call
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mt-20 pt-12 border-t border-white/[0.08]"
          >
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#C9A24A]">50+</p>
              <p className="text-sm text-[#A0A0A0] mt-1">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#C9A24A]">300%</p>
              <p className="text-sm text-[#A0A0A0] mt-1">Avg. Revenue Growth</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#C9A24A]">10K+</p>
              <p className="text-sm text-[#A0A0A0] mt-1">Active Users Served</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="line"></div>
        <ChevronDown className="w-4 h-4 text-[#C9A24A]" />
      </div>
    </section>
  );
}
