import { useState } from 'react'
import { Advantages } from './components/Advantages'
import { Booking } from './components/Booking'
import type { BookingChoice } from './components/Booking'
import { Doctors } from './components/Doctors'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Quiz } from './components/Quiz'
import type { BookingPrefill } from './components/Quiz'
import { Reviews } from './components/Reviews'
import { Services } from './components/Services'
import { bookingServices, visitTimes } from './data'

export default function App() {
  const [booking, setBooking] = useState<BookingChoice>({
    service: bookingServices[0],
    when: visitTimes[0].value,
  })

  // The quiz result pre-fills the booking form and scrolls to it
  const bookFromQuiz = ({ service, when }: BookingPrefill) => {
    setBooking((current) => ({ service, when: when ?? current.when }))
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.getElementById('booking')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-bold"
      >
        Перейти к содержанию
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Advantages />
        <Services />
        <Quiz onBook={bookFromQuiz} />
        <Doctors />
        <Reviews />
        <Faq />
        <Booking value={booking} onChange={setBooking} />
      </main>
      <Footer />
    </>
  )
}
