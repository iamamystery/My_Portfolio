"use client";

import { useMemo } from "react";

export default function ParticleBackground() {
  /* eslint-disable react-hooks/purity */
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 10,
    }));
  }, []);
  /* eslint-enable react-hooks/purity */

  return (
    <>
      <div className="animated-bg" />
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
