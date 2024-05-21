import React from 'react'
import { useState, useEffect } from 'react'
import StyledHome from './Home'
import StyledCart from './Cart'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Product } from '../components/StyledItemContainer'

interface AppProps {
  className?: string
}

const App = ({ className }: AppProps) => {
  const [cart, setCart] = useState<Product[]>(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  const addToCart = (product: Product, quantity: number) => {
    const productWithQuantity = { ...product, quantity: quantity }
    setCart((prevCart) => [...prevCart, productWithQuantity])
  }

  const removeFromCart = (product: Product) => {
    setCart((prevCart) => prevCart.filter((prod) => prod.id != product.id))
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <StyledHome handleCart={addToCart} cart={cart} />,
    },
    {
      path: 'cart',
      element: <StyledCart handleCart={removeFromCart} cart={cart} />,
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
