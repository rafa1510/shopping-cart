import React from 'react'
import styled from 'styled-components'
import { Product } from './StyledItemContainer'

interface ButtonProps {
  className?: string
  children?: string
  handleCart: Function
  product: Product
  quantity: number
}

const Button = ({ className, children, handleCart, product, quantity }: ButtonProps) => {
  return (
    <button onClick={() => handleCart(product, quantity)} className={className}>
      {children}
    </button>
  )
}

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: lightblue;
  border: none;

  &:hover {
    background-color: #94ccde;
  }

  &:active {
    background-color: #bbdeea;
  }
`

export default StyledButton
