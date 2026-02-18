"use client";

import { Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    icon: Sparkles,
    text: "Inovação Digital",
    description: "Soluções tecnológicas de ponta",
  },
  {
    icon: TrendingUp,
    text: "Crescimento Garantido",
    description: "Resultados mensuráveis e escaláveis",
  },
  {
    icon: Users,
    text: "Engajamento Total",
    description: "Conecte-se com seu público",
  },
  {
    icon: Zap,
    text: "Performance Máxima",
    description: "Otimização em tempo real",
  },
];

export function InfoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sliding panels with door push effect */}
      <div className="absolute inset-0 flex">
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          const isActive = index === currentSlide;
          const isPrev =
            index === (currentSlide - 1 + slides.length) % slides.length;

          return (
            <div
              key={index}
              className="absolute inset-0 transition-all duration-1000 ease-in-out"
              style={{
                transform: isActive
                  ? "translateX(0%) scale(1)"
                  : isPrev
                  ? "translateX(-100%) scale(0.95)"
                  : "translateX(100%) scale(0.95)",
                opacity: isActive ? 10 : 0,
                transformOrigin: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center space-y-4 px-8">
                    <Icon
                      className="w-24 h-24 mx-auto text-[#00D9C8]"
                      strokeWidth={1.5}
                    />
                    <h3 className="text-4xl font-bold text-white">
                      {slide.text}
                    </h3>
                    <p className="text-xl text-blue-100">{slide.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentSlide ? "w-12 bg-[#00D9C8]" : "w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
