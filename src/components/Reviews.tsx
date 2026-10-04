import { reviews } from '../data'
import { Icon } from './Icon'
import { Container, SectionHeading } from './ui'

function Stars() {
  return (
    <span role="img" className="flex gap-0.5 text-coral-light" aria-label="Оценка 5 из 5">
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} name="star" className="size-5" />
      ))}
    </span>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-white py-16 lg:py-24" aria-labelledby="reviews-title">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading id="reviews-title" eyebrow="Отзывы" title="Что говорят пациенты" />
          <div className="flex items-center gap-4 rounded-3xl bg-cream px-6 py-4">
            <p className="font-display text-4xl font-semibold">4,9</p>
            <div>
              <Stars />
              <p className="mt-1 text-sm text-ink-soft">средняя оценка пациентов</p>
            </div>
          </div>
        </div>
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {reviews.map((review) => (
            <li key={review.name}>
              <figure className="flex h-full flex-col rounded-3xl bg-cream p-6 sm:p-8">
                <Stars />
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed">«{review.text}»</blockquote>
                <figcaption className="mt-6 flex items-center justify-between gap-4 border-t border-ink/10 pt-5">
                  <span>
                    <span className="block font-extrabold">{review.name}</span>
                    <span className="text-sm text-ink-soft">{review.date}</span>
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold">{review.service}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
