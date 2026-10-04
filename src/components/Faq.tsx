import { clinic, faq } from '../data'
import { Icon } from './Icon'
import { Container, SectionHeading } from './ui'

export function Faq() {
  return (
    <section id="faq" className="py-16 lg:py-24" aria-labelledby="faq-title">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading id="faq-title" eyebrow="Вопросы" title="Отвечаем на частые вопросы" />
          <p className="mt-6 text-ink-soft">Не нашли ответ? Позвоните — администратор подскажет.</p>
          <a href={clinic.phoneHref} className="mt-2 inline-flex items-center gap-2 text-lg font-extrabold">
            <Icon name="phone" className="size-5 text-brand" />
            {clinic.phone}
          </a>
        </div>
        <div className="grid gap-3">
          {faq.map((item) => (
            <details key={item.q} className="group rounded-2xl bg-white px-6 ring-1 ring-ink/5 open:ring-brand/30">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-bold [&::-webkit-details-marker]:hidden">
                {item.q}
                <Icon name="chevronDown" className="size-5 shrink-0 text-brand transition group-open:rotate-180" />
              </summary>
              <p className="pb-6 text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
