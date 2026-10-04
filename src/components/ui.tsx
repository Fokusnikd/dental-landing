import type { ReactNode } from 'react'
import { Icon } from './Icon'

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2'

export const buttonPrimary = `${buttonBase} bg-coral px-6 py-3.5 text-white shadow-[0_12px_30px_-12px_rgba(200,71,43,0.8)] hover:bg-coral-dark focus-visible:outline-coral`

export const buttonPrimarySmall = `${buttonBase} bg-coral px-5 py-2.5 text-white hover:bg-coral-dark focus-visible:outline-coral`

export const buttonSecondary = `${buttonBase} border border-ink/15 bg-white/70 px-6 py-3.5 text-ink hover:border-ink/30 hover:bg-white focus-visible:outline-brand`

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  light = false,
}: {
  id: string
  eyebrow: string
  title: string
  intro?: string
  light?: boolean
}) {
  return (
    <div className="max-w-2xl">
      <p className={`text-sm font-bold uppercase tracking-[0.16em] ${light ? 'text-mint-strong' : 'text-brand'}`}>
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3 font-display text-[1.75rem] font-semibold leading-tight sm:text-4xl">
        {title}
      </h2>
      {intro && <p className={`mt-4 text-lg ${light ? 'text-white/75' : 'text-ink-soft'}`}>{intro}</p>}
    </div>
  )
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`grid size-10 place-items-center rounded-full ${light ? 'bg-white/10 text-mint-strong' : 'bg-brand text-white'}`}
      >
        <Icon name="tooth" className="size-5.5" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-lg font-semibold">Эмаль</span>
        <span className={`mt-1 block text-xs ${light ? 'text-white/60' : 'text-ink-soft'}`}>стоматология</span>
      </span>
    </span>
  )
}
