import { doctors } from '../data'
import { Container, SectionHeading } from './ui'

const tones = [
  'from-mint to-mint-strong text-brand-dark',
  'from-peach to-peach-strong text-coral-dark',
  'from-sky to-sky-strong text-[#2f5f8f]',
  'from-mint to-sky-strong text-brand-dark',
]

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')

export function Doctors() {
  return (
    <section id="doctors" className="py-16 lg:py-24" aria-labelledby="doctors-title">
      <Container>
        <SectionHeading
          id="doctors-title"
          eyebrow="Врачи"
          title="Лечат те, кому доверяют свои семьи"
          intro="Каждый врач ежегодно проходит обучение и ведёт пациента от консультации до результата."
        />
        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-5 lg:grid-cols-4">
          {doctors.map((doctor, index) => (
            <li key={doctor.name}>
              <div
                className={`relative grid aspect-[4/5] place-items-center overflow-hidden rounded-3xl bg-linear-to-br ${tones[index % tones.length]}`}
              >
                <svg aria-hidden="true" viewBox="0 0 200 250" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice">
                  <circle cx="165" cy="40" r="72" fill="#fff" opacity="0.35" />
                  <circle cx="25" cy="225" r="60" fill="#fff" opacity="0.2" />
                </svg>
                <span className="relative font-display text-4xl font-semibold opacity-80 sm:text-6xl">
                  {initials(doctor.name)}
                </span>
              </div>
              <h3 className="mt-4 font-extrabold sm:mt-5 sm:text-lg">{doctor.name}</h3>
              <p className="text-sm text-ink-soft sm:text-base">{doctor.role}</p>
              <p className="mt-1 text-sm font-bold text-brand">{doctor.experience}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {doctor.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-semibold ring-1 ring-ink/10 sm:text-sm">
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
