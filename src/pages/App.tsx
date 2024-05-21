import React from 'react'
import { useState, useEffect } from 'react'
import StyledHome from './Home'
import StyledCart from './Cart'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StyledNavbar from '../components/StyledNavbar'
import { Product } from '../components/StyledItemContainer'

interface AppProps {
  className?: string
}

const App = ({ className }: AppProps) => {
  const [cart, setCart] = useState<Product[]>(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product])
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
      element: <StyledHome handleCart={addToCart} />,
    },
    {
      path: 'cart',
      element: <StyledCart products={cart} handleCart={removeFromCart} />,
    },
  ])

  return (
    <div>
      <StyledNavbar cartCount={cart.length} />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
