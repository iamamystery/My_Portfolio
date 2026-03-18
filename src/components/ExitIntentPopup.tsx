"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lightbulb, ArrowRight } from "lucide-react";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves through the top of the page
      if (e.clientY < 10 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="exit-popup"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="exit-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-[#C9A24A]/10 border border-[#C9A24A]/30 flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-[#C9A24A]" />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4">
              Before you leave...
            </h3>
            <p className="text-[#A0A0A0] mb-8 leading-relaxed">
              Want a free strategy idea for your business? I&apos;ll analyze your current setup 
              and send you 3 actionable improvements you can implement today.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              onClick={handleClose}
              className="btn-gold w-full flex items-center justify-center gap-2"
            >
              Get Free Strategy
              <ArrowRight className="w-4 h-4" />
            </a>

            <p className="text-xs text-[#A0A0A0] mt-4 text-center">
              No spam. Unsubscribe anytime.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
