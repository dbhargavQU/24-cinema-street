"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Film, Trophy, ExternalLink } from "lucide-react"

export interface FilmEntry {
  year: string
  title: string
  description: string
  awards: string[]
  image: string | null
  imdb?: string | null
  aryaki?: boolean
  languages?: string
}

/* ─── Hook: only triggers AFTER first paint, with rootMargin so
   cards animate while still partially off-screen ─────────────── */
function useInView(rootMargin = "0px 0px -80px 0px") {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    /* rAF ensures the initial opacity-0 state is painted before we
       attach the observer, so the transition is always visible */
    const id = requestAnimationFrame(() => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true)
            obs.disconnect()
          }
        },
        { rootMargin }
      )
      obs.observe(el)
    })

    return () => cancelAnimationFrame(id)
  }, [rootMargin])

  return { ref, inView }
}

/* ─── Scroll-driven line that fills downward as user scrolls ──── */
function TimelineLine() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const tick = () => {
      const el = wrapRef.current
      if (!el) return
      const { top, height } = el.getBoundingClientRect()
      const vh = window.innerHeight
      const scrolled = Math.max(0, vh * 0.6 - top)
      setPct(Math.min(1, scrolled / (height + vh * 0.2)))
    }
    window.addEventListener("scroll", tick, { passive: true })
    tick()
    return () => window.removeEventListener("scroll", tick)
  }, [])

  return (
    <div ref={wrapRef} className="absolute inset-0 pointer-events-none" aria-hidden>
      {/* Desktop centre line */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border" />
      <div
        className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-0.5 bg-primary rounded-full"
        style={{
          height: `${pct * 100}%`,
          transition: "height 80ms linear",
        }}
      />

      {/* Mobile left line */}
      <div className="md:hidden absolute left-[18px] top-0 bottom-0 w-px bg-border" />
      <div
        className="md:hidden absolute left-[18px] top-0 w-0.5 bg-primary rounded-full"
        style={{
          height: `${pct * 100}%`,
          transition: "height 80ms linear",
        }}
      />
    </div>
  )
}

/* ─── Dot on the timeline line ─────────────────────────────────── */
function FilmDot({ hasAward, index, small }: { hasAward: boolean; index: number; small?: boolean }) {
  const { ref, inView } = useInView("0px 0px -40px 0px")

  return (
    <div
      ref={ref}
      className="transition-all duration-500"
      style={{
        transitionDelay: `${index * 60}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "scale(1)" : "scale(0.4)",
      }}
    >
      <div
        className={`rounded-full border-2 flex items-center justify-center
          ${hasAward ? "border-primary bg-primary/15" : "border-border bg-background"}
          ${small ? "w-4 h-4" : "w-5 h-5"}`}
      >
        {hasAward && (
          <div className={`rounded-full bg-primary ${small ? "w-1.5 h-1.5" : "w-2 h-2"}`} />
        )}
      </div>
    </div>
  )
}

/* ─── Individual film card ──────────────────────────────────────── */
function FilmCard({ film, index, side }: { film: FilmEntry; index: number; side: "left" | "right" }) {
  const { ref, inView } = useInView("0px 0px -60px 0px")

  const hiddenStyle: React.CSSProperties = {
    opacity: 0,
    transform: side === "left" ? "translateX(-48px)" : "translateX(48px)",
  }
  const visibleStyle: React.CSSProperties = {
    opacity: 1,
    transform: "translateX(0)",
  }

  return (
    <div
      ref={ref}
      style={{
        transition: "opacity 0.65s ease-out, transform 0.65s ease-out",
        transitionDelay: `${index * 55}ms`,
        ...(inView ? visibleStyle : hiddenStyle),
      }}
    >
      <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-md transition-colors duration-300">
        <div className="flex h-full">
          {/* Poster */}
          <div className="relative w-[88px] sm:w-[108px] shrink-0 bg-secondary min-h-[150px]">
            {film.image ? (
              <Image
                src={film.image}
                alt={film.title}
                fill
                className="object-cover"
                sizes="108px"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Film className="w-7 h-7 text-muted-foreground/20" />
              </div>
            )}
            <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-0.5 rounded-full">
              {film.year}
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 min-w-0">
            <div>
              <div className="flex items-start gap-2 flex-wrap mb-2">
                <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight">
                  {film.title}
                </h3>
                {film.aryaki && (
                  <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/20 mt-0.5 whitespace-nowrap">
                    Aryaki Arts
                  </span>
                )}
                {film.languages && (
                  <span className="text-[10px] bg-secondary text-muted-foreground px-2 py-0.5 rounded-full mt-0.5 whitespace-nowrap">
                    {film.languages}
                  </span>
                )}
                {film.imdb && (
                  <a
                    href={film.imdb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 inline-flex items-center gap-1 text-[10px] text-primary hover:text-primary/70 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    IMDb <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-pretty">
                {film.description}
              </p>
            </div>
            {film.awards.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {film.awards.map((a) => (
                  <li key={a} className="flex items-start gap-1.5 text-xs text-primary">
                    <Trophy className="w-3 h-3 shrink-0 mt-0.5" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Main export ───────────────────────────────────────────────── */
export function FilmTimeline({ films }: { films: FilmEntry[] }) {
  return (
    <div className="relative">
      <TimelineLine />

      <div className="relative space-y-10 md:space-y-14">
        {films.map((film, index) => {
          const isLeft = index % 2 === 0

          return (
            <div key={film.title} className="relative">
              {/* ── Desktop: alternating columns ── */}
              <div className="hidden md:grid grid-cols-[1fr_48px_1fr] items-center">
                <div className="pr-6">
                  {isLeft ? <FilmCard film={film} index={index} side="left" /> : null}
                </div>
                <div className="flex justify-center">
                  <FilmDot hasAward={film.awards.length > 0} index={index} />
                </div>
                <div className="pl-6">
                  {!isLeft ? <FilmCard film={film} index={index} side="right" /> : null}
                </div>
              </div>

              {/* ── Mobile: line on left, card on right ── */}
              <div className="md:hidden flex items-start gap-4 pl-2">
                <div className="shrink-0 mt-5 ml-1.5">
                  <FilmDot hasAward={film.awards.length > 0} index={index} small />
                </div>
                <div className="flex-1 min-w-0">
                  <FilmCard film={film} index={index} side="right" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
