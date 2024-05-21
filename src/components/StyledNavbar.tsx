import React from 'react'
import styled from 'styled-components'
import cartUrl from '../assets/img/cart.svg'

interface NavbarProps {
  className?: string
  cartCount: number
}

const CartContainer = styled.div`
  display: flex;
  gap: 1rem;
`

const Navbar = ({ className, cartCount }: NavbarProps) => {
  return (
    <div className={className}>
      <h1>Fake Shop!</h1>
      <CartContainer>
        <h1>{cartCount}</h1>
        <img src={cartUrl} width="32px" alt="Shopping Cart"></img>
      </CartContainer>
    </div>
  )
}

const StyledNavbar = styled(Navbar)`
  background-color: #bf4f74;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-size: 2rem;
  color: white;
`

export default StyledNavbar
