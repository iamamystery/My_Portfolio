"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Business-First Mindset",
    description: "Every line of code serves a business goal. I build systems that make money, not just look good.",
  },
  {
    icon: Lightbulb,
    title: "Automation Expert",
    description: "Specialized in eliminating manual work. From lead capture to follow-ups, everything automated.",
  },
  {
    icon: Rocket,
    title: "Scale-Ready Architecture",
    description: "Enterprise-grade systems from day one. Built to handle growth without breaking.",
  },
  {
    icon: Users,
    title: "Conversion Focused",
    description: "Deep understanding of user psychology. Every interface optimized for action.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-[#0A0A0A]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="text-[#C9A24A] text-sm tracking-[4px] uppercase mb-4">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6 leading-tight">
              I Build Systems,
              <br />
              <span className="text-gold-gradient">Not Just Websites</span>
            </h2>
            <p className="text-lg text-[#A0A0A0] mb-6 leading-relaxed">
              I'm Muhammad Jawad, founder of Velorium and KingDomX. I don't write code for the sake of it — 
              I build revenue-generating systems that automate your business and convert visitors into customers.
            </p>
            <p className="text-lg text-[#A0A0A0] mb-8 leading-relaxed">
              With 50+ projects delivered and $2M+ in revenue generated for clients, 
              I specialize in the intersection of technology and business growth.
            </p>

            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-bold text-[#C9A24A]">50+</p>
                <p className="text-sm text-[#A0A0A0]">Systems Built</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#C9A24A]">$2M+</p>
                <p className="text-sm text-[#A0A0A0]">Revenue Generated</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#C9A24A]">5+</p>
                <p className="text-sm text-[#A0A0A0]">Years Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="luxury-card p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-[#C9A24A]/10 border border-[#C9A24A]/30 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#C9A24A]" />
                </div>
                <h3 className="text-lg font-bold text-[#F5F5F5] mb-2">{item.title}</h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
