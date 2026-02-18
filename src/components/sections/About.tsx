"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Rocket, Users } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Target,
      title: "Visionary Leadership",
      description: "Leading King Group of Technology with a clear vision for digital transformation and technological innovation.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Creating cutting-edge SaaS products at KingDomX that solve real-world problems and drive business growth.",
    },
    {
      icon: Rocket,
      title: "Technical Excellence",
      description: "Mastering modern tech stacks including Next.js, React, Node.js, and cloud technologies to deliver scalable solutions.",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Building strong relationships with clients and teams to deliver exceptional results and foster innovation.",
    },
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-primary font-medium mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pioneering the <span className="gradient-text">Future of Tech</span>
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              As a visionary leader and expert developer, I bridge the gap between 
              ambitious ideas and exceptional digital solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              variants={fadeInUp}
              className="glass-card p-8 glow-hover transition-all duration-500"
            >
              <h3 className="text-2xl font-bold mb-4">King Group of Technology</h3>
              <p className="text-muted leading-relaxed mb-4">
                As CEO and Founder, I lead a premier technology company dedicated to 
                delivering world-class digital solutions. We specialize in enterprise 
                software development, digital transformation, and innovative tech solutions 
                that help businesses thrive in the digital age.
              </p>
              <p className="text-muted leading-relaxed">
                Our mission is to empower organizations with cutting-edge technology 
                that drives growth, efficiency, and competitive advantage.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="glass-card p-8 glow-hover transition-all duration-500"
            >
              <h3 className="text-2xl font-bold mb-4">KingDomX</h3>
              <p className="text-muted leading-relaxed mb-4">
                Founder of KingDomX, a revolutionary SaaS platform ecosystem designed to 
                streamline business operations and enhance productivity. KingDomX represents 
                the culmination of years of experience in building scalable, user-centric 
                software solutions.
              </p>
              <p className="text-muted leading-relaxed">
                We are committed to democratizing enterprise-grade tools and making 
                powerful technology accessible to businesses of all sizes.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, _) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="glass-card p-6 text-center glow-hover transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
