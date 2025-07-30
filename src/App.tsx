
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import HomePage from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ShopPage from "./pages/ShopPage";
import DonatePage from "./pages/DonatePage";
import AboutPage from "./pages/AboutPage";
import TribeLifePage from "./pages/TribeLifePage";
import LankyBoisPage from "./pages/LankyBoisPage";
import ToviasSolePage from "./pages/ToviasSolePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:category" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tribe-life" element={<TribeLifePage />} />
            <Route path="/lanky-bois" element={<LankyBoisPage />} />
            <Route path="/tovias-sole" element={<ToviasSolePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
