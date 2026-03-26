import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Philosophy } from "@/components/philosophy"
import { Process } from "@/components/process"
import { Work } from "@/components/work"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Philosophy />
      <Process />
      <Work />
      <Footer />
    </main>
  )
}
