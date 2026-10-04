import { clinic, navItems } from '../data'
import { Icon } from './Icon'
import type { IconName } from './Icon'
import { Container, Logo, SectionHeading, buttonPrimary } from './ui'

const contacts: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: 'mapPin', label: 'Адрес', value: clinic.address },
  { icon: 'clock', label: 'Часы работы', value: clinic.hours },
  { icon: 'phone', label: 'Телефон', value: clinic.phone, href: clinic.phoneHref },
]

export function Footer() {
  return (
    <>
      <section id="contacts" className="py-16 lg:py-24" aria-labelledby="contacts-title">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading id="contacts-title" eyebrow="Контакты" title="Как нас найти" />
            <ul className="mt-8 grid gap-5">
              {contacts.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-brand ring-1 ring-ink/5">
                    <Icon name={item.icon} />
                  </span>
                  <span>
                    <span className="block text-sm text-ink-soft">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-bold hover:text-brand">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-lg font-bold">{item.value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <a href="#booking" className={`${buttonPrimary} mt-10`}>
              Записаться на приём
            </a>
          </div>
          <MapIllustration />
        </Container>
      </section>

      <footer className="bg-ink py-12 text-white">
        <Container className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
          <Logo light />
          <nav aria-label="Навигация в подвале" className="md:justify-self-end">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 font-semibold text-white/75">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-sm text-white/55 md:col-span-2">
            © 2026 «{clinic.name}». Демо-проект для портфолио: клиника вымышленная, имена и отзывы придуманы, заявки
            никуда не отправляются.
          </p>
        </Container>
      </footer>
    </>
  )
}

function MapIllustration() {
  return (
    <div className="overflow-hidden rounded-[2rem] ring-1 ring-ink/5">
      <svg viewBox="0 0 600 420" className="block h-full w-full" role="img" aria-label="Схема проезда к клинике">
        <rect width="600" height="420" fill="#e8eee9" />
        <path d="M30 270C90 240 160 250 200 300L180 420H0V290Z" fill="#cfe7d5" />
        <path d="M600 40C520 30 470 80 470 140L600 150Z" fill="#cfe7d5" />
        <path d="M-10 120C120 90 200 165 320 132S520 60 610 100" fill="none" stroke="#c4def0" strokeWidth="28" />
        <g fill="#dde5df">
          <rect x="40" y="160" width="80" height="44" rx="6" />
          <rect x="170" y="160" width="70" height="44" rx="6" />
          <rect x="410" y="240" width="90" height="56" rx="6" />
          <rect x="280" y="340" width="80" height="50" rx="6" />
          <rect x="420" y="340" width="70" height="50" rx="6" />
          <rect x="550" y="190" width="60" height="70" rx="6" />
        </g>
        <g stroke="#fff" strokeLinecap="round">
          <path d="M0 225H600M0 318H600M150 0V420M385 0V420M530 170V420" strokeWidth="14" />
          <path d="M265 170V420M0 272H385" strokeWidth="6" />
        </g>
        <circle cx="330" cy="270" r="34" fill="#ff7657" opacity="0.15" />
        <g transform="translate(310 212)">
          <path d="M20 0C9 0 0 9 0 20c0 15 20 36 20 36s20-21 20-36C40 9 31 0 20 0z" fill="#ff7657" />
          <circle cx="20" cy="20" r="7" fill="#fff" />
        </g>
        <g transform="translate(362 168)">
          <rect width="176" height="54" rx="14" fill="#fff" />
          <text x="16" y="24" fontFamily="Unbounded, sans-serif" fontSize="14" fontWeight="600" fill="#0d2b30">
            «Эмаль»
          </text>
          <text x="16" y="42" fontFamily="Manrope, sans-serif" fontSize="12" fill="#4a6266">
            ул. Примерная, 12
          </text>
        </g>
      </svg>
    </div>
  )
}
