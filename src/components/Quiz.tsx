import { useState } from 'react'
import { concerns, toothCounts, visitTimes } from '../data'
import type { Concern } from '../data'
import { Icon } from './Icon'
import { Container, SectionHeading, buttonPrimary } from './ui'

type Step = 'concern' | 'count' | 'when' | 'result'
export type BookingPrefill = { service: string; when: string | null }

const rub = new Intl.NumberFormat('ru-RU')

export function Quiz({ onBook }: { onBook: (prefill: BookingPrefill) => void }) {
  const [concern, setConcern] = useState<Concern | null>(null)
  const [count, setCount] = useState<string | null>(null)
  const [when, setWhen] = useState<string | null>(null)
  const [stepIndex, setStepIndex] = useState(0)

  const selected = concerns.find((c) => c.value === concern)
  // The tooth-count question only makes sense for per-tooth treatments
  const steps: Step[] = ['concern', ...(selected?.perTooth ? (['count'] as const) : []), 'when', 'result']
  const step = steps[stepIndex]
  const progress = step === 'result' ? 1 : stepIndex / (steps.length - 1)

  const next = () => setStepIndex((i) => i + 1)
  const back = () => setStepIndex((i) => Math.max(0, i - 1))
  const restart = () => {
    setConcern(null)
    setCount(null)
    setWhen(null)
    setStepIndex(0)
  }

  const countOption = toothCounts.find((t) => t.value === count)
  const whenOption = visitTimes.find((t) => t.value === when)
  const factor = selected?.perTooth && countOption ? countOption.factor : [1, 1]
  const estimate = selected ? [selected.range[0] * factor[0], selected.range[1] * factor[1]] : null

  return (
    <section id="quiz" className="py-16 lg:py-24" aria-labelledby="quiz-title">
      <Container>
        <div className="grid gap-10 rounded-[2rem] bg-ink px-4 py-8 text-white sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
          <div className="flex flex-col px-2 sm:px-0">
            <SectionHeading
              light
              id="quiz-title"
              eyebrow="Калькулятор"
              title="Узнайте стоимость лечения за минуту"
              intro="Ответьте на пару вопросов — покажем ориентировочную сумму. Точную назовёт врач на бесплатной консультации."
            />
            <div className="mt-8 lg:mt-auto">
              <p className="text-sm font-semibold text-white/60">
                {step === 'result' ? 'Готово' : `Вопрос ${stepIndex + 1}`}
              </p>
              <div className="mt-3 h-1.5 rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-coral-light transition-[width] duration-500"
                  style={{ width: `${Math.max(progress, 0.06) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-5 text-ink sm:p-8" aria-live="polite">
            {step === 'concern' && (
              <Question
                title="Что вас беспокоит?"
                options={concerns}
                value={concern}
                onSelect={(value) => {
                  setConcern(value)
                  setCount(null)
                  next()
                }}
              />
            )}
            {step === 'count' && (
              <Question
                title="Сколько зубов требуют внимания?"
                options={toothCounts}
                value={count}
                onSelect={(value) => {
                  setCount(value)
                  next()
                }}
              />
            )}
            {step === 'when' && (
              <Question
                title="Когда вам удобно прийти?"
                options={visitTimes}
                value={when}
                onSelect={(value) => {
                  setWhen(value)
                  next()
                }}
              />
            )}
            {step === 'result' && selected && estimate && (
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand">Ориентировочно</p>
                <p className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                  {rub.format(estimate[0])} – {rub.format(estimate[1])}&nbsp;₽
                </p>
                <p className="mt-4 text-ink-soft">
                  {selected.service}
                  {selected.perTooth && countOption ? `, ${countOption.label.toLowerCase()}` : ''}. Точную сумму
                  врач назовёт на бесплатной консультации и зафиксирует в договоре — дальше она не изменится.
                </p>
                {whenOption && (
                  <p className="mt-4 flex items-center gap-2 text-sm font-bold">
                    <Icon name="calendar" className="size-5 text-brand" />
                    Удобное время: {whenOption.label.toLowerCase()}
                  </p>
                )}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    className={buttonPrimary}
                    onClick={() => onBook({ service: selected.service, when })}
                  >
                    Записаться с этим расчётом
                  </button>
                  <button type="button" onClick={restart} className="px-4 py-3 font-bold text-ink-soft hover:text-ink">
                    Пройти заново
                  </button>
                </div>
              </div>
            )}
            {stepIndex > 0 && step !== 'result' && (
              <button type="button" onClick={back} className="mt-6 font-bold text-ink-soft hover:text-ink">
                ← Назад
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

function Question<T extends string>({
  title,
  options,
  value,
  onSelect,
}: {
  title: string
  options: { value: T; label: string }[]
  value: T | null
  onSelect: (value: T) => void
}) {
  return (
    <fieldset>
      <legend className="font-display text-xl font-semibold">{title}</legend>
      <div className="mt-6 grid gap-3">
        {options.map((option) => {
          const checked = option.value === value
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={checked}
              onClick={() => onSelect(option.value)}
              className={`group flex items-center justify-between gap-4 rounded-2xl border px-4 py-3.5 text-left font-bold transition sm:px-5 sm:py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                checked ? 'border-brand bg-mint' : 'border-ink/10 hover:border-brand hover:bg-mint/50'
              }`}
            >
              {option.label}
              <Icon name="arrowRight" className="size-5 shrink-0 text-brand transition group-hover:translate-x-1" />
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
