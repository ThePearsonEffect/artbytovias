import { artworks } from '../data/artworks'

export default function ArtByTovias() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-yellow-400">Art By Tovias</h1>
        <p className="mt-3 text-xl text-yellow-200 italic">
          Photography, digital visions, and soulful creativity.
        </p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {artworks.map((art) => (
          <div key={art.id} className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
            <img src={art.image} alt={art.title} className="w-full h-64 object-cover" />
            <div className="p-4 text-black">
              <h3 className="font-bold text-lg">{art.title}</h3>
              <p className="text-sm text-gray-700">{art.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

