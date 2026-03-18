"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "KingDomX Platform",
    description: "Enterprise SaaS ecosystem with real-time analytics, team collaboration, and automated workflows. Built for scale.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    liveUrl: "https://kingdomx-demo.vercel.app/",
    githubUrl: "https://github.com/iamamystery/KingDomX",
    featured: true,
  },
  {
    title: "Conversion Funnel Engine",
    description: "High-converting landing page system with A/B testing, analytics dashboard, and automated lead scoring.",
    tech: ["React", "GoHighLevel", "Stripe", "Redis"],
    liveUrl: "https://frontend-murex-rho-51.vercel.app/",
    githubUrl: "https://github.com/iamamystery/E-Commerce-Suite",
    featured: true,
  },
  {
    title: "Automation Hub",
    description: "Centralized automation platform connecting multiple tools with custom workflows and real-time monitoring.",
    tech: ["Next.js", "Python", "Docker", "AWS"],
    liveUrl: "https://cloud-infra-manager.vercel.app/",
    githubUrl: "https://github.com/iamamystery/Cloud-InfraStructure-Manager-",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-[#0A0A0A]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <p className="text-[#C9A24A] text-sm tracking-[4px] uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">
            Projects That <span className="text-gold-gradient">Perform</span>
          </h2>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
            A curated selection of high-impact systems. Each one built for conversion, scale, and results.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="project-card group"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  {/* Left Content */}
                  <div className="flex-1">
                    {/* Title & Featured Badge */}
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#F5F5F5] group-hover:text-[#C9A24A] transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="px-3 py-1 text-xs bg-[#C9A24A]/10 border border-[#C9A24A]/30 text-[#C9A24A] rounded">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-[#A0A0A0] text-lg leading-relaxed mb-6 max-w-2xl">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs text-[#A0A0A0] bg-[#111111] border border-white/8 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right - Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-[#C9A24A] text-[#0A0A0A] font-medium rounded hover:bg-[#D4B86A] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border border-white/20 text-[#F5F5F5] rounded hover:border-[#C9A24A] hover:text-[#C9A24A] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Gold Line on Hover */}
              <div className="h-[2px] bg-[#C9A24A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
