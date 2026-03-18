"use client";

import { Github, Linkedin, Crown, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/iamamystery", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-jawad-a563b03b1/", label: "LinkedIn" },
];

const navLinks = [
  { href: "#results", label: "Results" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-6 bg-[#0A0A0A] border-t border-white/8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-2">
            <Crown className="w-8 h-8 text-[#C9A24A]" />
            <span className="text-2xl font-bold text-[#F5F5F5]">Muhammad Jawad</span>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#111111] border border-white/8 flex items-center justify-center text-[#A0A0A0] hover:text-[#C9A24A] hover:border-[#C9A24A]/30 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#A0A0A0] hover:text-[#C9A24A] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#A0A0A0] text-center md:text-left">
            © {new Date().getFullYear()} Muhammad Jawad. All rights reserved.
          </p>
          <p className="text-sm text-[#A0A0A0]">
            Built for results.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#111111] border border-white/8 flex items-center justify-center text-[#A0A0A0] hover:text-[#C9A24A] hover:border-[#C9A24A]/30 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
