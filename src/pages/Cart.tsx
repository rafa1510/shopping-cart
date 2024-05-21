import React from 'react'
import styled from 'styled-components'
import StyledItemContainer from '../components/StyledItemContainer'
import StyledButton from '../components/StyledButton'
import { Product } from '../components/StyledItemContainer'

interface CartProps {
  className?: string
  products: Array<Product>
  handleCart: Function
}

const Cart = ({ className, handleCart, products }: CartProps) => {
  const totalPrice = products?.reduce((total, product) => total + product.price, 0)

  return (
    <div className={className}>
      <StyledItemContainer products={products} handleCart={handleCart} buttonText={'Remove from cart'} />
      <h1>Total Price: {totalPrice} </h1>
      <button> Checkout </button>
    </div>
  )
}

const StyledCart = styled(Cart)``

export default StyledCart
