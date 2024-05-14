import React from 'react'
import styled from 'styled-components'
import cartUrl from '../assets/img/cart.svg'

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={className}>
      <h1>Fake Shop!</h1>
      <img src={cartUrl} width="32px" alt="Shopping Cart"></img>
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
