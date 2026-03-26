"use client"

import { useEffect, useRef, useState } from "react"
import { Film, Clapperboard, Star, ArrowRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Feature Films & OTT Productions",
    subtitle: "Cinema at its finest",
    description:
      "We actively develop and produce feature films for theatrical release, original OTT films and series, and story-driven cinematic content. With the creative backing and legacy of Aryaki Arts, our productions are rooted in strong storytelling and distinctive narrative voices.",
    features: [
      "Feature films for theatrical release",
      "Original OTT films and series",
      "Story-driven cinematic content",
    ],
    icon: Film,
  },
  {
    number: "02",
    title: "Cinematic Ad Films",
    subtitle: "Where brands become narratives",
    description:
      "We craft high-end advertising films that look and feel like cinema, not conventional digital content. From brand films to commercials, we focus on emotion-driven storytelling and premium visual language.",
    features: [
      "Emotion-driven brand storytelling",
      "Premium cinematic visual language",
      "Memorable brand narratives",
    ],
    icon: Star,
  },
  {
    number: "03",
    title: "Traditional Cinematic Productions",
    subtitle: "The craft of classic filmmaking",
    description:
      "For stories that demand the craft of classic filmmaking, we deliver full-scale productions with cinematic excellence, covering everything from concept and script development through to post-production.",
    features: [
      "Concept and script development",
      "High-end cinematography & direction",
      "Editing, color grading, VFX, and sound design",
    ],
    icon: Clapperboard,
  },
]

export function Services() {
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
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
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
            What We Do
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light text-balance">
            Cinema Across{" "}
            <span className="font-semibold text-primary">Formats</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground text-pretty">
            We operate at the intersection of film production and advertising, 
            bringing cinematic storytelling to every format we touch. We don&apos;t 
            separate content and commercials; we elevate both.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`group relative bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Number badge */}
              <span className="absolute top-6 right-6 md:top-8 md:right-8 text-5xl md:text-6xl font-bold text-border/50 group-hover:text-primary/20 transition-colors">
                {service.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 md:mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-medium text-foreground mb-1 pr-8">
                {service.title}
              </h3>
              <p className="text-sm text-primary mb-3 md:mb-4">{service.subtitle}</p>
              <p className="text-muted-foreground text-sm mb-5 md:mb-6 text-pretty leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
