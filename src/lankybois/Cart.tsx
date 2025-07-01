import React, { useState } from 'react'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>([
    { id: 1, name: 'Lankybois Sample Product', price: 45, quantity: 1 }
  ])

  const updateQuantity = (id: number, delta: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <main className="min-h-screen bg-white p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">🛒 Lankybois Cart</h1>
      <ul className="space-y-4">
        {items.map(item => (
          <li key={item.id} className="flex justify-between items-center border p-4 rounded">
            <span className="font-semibold">{item.name}</span>
            <div className="flex items-center space-x-2">
              <button onClick={() => updateQuantity(item.id, -1)} className="px-2 bg-gray-200">-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)} className="px-2 bg-gray-200">+</button>
            </div>
            <span>${item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-xl font-bold">
        Total: ${total.toFixed(2)}
      </div>
    </main>
  )
}
