import React from 'react'
import styled from 'styled-components'
import StyledItemContainer from '../components/StyledItemContainer'
import StyledButton from '../components/StyledButton'
import { Product } from '../components/StyledItemContainer'

interface CartProps {
  className?: string
  products: Array<Product>
}

const Cart = ({ className, products }: CartProps) => {
  const totalPrice = products?.reduce((total, product) => total + product.price, 0)

  return (
    <div className={className}>
      <StyledItemContainer products={products} />
      <h1>Total Price: {totalPrice} </h1>
      <StyledButton>Checkout</StyledButton>
    </div>
  )
}

const StyledCart = styled(Cart)``

export default StyledCart
