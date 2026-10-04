import { useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { serviceTabs } from '../data'
import { Icon } from './Icon'
import { Container, SectionHeading } from './ui'

const nextKeys = ['ArrowRight', 'ArrowDown']
const prevKeys = ['ArrowLeft', 'ArrowUp']

export function Services() {
  const [active, setActive] = useState(serviceTabs[0].id)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const current = serviceTabs.find((tab) => tab.id === active) ?? serviceTabs[0]

  // Roving focus between tabs, as in the WAI-ARIA tabs pattern
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = nextKeys.includes(event.key) ? 1 : prevKeys.includes(event.key) ? -1 : 0
    if (step === 0) return
    event.preventDefault()
    const index = serviceTabs.findIndex((tab) => tab.id === active)
    const next = (index + step + serviceTabs.length) % serviceTabs.length
    setActive(serviceTabs[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="services" className="py-16 lg:py-24" aria-labelledby="services-title">
      <Container>
        <SectionHeading
          id="services-title"
          eyebrow="Услуги и цены"
          title="Понятные цены на всё лечение"
          intro="Без скрытых доплат: в стоимость уже входят анестезия, снимки и материалы."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[260px_1fr] lg:gap-8">
          <div
            role="tablist"
            aria-label="Направления лечения"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
            onKeyDown={onKeyDown}
          >
            {serviceTabs.map((tab, index) => {
              const selected = tab.id === active
              return (
                <button
                  key={tab.id}
                  ref={(element) => {
                    tabRefs.current[index] = element
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(tab.id)}
                  className={`flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3 text-left font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                    selected ? 'bg-ink text-white' : 'bg-white text-ink hover:bg-mint'
                  }`}
                >
                  <Icon name={tab.icon} className="size-5" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          <div
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            tabIndex={0}
            className="rounded-3xl bg-white p-2 ring-1 ring-ink/5 focus-visible:outline-2 focus-visible:outline-brand sm:p-4"
          >
            <ul className="divide-y divide-ink/10">
              {current.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col gap-1 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <div>
                    <p className="text-lg font-bold">{item.name}</p>
                    {item.note && <p className="text-sm text-ink-soft">{item.note}</p>}
                  </div>
                  <p
                    className={`shrink-0 font-display text-lg font-semibold ${item.price === 'Бесплатно' ? 'text-brand' : ''}`}
                  >
                    {item.price}
                  </p>
                </li>
              ))}
            </ul>
            <p className="px-4 pt-2 pb-3 text-sm text-ink-soft">
              Точную стоимость врач назовёт после осмотра и зафиксирует в договоре.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
