"use client"

import { useEffect, useRef, useState } from "react"
import { Film, Award, Stethoscope, Trophy, ExternalLink } from "lucide-react"

const founders = [
  {
    name: "Chandra Sekhar Yeleti",
    role: "Filmmaker & Creative Director",
    description:
      "A path-breaking filmmaker with a signature storytelling style. National Film Award winner known for neo-noir, thriller, and drama genres. His films are widely recognized for original concepts and narrative innovation.",
    icon: Film,
    link: "https://www.imdb.com/name/nm1923369/",
    linkLabel: "IMDB Profile",
  },
  {
    name: "Anupama Koduri",
    role: "Producer",
    description:
      "Producer who has successfully delivered 2 OTT originals for one of the leading OTT players in the South, bringing compelling stories to modern audiences across platforms.",
    icon: Award,
  },
  {
    name: "Dr. Sarath Chandra Reddy Gurrala",
    role: "Surgeon & Cinema Enthusiast",
    description:
      "A renowned surgeon with over two decades of experience and a deep passion for cinema, bringing real-world perspective and discipline that defines how we approach storytelling.",
    icon: Stethoscope,
  },
]

const awards = [
  "National Film Award for Best Feature Film in Telugu (Aithe)",
  "Nandi Award for Best Story Writer (Aithe)",
  "Nandi Award for Best Feature Film, Silver (Anukokunda Oka Roju)",
  "Nandi Award for Best Screenplay Writer (Anukokunda Oka Roju)",
]

const filmography = [
  { year: "2003", title: "Aithe", note: "National Award Winner" },
  { year: "2005", title: "Anukokunda Oka Roju", note: "Nandi Award Winner" },
  { year: "2007", title: "Okkadunnadu", note: "" },
  { year: "2009", title: "Prayanam", note: "" },
  { year: "2013", title: "Sahasam", note: "" },
  { year: "2016", title: "Manamantha", note: "Telugu · Tamil · Malayalam" },
  { year: "2016", title: "Vismayam", note: "" },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showFullBio, setShowFullBio] = useState(false)

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
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div
          className={`max-w-3xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm tracking-widest uppercase font-medium">
            About Us
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-balance">
            In a world saturated with content, we build stories that feel{" "}
            <span className="font-semibold text-primary">larger than the screen.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground text-pretty">
            At 24 Cinema Street, every frame is designed to captivate, every narrative
            built to resonate, and every film created to elevate brands beyond the ordinary.
          </p>
        </div>

        {/* Founders */}
        <div className="mt-14 md:mt-20">
          <h3
            className={`text-sm tracking-widest uppercase text-muted-foreground mb-6 md:mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            The Minds Behind the Vision
          </h3>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {founders.map((founder, index) => (
              <div
                key={founder.name}
                className={`group p-5 md:p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <founder.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h4 className="text-base md:text-lg font-medium text-foreground">{founder.name}</h4>
                <p className="text-sm text-primary mt-1">{founder.role}</p>
                <p className="mt-3 text-sm text-muted-foreground text-pretty leading-relaxed">
                  {founder.description}
                </p>
                {founder.link && (
                  <a
                    href={founder.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    {founder.linkLabel}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chandra Sekhar Yeleti — Director Spotlight */}
        <div
          className={`mt-14 md:mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Bio */}
            <div className="p-6 md:p-8 bg-card border border-border rounded-xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Film className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground">
                    A Filmmaker Who Redefined Narrative
                  </h3>
                  <a
                    href="https://www.imdb.com/name/nm1923369/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:text-primary/80 inline-flex items-center gap-1 transition-colors"
                  >
                    View on IMDB <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                Chandrasekhar Yeleti is a highly revered filmmaker working prominently in the Telugu
                film industry, known for original and highly creative concepts. He began his career
                shooting <em>Janmabhoomi</em> ads for the Andhra Pradesh state government and co-created
                the hugely popular <em>Amrutham</em> TV series on Gemini TV.
              </p>
              {showFullBio && (
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-pretty">
                  His debut feature <em>Aithe</em> (2003), a neo-noir crime thriller about four
                  unemployed youth, was both a commercial and critical hit, winning the National Film
                  Award for Best Feature Film in Telugu. <em>Anukokunda Oka Roju</em> (2005) is
                  considered a cult classic, the story of a young woman who wakes to find a night missing
                  from her life. He went on to make <em>Okkadunnadu</em> (2007), <em>Prayanam</em> (2009),
                  <em>Sahasam</em> (2013), and the multilingual anthology <em>Manamantha</em> (2016).
                </p>
              )}
              <button
                onClick={() => setShowFullBio(!showFullBio)}
                className="mt-4 text-xs text-primary hover:text-primary/80 font-medium transition-colors"
              >
                {showFullBio ? "Show less" : "Read full biography →"}
              </button>
            </div>

            {/* Awards & Filmography */}
            <div className="flex flex-col gap-5 md:gap-6">
              {/* Awards */}
              <div className="p-5 md:p-6 bg-card border border-border rounded-xl flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5 text-primary" />
                  <h4 className="font-medium text-foreground">Awards</h4>
                </div>
                <ul className="space-y-2.5">
                  {awards.map((award) => (
                    <li key={award} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="leading-relaxed">{award}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Filmography */}
              <div className="p-5 md:p-6 bg-card border border-border rounded-xl flex-1">
                <h4 className="font-medium text-foreground mb-4">Filmography</h4>
                <div className="space-y-2">
                  {filmography.map((film) => (
                    <div key={film.title} className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-muted-foreground font-mono text-xs">{film.year}</span>
                      <span className="text-foreground flex-1">{film.title}</span>
                      {film.note && (
                        <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                          {film.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aryaki Affiliation */}
        <div
          className={`mt-14 md:mt-20 p-6 md:p-8 bg-card/50 border border-border rounded-xl transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-xs tracking-widest uppercase font-medium">
            Creative Affiliation
          </span>
          <h3 className="mt-3 text-xl md:text-2xl font-light text-foreground">
            An Affiliation Rooted in Cinema:{" "}
            <span className="font-semibold text-primary">Aryaki Arts</span>
          </h3>
          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed text-pretty">
            24 Cinema Street is creatively affiliated with{" "}
            <span className="text-foreground font-medium">Aryaki Arts</span>, a
            Hyderabad-based boutique production banner known for its commitment to meaningful,
            story-driven cinema. Founded in 2019 and operating out of the Gachibowli–Nanakramguda
            region, Aryaki Arts takes a selective and craft-focused approach to filmmaking, prioritizing
            originality, narrative depth, and artistic integrity over volume.
          </p>
          <div className="mt-5 md:mt-6 grid sm:grid-cols-3 gap-3 md:gap-4">
            {[
              "A story-first approach to filmmaking",
              "A commitment to content-driven cinema",
              "A space for experimentation beyond mainstream formulas",
            ].map((point) => (
              <div key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span className="leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed text-pretty">
            A notable work under the Aryaki Arts banner is{" "}
            <span className="text-foreground font-medium">Prayanam (2009)</span>, a romantic
            drama set almost entirely within an airport, widely appreciated for its minimalistic
            yet concept-driven narrative approach.
          </p>
        </div>

        {/* Legacy statement */}
        <div
          className={`mt-8 md:mt-10 p-6 md:p-8 border border-border/50 rounded-xl transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            This uncommon blend of{" "}
            <span className="text-foreground font-medium">artistry, discipline, and perspective</span>{" "}
            defines how we approach storytelling, drawing on both{" "}
            <span className="text-primary">emotional intelligence</span> and{" "}
            <span className="text-primary">technical precision</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
