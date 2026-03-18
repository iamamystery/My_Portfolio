"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow Solutions",
    content: "Muhammad transformed our entire lead generation process. We went from 50 leads per month to over 300. The automation he built saves us 30+ hours every week.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Founder, GrowthLabs",
    content: "The funnel system Muhammad built paid for itself in the first month. Our conversion rate jumped from 2.1% to 8.5%. Best investment we've made.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Director of Ops, ScaleUp Inc",
    content: "Working with Muhammad felt like having a CTO on demand. He understood our business goals and built systems that actually moved the needle.",
    rating: 5,
  },
];

export default function Authority() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="authority" className="section-padding bg-[#111111]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <p className="text-[#C9A24A] text-sm tracking-[4px] uppercase mb-4">
            Client Results
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">
            Trusted by <span className="text-gold-gradient">Business Leaders</span>
          </h2>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            Real feedback from real clients who've seen real results.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="testimonial-card"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A24A] text-[#C9A24A]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-[#F5F5F5] leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-white/8">
                <p className="font-semibold text-[#F5F5F5]">{testimonial.name}</p>
                <p className="text-sm text-[#A0A0A0]">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
