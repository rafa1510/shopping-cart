import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import StyledNavbar from '../components/StyledNavbar'
import StyledItemCard from '../components/StyledItemCard'

interface HomeProps {
  className?: string
}

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: ProductRating
}

interface ProductRating {
  rate: number
  count: number
}

const ItemContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`

const Home = ({ className }: HomeProps) => {
  const [products, setProducts] = useState(Array<Product>)
  const [error, setError] = useState(null)

  const productList = products.map((product) => (
    <StyledItemCard key={product.id} itemImage={product.image} itemName={product.title} itemPrice={product.price} />
  ))

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
  })

  return (
    <>
      <ItemContainer>{productList}</ItemContainer>
    </>
  )
}

const StyledHome = styled(Home)``

export default StyledHome
