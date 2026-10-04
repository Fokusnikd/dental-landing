import { stats } from '../data'
import { Icon } from './Icon'
import { Container, buttonPrimary, buttonSecondary } from './ui'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 right-[-15%] size-[38rem] rounded-full bg-mint opacity-80 blur-3xl"
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-dark shadow-sm">
            <Icon name="sparkle" className="size-4" />
            Консультация и 3D-снимок — бесплатно
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Лечим зубы без&nbsp;боли и&nbsp;сюрпризов в&nbsp;чеке
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            Составляем план лечения с итоговой суммой и фиксируем её в договоре. Принимаем строго по времени — без
            очередей и долгого ожидания.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#booking" className={buttonPrimary}>
              Записаться на приём
              <Icon name="arrowRight" className="size-5" />
            </a>
            <a href="#quiz" className={buttonSecondary}>
              Рассчитать стоимость
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse justify-end">
                <dt className="mt-1 text-sm text-ink-soft">{stat.label}</dt>
                <dd className="font-display text-xl font-semibold whitespace-nowrap sm:text-3xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <HeroIllustration />
      </Container>
    </section>
  )
}

const floatingCard = 'absolute rounded-2xl bg-white px-4 py-3 shadow-[0_20px_40px_-20px_rgba(13,43,48,0.4)]'

function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <svg viewBox="0 0 400 400" className="w-full" role="img" aria-label="Иллюстрация: здоровый белый зуб">
        <defs>
          <linearGradient id="hero-blob" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#dff4ee" />
            <stop offset="1" stopColor="#bfe8dc" />
          </linearGradient>
          <linearGradient id="hero-tooth" x1="0" y1="0" x2="0.6" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#f1f8f6" />
          </linearGradient>
        </defs>
        <path
          d="M205 28C298 34 372 102 368 202C364 300 290 374 192 370C96 366 26 296 32 196C38 100 112 22 205 28Z"
          fill="url(#hero-blob)"
        />
        <circle cx="200" cy="200" r="150" fill="none" stroke="#10806f" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 8" />
        <ellipse cx="200" cy="316" rx="74" ry="10" fill="#0d2b30" opacity="0.08" />
        <g transform="translate(60 48) scale(1.4)">
          <path
            d="M60 40C40 40 30 60 34 85C38 110 48 120 52 150C55 170 62 180 70 178C80 176 82 150 90 140C95 134 105 134 110 140C118 150 120 176 130 178C138 180 145 170 148 150C152 120 162 110 166 85C170 60 160 40 140 40C125 40 115 48 100 48C85 48 75 40 60 40Z"
            fill="url(#hero-tooth)"
            stroke="#9fd6c6"
            strokeWidth="2"
          />
          <path d="M152 64C158 78 156 98 149 114" fill="none" stroke="#dff4ee" strokeWidth="7" strokeLinecap="round" />
          <path d="M58 58C50 64 47 74 48 84" fill="none" stroke="#bfe8dc" strokeWidth="4" strokeLinecap="round" />
        </g>
        <path d="M300 92l6 14 14 6-14 6-6 14-6-14-14-6 14-6z" fill="#ff7657" />
        <path d="M100 280l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" fill="#10806f" />
        <path d="M112 100l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#10806f" opacity="0.5" />
      </svg>

      <div className={`${floatingCard} left-0 top-[10%] motion-safe:animate-float`}>
        <p className="text-xs font-semibold text-ink-soft">Ближайшая запись</p>
        <p className="mt-1 flex items-center gap-2 font-bold">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full rounded-full bg-brand opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex size-2.5 rounded-full bg-brand" />
          </span>
          Сегодня, 18:30
        </p>
      </div>

      <div
        className={`${floatingCard} bottom-[8%] right-0 flex items-center gap-3 motion-safe:animate-float [animation-delay:1.5s]`}
      >
        <span className="grid size-9 place-items-center rounded-xl bg-mint text-brand">
          <Icon name="receipt" className="size-5" />
        </span>
        <p className="text-sm font-bold leading-tight">
          Цена фиксируется
          <br />в договоре
        </p>
      </div>
    </div>
  )
}
