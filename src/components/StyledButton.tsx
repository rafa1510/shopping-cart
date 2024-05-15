import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  className?: string
  children?: string
}

const Button = ({ className, children }: ButtonProps) => {
  return <button className={className}>{children}</button>
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
