import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="h-screen w-full bg-black text-white flex items-center justify-center">
      <div className="border-4 border-yellow-400 rounded-xl p-10 w-[90%] max-w-md text-center shadow-2xl">
        <h1 className="text-3xl font-bold mb-4">Welcome to the World of Tovias</h1>
        <p className="text-sm text-gray-300 mb-6">Art. Fashion. Words that move souls.</p>

        <div className="flex flex-col gap-4">
          <Link to="/artbytovias" className="bg-yellow-400 hover:bg-yellow-300 text-black py-2 px-4 rounded font-bold">
            Enter Art By Tovias
          </Link>
          <Link to="/lankybois" className="bg-yellow-400 hover:bg-yellow-300 text-black py-2 px-4 rounded font-bold">
            Enter Lanky Bois
          </Link>
          <Link to="/toviassole" className="bg-yellow-400 hover:bg-yellow-300 text-black py-2 px-4 rounded font-bold">
            Enter Tovias Solé
          </Link>
        </div>

        <p className="text-xs text-gray-500 mt-6">Choose your path, the legacy starts here.</p>
      </div>
    </main>
  )
}