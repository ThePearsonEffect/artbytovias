import { useCart } from '../CartContext'

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, subtotal } = useCart()

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.product.id} className="flex items-center justify-between bg-white shadow p-4 rounded">
              <div>
                <h3 className="font-semibold">{item.product.name}</h3>
                <p className="text-sm text-gray-500">${item.product.price} x {item.quantity}</p>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))}
                  className="w-16 border rounded px-2 py-1"
                />
                <button onClick={() => removeFromCart(item.product.id)} className="text-red-500">Remove</button>
              </div>
            </div>
          ))}
          <div className="text-right font-bold text-lg">Subtotal: ${subtotal.toFixed(2)}</div>
        </div>
      )}
    </div>
  )
}