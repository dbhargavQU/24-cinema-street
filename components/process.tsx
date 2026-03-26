"use client"

import { useEffect, useRef, useState } from "react"
import { Lightbulb, BookOpen, Video, Wand2 } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    title: "Concept",
    description: "We build ideas rooted in brand insight and audience psychology.",
  },
  {
    icon: BookOpen,
    title: "Story",
    description: "We shape narratives that engage emotionally and intellectually.",
  },
  {
    icon: Video,
    title: "Production",
    description: "Whether it is a film or an ad, execution is seamless and precise.",
  },
  {
    icon: Wand2,
    title: "Post",
    description: "We refine every frame to achieve a polished, cinematic finish.",
  },
]

export function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 sm:px-6 bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm tracking-widest uppercase font-medium">
            Our Process
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light text-balance">
            From Idea to{" "}
            <span className="font-semibold text-primary">Impact</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground text-pretty">
            We offer a complete, end-to-end filmmaking pipeline.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line — desktop only */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Mobile: vertical stepped layout; Desktop: horizontal 4-col grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative group transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Icon circle */}
                <div className="flex justify-center md:justify-center">
                  <div className="relative inline-flex">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                      <step.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs md:text-sm font-semibold">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4 md:mt-6 text-center">
                  <h3 className="text-base md:text-xl font-medium text-foreground mb-1 md:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground text-pretty leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
