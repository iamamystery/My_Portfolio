"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Clock, Users, Target } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Revenue System",
    client: "Premium Retail Brand",
    problem: "Low conversion rate and high cart abandonment",
    solution: "Built automated funnel with abandoned cart recovery and upsell system",
    metrics: [
      { icon: TrendingUp, value: "+340%", label: "Revenue Increase" },
      { icon: Users, value: "12K", label: "New Customers" },
      { icon: Target, value: "8.5%", label: "Conversion Rate" },
    ],
  },
  {
    id: 2,
    title: "SaaS Onboarding Automation",
    client: "B2B Software Company",
    problem: "Manual onboarding causing 40% user churn in first week",
    solution: "Created automated onboarding flow with behavioral triggers and in-app guidance",
    metrics: [
      { icon: TrendingUp, value: "-65%", label: "Churn Reduction" },
      { icon: Clock, value: "75%", label: "Time Saved" },
      { icon: Users, value: "5.2K", label: "Active Users" },
    ],
  },
  {
    id: 3,
    title: "Lead Generation Engine",
    client: "Real Estate Agency",
    problem: "Inconsistent lead flow and poor lead quality",
    solution: "Built multi-channel lead capture system with qualification automation",
    metrics: [
      { icon: TrendingUp, value: "+280%", label: "Lead Volume" },
      { icon: Target, value: "45%", label: "Qualified Rate" },
      { icon: Clock, value: "24/7", label: "Auto-Running" },
    ],
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="section-padding bg-[#0A0A0A]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <p className="text-[#C9A24A] text-sm tracking-[4px] uppercase mb-4">
            Proven Results
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">
            Systems That <span className="text-gold-gradient">Deliver</span>
          </h2>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            Real results from real projects. Every system is built to drive measurable business outcomes.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="luxury-card p-8 group"
            >
              {/* Client Tag */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#C9A24A]"></div>
                <span className="text-xs text-[#A0A0A0] tracking-wide uppercase">
                  {study.client}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">
                {study.title}
              </h3>

              {/* Problem/Solution */}
              <div className="space-y-3 mb-8">
                <div>
                  <p className="text-xs text-[#A0A0A0] uppercase tracking-wide mb-1">Problem</p>
                  <p className="text-sm text-[#F5F5F5]/80">{study.problem}</p>
                </div>
                <div>
                  <p className="text-xs text-[#C9A24A] uppercase tracking-wide mb-1">Solution</p>
                  <p className="text-sm text-[#F5F5F5]/80">{study.solution}</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.08]">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <metric.icon className="w-5 h-5 text-[#C9A24A] mx-auto mb-2" />
                    <p className="text-xl font-bold text-[#C9A24A]">{metric.value}</p>
                    <p className="text-xs text-[#A0A0A0] mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
