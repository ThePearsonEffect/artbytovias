import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import Footer from './Footer'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import ToviasSole from './ToviasSole'
import LankyBoisHome from './LankyBoisHome'
import TribeLifeHome from './tribelife/Home'
import Cart from './pages/Cart'
import { CartProvider } from './CartContext'

export default function App() {
  const location = window.location
  const isLankyBois = location.pathname.startsWith('/lankybois')

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<AllProducts />} />
              <Route path="/tribelife" element={<TribeLifeHome />} />
              <Route path="/toviassole" element={<ToviasSole />} />
              <Route path="/lankybois" element={<LankyBoisHome />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          {!isLankyBois && <Footer />}
        </div>
        <Toaster />
      </Router>
    </CartProvider>
  )
}
