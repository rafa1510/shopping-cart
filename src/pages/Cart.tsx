import React from 'react'
import styled from 'styled-components'
import StyledItemContainer from '../components/StyledItemContainer'
import StyledNavbar from '../components/StyledNavbar'
import { Product } from '../components/StyledItemContainer'

interface CartProps {
  className?: string
  cart: Array<Product>
  handleCart: Function
}

const Cart = ({ className, handleCart, cart }: CartProps) => {
  const totalPrice = cart?.reduce((total, product) => total + product.price, 0)

  return (
    <div className={className}>
      <StyledNavbar cartCount={cart.reduce((total, product) => total + product.quantity, 0)} />
      <StyledItemContainer products={cart} handleCart={handleCart} buttonText={'Remove from cart'} />
      <h1>Total Price: {totalPrice} </h1>
      <button> Checkout </button>
    </div>
  )
}

const StyledCart = styled(Cart)``

export default StyledCart
