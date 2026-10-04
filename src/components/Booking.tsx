import { useId, useState } from 'react'
import type { FormEvent } from 'react'
import { bookingServices, visitTimes } from '../data'
import { Icon } from './Icon'
import { Container, SectionHeading, buttonPrimary, buttonSecondary } from './ui'

export type BookingChoice = { service: string; when: string }
type Field = 'name' | 'phone' | 'consent'

// Formats input as +7 (XXX) XXX-XX-XX. Separators are added together with the next digit,
// so backspace never gets stuck on a bracket or dash.
function formatPhone(raw: string) {
  let digits = raw.replace(/\D/g, '')
  if (!digits) return ''
  if (digits.startsWith('8')) digits = `7${digits.slice(1)}`
  if (!digits.startsWith('7')) digits = `7${digits}`
  const rest = digits.slice(1, 11)
  let result = '+7'
  if (rest.length > 0) result += ` (${rest.slice(0, 3)}`
  if (rest.length > 3) result += `) ${rest.slice(3, 6)}`
  if (rest.length > 6) result += `-${rest.slice(6, 8)}`
  if (rest.length > 8) result += `-${rest.slice(8, 10)}`
  return result
}

const fieldClass =
  'w-full rounded-2xl border border-ink/15 bg-white px-4 py-3.5 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/15 aria-[invalid=true]:border-coral'

export function Booking({ value, onChange }: { value: BookingChoice; onChange: (value: BookingChoice) => void }) {
  const id = useId()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({})
  const [sent, setSent] = useState(false)

  const fieldId = (field: string) => `${id}-${field}`

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const found: Partial<Record<Field, string>> = {}
    if (name.trim().length < 2) found.name = 'Подскажите, как к вам обращаться'
    if (phone.replace(/\D/g, '').length !== 11) found.phone = 'Введите номер полностью'
    if (!consent) found.consent = 'Нужно согласие на обработку данных'
    setErrors(found)

    const firstInvalid = (Object.keys(found) as Field[])[0]
    if (firstInvalid) {
      document.getElementById(fieldId(firstInvalid))?.focus()
      return
    }
    setSent(true)
  }

  const reset = () => {
    setName('')
    setPhone('')
    setConsent(false)
    setErrors({})
    setSent(false)
  }

  return (
    <section id="booking" className="py-16 lg:py-24" aria-labelledby="booking-title">
      <Container>
        <div className="grid gap-10 rounded-[2rem] bg-mint px-4 py-8 sm:p-10 lg:grid-cols-2 lg:p-14">
          <div className="px-2 sm:px-0">
            <SectionHeading
              id="booking-title"
              eyebrow="Запись"
              title="Запишитесь на бесплатную консультацию"
              intro="Оставьте номер — администратор перезвонит и подберёт удобное время."
            />
            <ul className="mt-8 grid gap-3 font-bold">
              {['Перезвоним в течение 15 минут', 'Консультация и 3D-снимок бесплатно', 'План лечения с итоговой ценой'].map(
                (point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="grid size-7 place-items-center rounded-full bg-brand text-white">
                      <Icon name="check" className="size-4" />
                    </span>
                    {point}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-[0_30px_60px_-30px_rgba(13,43,48,0.35)] sm:p-8">
            {sent ? (
              <div className="py-6 text-center" role="status">
                <span className="mx-auto grid size-16 place-items-center rounded-full bg-mint text-brand">
                  <Icon name="check" className="size-8" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold">Спасибо, {name.trim()}!</h3>
                <p className="mt-3 text-ink-soft">
                  Администратор перезвонит в течение 15 минут и подтвердит время приёма.
                </p>
                <p className="mt-2 text-sm text-ink-soft">Это демо-версия сайта: заявка никуда не отправлена.</p>
                <button type="button" onClick={reset} className={`${buttonSecondary} mt-8`}>
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={onSubmit} className="grid gap-5">
                <div>
                  <label htmlFor={fieldId('name')} className="mb-2 block font-bold">
                    Имя
                  </label>
                  <input
                    id={fieldId('name')}
                    className={fieldClass}
                    autoComplete="given-name"
                    placeholder="Как к вам обращаться"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? fieldId('name-error') : undefined}
                  />
                  {errors.name && (
                    <p id={fieldId('name-error')} className="mt-2 text-sm font-semibold text-coral-dark">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor={fieldId('phone')} className="mb-2 block font-bold">
                    Телефон
                  </label>
                  <input
                    id={fieldId('phone')}
                    className={fieldClass}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? fieldId('phone-error') : undefined}
                  />
                  {errors.phone && (
                    <p id={fieldId('phone-error')} className="mt-2 text-sm font-semibold text-coral-dark">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="grid gap-5">
                  <SelectField
                    id={fieldId('service')}
                    label="Услуга"
                    value={value.service}
                    options={bookingServices.map((s) => ({ value: s, label: s }))}
                    onChange={(service) => onChange({ ...value, service })}
                  />
                  <SelectField
                    id={fieldId('when')}
                    label="Когда удобно"
                    value={value.when}
                    options={visitTimes}
                    onChange={(when) => onChange({ ...value, when })}
                  />
                </div>

                <div>
                  <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-soft">
                    <input
                      id={fieldId('consent')}
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 size-5 shrink-0 accent-brand"
                      aria-invalid={Boolean(errors.consent)}
                      aria-describedby={errors.consent ? fieldId('consent-error') : undefined}
                    />
                    Согласен на обработку персональных данных в соответствии с политикой конфиденциальности
                  </label>
                  {errors.consent && (
                    <p id={fieldId('consent-error')} className="mt-2 text-sm font-semibold text-coral-dark">
                      {errors.consent}
                    </p>
                  )}
                </div>

                <button type="submit" className={buttonPrimary}>
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

function SelectField({
  id,
  label,
  value,
  options,
  onChange,
}: {
  id: string
  label: string
  value: string
  options: { value: string; label: string }[]
  onChange: (value: string) => void
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-bold">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          className={`${fieldClass} appearance-none pr-11`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Icon
          name="chevronDown"
          className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-ink-soft"
        />
      </div>
    </div>
  )
}
