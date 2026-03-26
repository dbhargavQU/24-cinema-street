"use client"

import Image from "next/image"
import { Instagram, Twitter, Linkedin, Youtube, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
]

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer id="contact" className="py-16 md:py-24 px-4 sm:px-6 bg-secondary/30 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-balance mb-4 md:mb-6">
            Ready to create{" "}
            <span className="font-semibold text-primary">cinema</span> for your brand?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto text-pretty">
            Let&apos;s craft a story that moves your audience. Founded by producer Anupama Koduri,
            cult director Chandra Sekhar Yeleti, and renowned surgeon Dr. Sarath Chandra Reddy
            Gurrala, we bring together artistry, discipline, and perspective.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </Button>
            <a
              href="https://www.imdb.com/name/nm1923369/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-[1.45rem] text-base font-medium border border-border rounded-md hover:bg-secondary text-foreground transition-all duration-300"
            >
              View on IMDB
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-border">
          {/* Logo */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
              <Image
                src="/images/logo.png"
                alt="24 Cinema Street"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm md:text-base">24 Cinema Street</p>
              <p className="text-xs md:text-sm text-muted-foreground">Where brands become narratives.</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <social.icon className="w-4 h-4 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>

        {/* Affiliation note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Creatively affiliated with{" "}
            <span className="text-foreground">Aryaki Arts</span>, Hyderabad
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 24 Cinema Street. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
