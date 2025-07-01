import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
// import ArtByTovias from './artbytovias/Home'
import ArtByTovias from './ArtByTovias' // Update this path to match the actual file location and name
import ToviasSole from './toviassole/Home'
import LankyBoisHome from './lankybois/Home'
import Cart from './Cart'

export default function App() {
  const location = window.location;
  const isLankyBois = location.pathname.startsWith('/lankybois');

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artbytovias" element={<ArtByTovias />} />
            <Route path="/toviassole" element={<ToviasSole />} />
            <Route path="/lankybois" element={<LankyBoisHome />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        {!isLankyBois && <Footer />}
      </div>
    </BrowserRouter>
  )
}