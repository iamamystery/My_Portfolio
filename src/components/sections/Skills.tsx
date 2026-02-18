"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Database, Cloud, Palette, Wrench } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "Zustand"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "Python", "Go", "REST APIs", "GraphQL", "WebSocket"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "TypeORM", "Firebase", "Supabase"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Vercel", "Docker", "Kubernetes", "CI/CD", "Terraform", "GitHub Actions"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    skills: ["Figma", "Adobe XD", "Responsive Design", "Design Systems", "Prototyping", "User Research"],
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Tools & Methods",
    icon: Wrench,
    skills: ["Git", "GitHub", "Jest", "Cypress", "Agile/Scrum", "Jira", "Notion"],
    color: "from-yellow-500 to-orange-500",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-primary font-medium mb-4 block">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              A comprehensive toolkit built over years of professional development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, _) => (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                className="glass-card p-6 glow-hover transition-all duration-500 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold mb-4">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
