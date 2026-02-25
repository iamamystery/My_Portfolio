"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Layers, Database, Cloud, ShoppingCart, BarChart3 } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const projects = [
  {
    title: "KingDomX Platform",
    description: "A comprehensive SaaS ecosystem providing enterprise-grade tools for business automation, project management, and team collaboration with real-time analytics.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
    icon: Layers,
    liveUrl: "https://kingdomx-demo.vercel.app/",
    githubUrl: "https://github.com/iamamystery/KingDomX",
    featured: true,
  },
  {
    title: "E-Commerce Suite",
    description: "Full-stack e-commerce solution with inventory management, payment processing, and AI-powered product recommendations.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Docker"],
    icon: ShoppingCart,
    liveUrl: "https://frontend-murex-rho-51.vercel.app/",
    githubUrl: "https://github.com/iamamystery/E-Commerce-Suite",
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time business intelligence platform with interactive visualizations, automated reporting, and predictive analytics.",
    technologies: ["Next.js", "D3.js", "Python", "TensorFlow", "GraphQL"],
    icon: BarChart3,
    liveUrl: "https://analyticsdashboard-nine.vercel.app/",
    githubUrl: "https://github.com/iamamystery/Analytics-Dashboard-",
    featured: true,
  },
  {
    title: "Cloud Infrastructure Manager",
    description: "Multi-cloud resource management platform for deploying, monitoring, and optimizing cloud infrastructure across providers.",
    technologies: ["React", "Go", "Kubernetes", "Terraform", "AWS", "Azure"],
    icon: Cloud,
    liveUrl: "https://cloud-infra-manager.vercel.app/",
    githubUrl: "https://github.com/iamamystery/Cloud-InfraStructure-Manager-",
    featured: false,
  },
  {
    title: "Database Optimization Tool",
    description: "AI-driven database performance optimization tool with query analysis, indexing recommendations, and automated tuning.",
    technologies: ["Python", "PostgreSQL", "Redis", "Machine Learning"],
    icon: Database,
    liveUrl: "https://databaseot.vercel.app/",
    githubUrl: "https://github.com/iamamystery/DataBase-Optimization-Tool.git",
    featured: false,
  },
];

// Animated Card Component with 3D tilt and glow
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useMotionTemplate`${mouseY}deg`, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useMotionTemplate`${mouseX}deg`, { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    
    mouseX.set(x * 10);
    mouseY.set(-y * 10);
    
    const glowPosX = ((e.clientX - rect.left) / rect.width) * 100;
    const glowPosY = ((e.clientY - rect.top) / rect.height) * 100;
    
    setGlowPosition({ x: glowPosX, y: glowPosY });
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
    setGlowPosition({ x: 50, y: 50 });
  }

  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className="relative group flex flex-col h-full"
    >
      {/* Glow effect background */}
      <div 
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(99, 102, 241, 0.4), transparent 40%)`,
        }}
      />
      
      {/* Card content */}
      <div className="relative glass-card overflow-hidden rounded-2xl h-full transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(99,102,241,0.3)]">
        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.1) 45%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 55%, transparent 60%)`,
            x: isHovered ? `${glowPosition.x - 50}%` : "0%",
          }}
        />
        
        <div className="relative p-8 h-full flex flex-col">
          {/* Icon with bounce animation */}
          <motion.div 
            className="w-14 h-14 rounded-2xl bg-linear-to-br from-primary to-secondary flex items-center justify-center mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Icon className="w-7 h-7 text-white" />
          </motion.div>

          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-muted text-sm leading-relaxed mb-6 grow">
            {project.description}
          </p>

          {/* Animated skill badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, techIndex) => (
              <motion.span 
                key={tech} 
                className="skill-badge text-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + techIndex * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 mt-auto">
            <motion.a
              href={project.liveUrl}
              className="flex-1 btn-primary text-sm py-3 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted hover:text-white hover:border-primary transition-all duration-300"
              aria-label="View on GitHub"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
