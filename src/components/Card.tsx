interface CardProps {
  id?: number
  name?: string
  status: 'Alive' | 'Dead' | 'Unknown' | string | undefined
  species?: string
  gender: 'Male' | 'Female' | 'Unknown' | string | undefined
  image?: string
  created?: string
}

export default function Card(characters: CardProps) {
  const { image, created, status, species, name, gender } = characters

  return (
    <section className="p-5 mx-auto overflow-hidden shadow max-w-80 rounded-xl bg-slate-100 dark:bg-gray-900">
      <img src={image} className="aspect-square rounded-xl" />
      <article className="mt-5">
        <p className="flex gap-2 mb-1 text-sm">
          <span className="font-bold text-green-500">
            {status === 'Alive'
              ? `👍 ${status}`
              : status === 'Dead'
              ? `☠️ ${status}`
              : `🤷‍♂️ ${status}`}
          </span>
          <time className="text-blue-500" dateTime={created}>
            {new Date(created ?? '').toLocaleDateString()}
          </time>
        </p>
        <h3 className="text-xl font-medium">{name}</h3>
        <section className="flex gap-2 mt-4">
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-blue-600 rounded-full bg-blue-50">
            {species === 'Human'
              ? `👤 ${species}`
              : species === 'Alien'
              ? `👽 ${species}`
              : species === 'Poopybutthole'
              ? `💩 ${species}`
              : species}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-indigo-600 rounded-full bg-indigo-50">
            {gender === 'Male'
              ? `♂️ ${gender}`
              : gender === 'Female'
              ? `♀️ ${gender}`
              : gender === 'Unknown'
              ? `🤷‍♂️ ${gender}`
              : gender}
          </span>
        </section>
      </article>
    </section>
  )
}
