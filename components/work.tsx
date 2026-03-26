"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Instagram } from "lucide-react"
import Image from "next/image"
import { FilmTimeline } from "@/components/film-timeline"

const projects = [
  {
    title: "Aithe",
    category: "Feature Film · 2003",
    badge: "National Award",
    image: "/images/aithe.png",
    imdb: "https://www.imdb.com/title/tt0460394/",
  },
  {
    title: "Anukokunda Oka Roju",
    category: "Feature Film · 2005",
    badge: "Nandi Award",
    image: "/images/anukokunda.png",
    imdb: "https://www.imdb.com/title/tt0473604/",
  },
  {
    title: "Prayanam",
    category: "Feature Film · 2009",
    badge: "Aryaki Arts",
    image: "/images/prayanam.png",
    imdb: "https://www.imdb.com/title/tt1473105/",
  },
  {
    title: "Sahasam",
    category: "Feature Film · 2013",
    badge: "",
    image: "/images/sahasam.png",
    imdb: "https://www.imdb.com/title/tt2905768/",
  },
  {
    title: "Manamantha",
    category: "Feature Film · 2016",
    badge: "Multilingual",
    image: "/images/manamantha.png",
    imdb: "https://www.imdb.com/title/tt5948916/",
  },
  {
    title: "Okkadunnadu",
    category: "Feature Film · 2007",
    badge: "",
    image: "/images/okkadunnadu.png",
    imdb: "https://www.imdb.com/title/tt0924262/",
  },
  {
    title: "Pothugadda",
    category: "OTT Movie",
    badge: "24 Cinema Street",
    image: "/images/pothugadda.png",
    imdb: null,
    instagram: "https://www.instagram.com/p/DFcgSvvP3-N/",
  },
  {
    title: "RightOLeftO",
    category: "OTT Series",
    badge: "24 Cinema Street",
    image: "/images/righto-lefto.png",
    imdb: null,
    instagram: "https://www.instagram.com/p/Cp0C8-8ppQu/",
  },
]

const timelineFilms = [
  {
    year: "2003",
    title: "Aithe",
    description:
      "A neo-noir crime film following four unemployed youth in conflict with the most dreaded terrorist of the nation. A commercial and critical hit with an intelligent screenplay.",
    awards: ["National Film Award for Best Feature Film in Telugu", "Nandi Award for Best Story Writer"],
    image: "/images/aithe.png",
    imdb: "https://www.imdb.com/title/tt0460394/",
  },
  {
    year: "2005",
    title: "Anukokunda Oka Roju",
    description:
      "A cult classic thriller and an epitome of master storytelling. A young woman accidentally consumes a recreational drug and finds a night missing from her life. Caught in a life-and-death situation, she must recollect the puzzling events of the night to stay alive.",
    awards: ["Nandi Award for Best Feature Film (Silver)", "Nandi Award for Best Screenplay Writer"],
    image: "/images/anukokunda.png",
    imdb: "https://www.imdb.com/title/tt0473604/",
  },
  {
    year: "2007",
    title: "Okkadunnadu",
    description:
      "The tale of a Mafia Don with a rare blood group and a heart condition, seeking the heart of the protagonist to stay alive. Well received by audiences and critics alike.",
    awards: [],
    image: "/images/okkadunnadu.png",
    imdb: "https://www.imdb.com/title/tt0924262/",
  },
  {
    year: "2009",
    title: "Prayanam",
    description:
      "An urbane love story unfolding in real time. A boy meets a girl at an airport and falls in love with her; he has only two hours to convince her before they part ways forever.",
    awards: [],
    image: "/images/prayanam.png",
    imdb: "https://www.imdb.com/title/tt1473105/",
    aryaki: true,
  },
  {
    year: "2013",
    title: "Sahasam",
    description:
      "An action-adventure film following an Indian security guard who travels to Pakistan to retrieve his inheritance left during partition. A high-octane treasure hunt with stunning VFX and box office success.",
    awards: [],
    image: "/images/sahasam.png",
    imdb: "https://www.imdb.com/title/tt2905768/",
  },
  {
    year: "2016",
    title: "Manamantha / Vismayam",
    description:
      "An anthology film following four people in different stages of life and how their stories interconnect. Featuring Mohanlal. The director's most emotional work to date. Released as Manamantha in Telugu and Tamil, and as Vismayam in Malayalam.",
    awards: [],
    image: "/images/manamantha.png",
    imdb: "https://www.imdb.com/title/tt5948916/",
    languages: "Telugu · Tamil · Malayalam",
  },
]

export function Work() {
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
      { threshold: 0.05 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="work" ref={sectionRef} className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Poster Grid ── */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm tracking-widest uppercase font-medium">
            Our Work
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light text-balance">
            A Legacy of{" "}
            <span className="font-semibold text-primary">Storytelling</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground text-pretty">
            Films that have earned national recognition, critical acclaim, and audience love
            across Telugu cinema and beyond.
          </p>
        </div>

        {/* Poster grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-24 md:mb-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative aspect-[2/3] rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-300 group-hover:via-black/40" />
              {project.imdb && (
                <a
                  href={project.imdb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 rounded-full bg-primary/90 flex items-center justify-center z-10"
                  aria-label={`View ${project.title} on IMDb`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-3.5 h-3.5 text-white" />
                </a>
              )}
              {"instagram" in project && project.instagram && (
                <a
                  href={project.instagram as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 rounded-full bg-pink-500/90 flex items-center justify-center z-10"
                  aria-label={`View ${project.title} on Instagram`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Instagram className="w-3.5 h-3.5 text-white" />
                </a>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5">
                <span className="text-[10px] sm:text-xs text-primary/90 tracking-widest uppercase font-medium leading-none">
                  {project.category}
                </span>
                <h3 className="mt-1 text-sm sm:text-base md:text-lg font-semibold text-white leading-tight">
                  {project.title}
                </h3>
                {project.badge && (
                  <span className="inline-block mt-1.5 text-[10px] sm:text-xs bg-primary/30 text-primary px-2 py-0.5 rounded-full border border-primary/40">
                    {project.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── Filmography Timeline ── */}
        <div>
          <div className="mb-10 md:mb-14">
            <span className="text-primary text-sm tracking-widest uppercase font-medium">
              Director&apos;s Filmography
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light text-balance">
              The Films of{" "}
              <span className="font-semibold text-primary">Chandra Sekhar Yeleti</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl text-pretty">
              Seven features spanning 2003 to 2016. Award-winning films are marked with a filled
              dot on the timeline.
            </p>
          </div>

          <FilmTimeline films={timelineFilms} />
        </div>

      </div>
    </section>
  )
}
