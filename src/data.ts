import type { IconName } from './components/Icon'

// Fictional clinic: every name, number and review on this page is demo content.
export const clinic = {
  name: 'Эмаль',
  phone: '+7 (495) 000-00-00',
  phoneHref: 'tel:+74950000000',
  address: 'Москва, ул. Примерная, 12',
  hours: 'Ежедневно с 9:00 до 21:00',
}

export const navItems = [
  { label: 'Услуги', href: '#services' },
  { label: 'Стоимость', href: '#quiz' },
  { label: 'Врачи', href: '#doctors' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Вопросы', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
]

export const stats = [
  { value: '12 лет', label: 'лечим зубы' },
  { value: '8 400+', label: 'пациентов' },
  { value: '4,9', label: 'средняя оценка' },
]

export const advantages: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'shield',
    title: 'Без боли',
    text: 'Компьютерная анестезия и лечение во сне для тех, кто боится.',
  },
  {
    icon: 'receipt',
    title: 'Цена не вырастет',
    text: 'Итоговую сумму фиксируем в договоре до начала лечения.',
  },
  {
    icon: 'scan',
    title: 'Точная диагностика',
    text: '3D-снимок и микроскоп — лечим причину, а не симптомы.',
  },
  {
    icon: 'clock',
    title: 'Без ожидания',
    text: 'Принимаем строго по времени. Задержались мы — скидка 10% на визит.',
  },
]

export type ServiceItem = { name: string; note?: string; price: string }

export const serviceTabs: { id: string; label: string; icon: IconName; items: ServiceItem[] }[] = [
  {
    id: 'treat',
    label: 'Лечение',
    icon: 'tooth',
    items: [
      { name: 'Консультация и осмотр', note: 'с 3D-снимком и планом лечения', price: 'Бесплатно' },
      { name: 'Лечение кариеса', note: 'с пломбой', price: 'от 4 500 ₽' },
      { name: 'Лечение каналов', note: 'под микроскопом, 1 канал', price: 'от 7 800 ₽' },
      { name: 'Художественная реставрация', price: 'от 6 900 ₽' },
    ],
  },
  {
    id: 'hygiene',
    label: 'Гигиена',
    icon: 'sparkle',
    items: [
      { name: 'Профессиональная чистка', note: 'ультразвук и Air Flow', price: '6 500 ₽' },
      { name: 'Кабинетное отбеливание', price: '24 000 ₽' },
      { name: 'Реминерализация эмали', price: '2 500 ₽' },
    ],
  },
  {
    id: 'implant',
    label: 'Имплантация',
    icon: 'implant',
    items: [
      { name: 'Имплантат под ключ', note: 'установка и коронка', price: 'от 67 000 ₽' },
      { name: 'Удаление зуба', price: 'от 3 500 ₽' },
      { name: 'Синус-лифтинг', price: 'от 30 000 ₽' },
    ],
  },
  {
    id: 'ortho',
    label: 'Ортодонтия',
    icon: 'braces',
    items: [
      { name: 'Консультация ортодонта', price: '1 500 ₽' },
      { name: 'Брекет-система', note: 'одна челюсть', price: 'от 45 000 ₽' },
      { name: 'Элайнеры', note: 'весь курс', price: 'от 120 000 ₽' },
    ],
  },
  {
    id: 'kids',
    label: 'Детям',
    icon: 'child',
    items: [
      { name: 'Осмотр и знакомство с врачом', price: '1 000 ₽' },
      { name: 'Лечение молочного зуба', price: 'от 3 200 ₽' },
      { name: 'Герметизация фиссур', note: '1 зуб', price: '2 000 ₽' },
    ],
  },
]

export type Concern = 'treat' | 'hygiene' | 'implant' | 'ortho' | 'kids'

export const concerns: {
  value: Concern
  label: string
  service: string
  perTooth: boolean
  range: [number, number]
}[] = [
  { value: 'treat', label: 'Болит или разрушен зуб', service: 'Лечение зубов', perTooth: true, range: [4500, 12000] },
  { value: 'hygiene', label: 'Хочу чистку или отбеливание', service: 'Гигиена и отбеливание', perTooth: false, range: [6500, 30500] },
  { value: 'implant', label: 'Нет одного или нескольких зубов', service: 'Имплантация', perTooth: true, range: [67000, 95000] },
  { value: 'ortho', label: 'Неровные зубы или прикус', service: 'Ортодонтия', perTooth: false, range: [45000, 240000] },
  { value: 'kids', label: 'Нужна помощь ребёнку', service: 'Детская стоматология', perTooth: true, range: [3200, 6000] },
]

export const toothCounts: { value: string; label: string; factor: [number, number] }[] = [
  { value: 'one', label: 'Один зуб', factor: [1, 1] },
  { value: 'few', label: '2–3 зуба', factor: [2, 3] },
  { value: 'many', label: '4 и больше', factor: [4, 6] },
  { value: 'unknown', label: 'Не знаю, нужен осмотр', factor: [1, 3] },
]

export const visitTimes = [
  { value: 'soon', label: 'Сегодня или завтра' },
  { value: 'week', label: 'На этой неделе' },
  { value: 'later', label: 'Позже, хочу спланировать' },
]

export const bookingServices = ['Бесплатная консультация', ...concerns.map((c) => c.service)]

export const doctors = [
  { name: 'Анна Соколова', role: 'Главный врач, терапевт', experience: 'Стаж 15 лет', tags: ['Лечение каналов', 'Реставрация'] },
  { name: 'Игорь Лебедев', role: 'Хирург-имплантолог', experience: 'Стаж 12 лет', tags: ['Имплантация', 'Удаление'] },
  { name: 'Мария Орлова', role: 'Ортодонт', experience: 'Стаж 9 лет', tags: ['Брекеты', 'Элайнеры'] },
  { name: 'Дмитрий Ким', role: 'Детский стоматолог', experience: 'Стаж 7 лет', tags: ['Дети от 3 лет', 'Седация'] },
]

export const reviews = [
  {
    name: 'Елена К.',
    service: 'Лечение каналов',
    date: 'сентябрь 2026',
    text: 'Боялась идти к стоматологу лет пять. Врач всё объяснила, показала снимок и сразу назвала сумму — в итоге заплатила ровно столько. Укол даже не почувствовала.',
  },
  {
    name: 'Сергей П.',
    service: 'Имплантация',
    date: 'август 2026',
    text: 'Ставил два имплантата. Понравилось, что план и цену расписали заранее, без «а ещё нужно доплатить». Через три месяца — как свои зубы.',
  },
  {
    name: 'Ольга М.',
    service: 'Детская стоматология',
    date: 'июль 2026',
    text: 'Сын, 6 лет, вышел из кабинета довольный и с наклейкой. Врач нашёл подход за пять минут, вылечили два зуба за один визит.',
  },
]

export const faq = [
  {
    q: 'Будет ли больно?',
    a: 'Нет. Используем современные анестетики и компьютерную анестезию — укол почти не ощущается. Для тех, кто очень боится, есть лечение во сне под седацией.',
  },
  {
    q: 'Можно ли узнать стоимость заранее?',
    a: 'Да. На бесплатной консультации врач делает 3D-снимок, составляет план лечения и называет итоговую сумму. Мы фиксируем её в договоре — дальше она не меняется.',
  },
  {
    q: 'Есть ли рассрочка?',
    a: 'Да, рассрочка без переплаты до 12 месяцев. Оформление занимает 10 минут прямо в клинике.',
  },
  {
    q: 'С какого возраста лечите детей?',
    a: 'С 3 лет. Первый визит — знакомство: ребёнок привыкает к кабинету, а врач проводит осмотр в игровой форме.',
  },
  {
    q: 'Что взять на первый приём?',
    a: 'Только паспорт. Если есть снимки из другой клиники — возьмите их, врач учтёт их при составлении плана.',
  },
]
