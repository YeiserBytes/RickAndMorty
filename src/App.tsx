import { useEffect, useState } from 'react'
import Card from './components/Card'

export default function App () {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results)
        setLoading(false)
      })
  }, [page])

  return (
    <main className="">
      <section className="grid w-screen min-h-screen gap-5 p-10 text-white sm:grid-cols-2 lg:grid-cols-6 md:grid-cols-4">
        {characters.map(
          ({ id, name, status, species, gender, image, created }) => (
            <Card
              key={id}
              created={created}
              name={name}
              status={status}
              species={species}
              gender={gender}
              image={image}
            />
          )
        )}
        {loading && <p>Loading...</p>}
        <div id="observer" style={{ height: '1px', width: '1px' }} />
      </section>
      <footer>
        <div className="flex justify-center w-full my-5">
          <button
            onClick={() => setPage((prev) => prev - 1)}
            className="px-10 py-2 mr-2 bg-sky-500 rounded-xl"
          >
            &#10092;
          </button>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="px-10 py-2 mr-2 bg-sky-500 rounded-xl"
          >
            &#10093;
          </button>
        </div>
        <p className="text-center text-gray-400">
          Made with ❤️ by{' '}
          <a
            className="text-blue-500"
            href="https://github.com/yeiserbytes"
            target="_blank"
          >
            Yeiser Jimenez
          </a>
        </p>
      </footer>
    </main>
  )
}
