"use client"

import { useEffect, useRef, useState } from "react"
import { Film, Clapperboard, Star, ArrowRight, Sparkles, Layers, Video } from "lucide-react"

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
      "High-end cinematography and direction",
      "Editing, color grading, VFX, and sound design",
    ],
    icon: Clapperboard,
  },
]

const adFormats = [
  {
    icon: Sparkles,
    title: "Full AI-Based Cinematic Ads",
    description:
      "Entirely AI-generated advertising films that push the boundaries of visual storytelling. Striking, future-forward aesthetics with faster production cycles.",
  },
  {
    icon: Layers,
    title: "Hybrid Ads",
    description:
      "Live-action shoots combined with AI-generated visuals, creating rich and immersive brand worlds that blend the best of both approaches.",
  },
  {
    icon: Video,
    title: "Traditional Ad Films",
    description:
      "Full-scale traditional production with complete filmmaking — from scripting and direction through to post-production and final delivery.",
  },
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const adRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [adVisible, setAdVisible] = useState(false)

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
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAdVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (adRef.current) observer.observe(adRef.current)
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
              <span className="absolute top-6 right-6 md:top-8 md:right-8 text-5xl md:text-6xl font-bold text-border/50 group-hover:text-primary/20 transition-colors">
                {service.number}
              </span>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 md:mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-foreground mb-1 pr-8">
                {service.title}
              </h3>
              <p className="text-sm text-primary mb-3 md:mb-4">{service.subtitle}</p>
              <p className="text-muted-foreground text-sm mb-5 md:mb-6 text-pretty leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Advertising Films Detail */}
        <div
          ref={adRef}
          className={`mt-16 md:mt-24 transition-all duration-1000 ${
            adVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">

            {/* Left: overview text */}
            <div>
              <span className="text-primary text-xs tracking-widest uppercase font-medium">
                Advertising Films
              </span>
              <h3 className="mt-4 text-2xl md:text-3xl font-light text-foreground leading-snug text-balance">
                We create cinematic advertising films across{" "}
                <span className="font-semibold text-primary">AI, hybrid, and traditional</span>{" "}
                production.
              </h3>
              <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed text-pretty">
                Our focus is on delivering high-end commercials that look and feel like film
                productions, not standard digital content.
              </p>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed text-pretty">
                From concept to final output, we handle the entire filmmaking process, including
                storytelling, direction, production, and post, ensuring every film is visually
                striking, emotionally engaging, and aligned with brand goals.
              </p>
            </div>

            {/* Right: three ad format cards */}
            <div className="space-y-4">
              {adFormats.map((format, index) => (
                <div
                  key={format.title}
                  className={`flex gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/40 transition-all duration-500 ${
                    adVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <format.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm md:text-base mb-1">
                      {format.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed text-pretty">
                      {format.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
