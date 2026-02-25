"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

export default function Hero() {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/iamamystery", color: "hover:text-gray-400" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-jawad-a563b03b1/", color: "hover:text-blue-500" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted">CEO & Founder</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            <span className="gradient-text">Muhammad Jawad</span>
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4 mb-8 text-lg md:text-xl text-muted"
          >
            <span className="glass-card px-4 py-2 rounded-full">CEO & Founder</span>
            <span className="text-primary">•</span>
            <span className="glass-card px-4 py-2 rounded-full">King Group of Technology</span>
            <span className="text-primary">•</span>
            <span className="glass-card px-4 py-2 rounded-full">KingDomX</span>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-muted max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Visionary Full-Stack & SaaS Developer crafting scalable digital solutions 
            that transform businesses and drive innovation across the globe.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              Get In Touch
            </a>
            <a href="#projects" className="btn-outline inline-flex items-center gap-2">
              View Projects
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted hover:text-white hover:border-primary transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-white transition-colors cursor-pointer"
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </motion.a>
    </section>
  );
}
