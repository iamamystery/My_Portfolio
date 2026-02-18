"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Crown, Briefcase, Calendar } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const experiences = [
  {
    title: "CEO & Founder",
    company: "King Group of Technology",
    period: "2020 - Present",
    description: "Leading a premier technology company delivering world-class digital solutions. Overseeing strategic direction, product development, and client relationships. Managing a team of talented developers and designers.",
    achievements: [
      "Grew company revenue by 300% in 3 years",
      "Successfully delivered 50+ enterprise projects",
      "Built a team of 25+ skilled professionals",
      "Established partnerships with Fortune 500 companies",
    ],
    icon: Crown,
  },
  {
    title: "Founder",
    company: "KingDomX",
    period: "2022 - Present",
    description: "Founded and developed KingDomX, a revolutionary SaaS platform ecosystem. Architected the entire platform infrastructure and led the development of multiple integrated tools.",
    achievements: [
      "Launched 5 successful SaaS products",
      "Acquired 10,000+ active users",
      "Achieved 99.9% platform uptime",
      "Raised seed funding from top investors",
    ],
    icon: Building2,
  },
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2018 - 2020",
    description: "Led development of enterprise-scale applications using modern tech stack. Mentored junior developers and established coding standards and best practices.",
    achievements: [
      "Reduced application load time by 60%",
      "Implemented CI/CD pipelines",
      "Led migration to microservices architecture",
      "Received Employee of the Year award",
    ],
    icon: Briefcase,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-primary font-medium mb-4 block">Career</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              A journey of leadership, innovation, and technical excellence
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, _) => (
              <motion.div
                key={exp.title}
                variants={fadeInUp}
                className="glass-card p-8 glow-hover transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <exp.icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <span className="hidden md:block text-muted">•</span>
                      <span className="text-primary font-medium">{exp.company}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <p className="text-muted leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
