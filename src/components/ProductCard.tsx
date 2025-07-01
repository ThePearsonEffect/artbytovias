import { Product } from '../CartContext'
import { useCart } from '../CartContext'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition-all flex flex-col">
      <img src={product.image} alt={product.name} className="rounded mb-2 h-48 object-cover" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>
      <p className="text-indigo-600 font-semibold mt-2">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product, 1)}
        className="mt-auto bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  )
}