"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Layers, Database, Cloud, ShoppingCart, BarChart3 } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const projects = [
  {
    title: "KingDomX Platform",
    description: "A comprehensive SaaS ecosystem providing enterprise-grade tools for business automation, project management, and team collaboration with real-time analytics.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
    icon: Layers,
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "E-Commerce Suite",
    description: "Full-stack e-commerce solution with inventory management, payment processing, and AI-powered product recommendations.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Docker"],
    icon: ShoppingCart,
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time business intelligence platform with interactive visualizations, automated reporting, and predictive analytics.",
    technologies: ["Next.js", "D3.js", "Python", "TensorFlow", "GraphQL"],
    icon: BarChart3,
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Cloud Infrastructure Manager",
    description: "Multi-cloud resource management platform for deploying, monitoring, and optimizing cloud infrastructure across providers.",
    technologies: ["React", "Go", "Kubernetes", "Terraform", "AWS", "Azure"],
    icon: Cloud,
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Database Optimization Tool",
    description: "AI-driven database performance optimization tool with query analysis, indexing recommendations, and automated tuning.",
    technologies: ["Python", "PostgreSQL", "Redis", "Machine Learning"],
    icon: Database,
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-primary font-medium mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Showcasing innovative solutions built with cutting-edge technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, _) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                className={`glass-card overflow-hidden glow-hover transition-all duration-500 group ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex-1 btn-primary text-sm py-3 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted hover:text-white hover:border-primary transition-all duration-300"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
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
