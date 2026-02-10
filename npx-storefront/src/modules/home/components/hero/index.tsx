import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden border-b border-ui-border-base bg-[#0b0d14]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80"
          alt="Sports car with performance styling"
          className="h-full w-full object-cover opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(11,13,20,0.95)_0%,_rgba(11,13,20,0.85)_45%,_rgba(11,13,20,0.4)_70%,_rgba(11,13,20,0.0)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.2),_rgba(15,23,42,0.0)_60%)]" />
        <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(14,116,144,0.28),_rgba(14,116,144,0)_70%)]" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(249,115,22,0.18),_rgba(249,115,22,0)_70%)]" />
      </div>
      <div className="content-container relative z-10 flex min-h-[70vh] flex-col items-start justify-center gap-8 py-16 text-white small:py-24">
        <span className="text-xs uppercase tracking-[0.45em] text-orange-200/80">
          JQMOTO Garage Supplies
        </span>
        <div className="max-w-2xl">
          <Heading level="h1" className="text-4xl font-semibold leading-tight">
            Bodykits, speakers, lights, and audio systems built for bold
            builds.
          </Heading>
          <Heading
            level="h2"
            className="mt-4 text-lg font-normal text-white/70"
          >
            Curated upgrades for clean fitment, crisp sound, and head‑turning
            style.
          </Heading>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <LocalizedClientLink href="/store">
            <Button className="bg-orange-500 text-white hover:bg-orange-600">
              Shop new arrivals
            </Button>
          </LocalizedClientLink>
          <LocalizedClientLink href="/find-us">
            <Button
              variant="secondary"
              className="border-white/30 text-grey-90 hover:text-grey-90"
            >
              Find us
            </Button>
          </LocalizedClientLink>
        </div>
        <div className="grid w-full max-w-3xl grid-cols-1 gap-4 text-sm text-white/70 small:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
            Fitment-first picks
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
            Audio systems tuned right
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
            Lighting upgrades that pop
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
