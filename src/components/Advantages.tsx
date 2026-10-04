import { advantages } from '../data'
import { Icon } from './Icon'
import { Container, SectionHeading } from './ui'

export function Advantages() {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="advantages-title">
      <Container>
        <SectionHeading
          id="advantages-title"
          eyebrow="Почему мы"
          title="К нам возвращаются — и приводят семью"
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => (
            <li key={item.title} className="rounded-3xl bg-white p-6 ring-1 ring-ink/5">
              <span className="grid size-12 place-items-center rounded-2xl bg-mint text-brand">
                <Icon name={item.icon} />
              </span>
              <h3 className="mt-5 text-lg font-extrabold">{item.title}</h3>
              <p className="mt-2 text-ink-soft">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
