import React from 'react'
import styled from 'styled-components'
import StyledItemCard from '../components/StyledItemCard'

interface ItemContainerProps {
  className?: string
  products: Array<Product>
}

export interface Product {
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

const ItemContainer = ({ className, products }: ItemContainerProps) => {
  const productList = products.map((product) => (
    <StyledItemCard key={product.id} itemImage={product.image} itemName={product.title} itemPrice={product.price} />
  ))

  return <div className={className}>{productList}</div>
}

const StyledItemContainer = styled(ItemContainer)`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`

export default StyledItemContainer
