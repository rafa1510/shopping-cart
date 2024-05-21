import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import StyledItemContainer from '../components/StyledItemContainer'
import StyledNavbar from '../components/StyledNavbar'
import { Product } from '../components/StyledItemContainer'

interface HomeProps {
  className?: string
  handleCart: Function
  cart: Array<Product>
}

const Home = ({ className, handleCart, cart }: HomeProps) => {
  const [products, setProducts] = useState(Array<Product>)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await fetch('https://fakestoreapi.com/products')

        if (products.status >= 400) {
          throw new Error('Server error')
        }

        const productsJson = await products.json()
        setProducts(productsJson)
      } catch (error: any) {
        setError(error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className={className}>
      <StyledNavbar cartCount={cart.length} />
      <StyledItemContainer products={products} handleCart={handleCart} buttonText={'Add to cart'} />
    </div>
  )
}

const StyledHome = styled(Home)``

export default StyledHome
