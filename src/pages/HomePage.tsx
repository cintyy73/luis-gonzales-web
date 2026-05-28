import { Hero } from '@/sections/Hero'
import { Services } from '@/sections/Services'
import { WhyUs } from '@/sections/WhyUs'
import { Brands } from '@/sections/Brands'
import { Gallery } from '@/sections/Gallery'
import { Testimonials } from '@/sections/Testimonials'
import { Zones } from '@/sections/Zones'
import { Faq } from '@/sections/Faq'
import { Contact } from '@/sections/Contact'
import { FinalCta } from '@/sections/FinalCta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Brands />
      <Gallery />
      <Testimonials />
      <Zones />
      <Faq />
      <Contact />
      <FinalCta />
    </>
  )
}
