import React from 'react'
import styled from 'styled-components'
import StyledButton from './StyledButton'
import { Product } from './StyledItemContainer'

interface ItemCardProps {
  className?: string
  product: Product
  handleCart: Function
  buttonText: string
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`

const Image = styled.img`
  max-height: 250px;
  max-width: 250px;
  object-fit: contain;
`

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1rem;
  word-wrap: break-word;
  height: 50px;
  overflow: auto;
`

const QuantityContainer = styled.div`
  background-color: black;
`

const QuantityLabel = styled.label`
  position: absolute;
  background-color: #e8e8e8;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  font-size: 1rem;
  pointer-events: none;
`

const QuantitySelect = styled.select`
  width: 100%;
  padding-left: 6rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 1rem;
  background-color: #e8e8e8;
  border-right: 1rem solid transparent;
  border: none;
  outline: none;
  font-size: 1rem;
`

const ItemCard = ({ className, product, handleCart, buttonText }: ItemCardProps) => {
  return (
    <div className={className}>
      <ImageContainer>
        <Image width="250" height="250" src={product.image} alt={product.title} />
      </ImageContainer>
      <DescriptionContainer>
        <h1>{product.title}</h1>
        <h1>${product.price}</h1>
      </DescriptionContainer>
      <QuantityContainer>
        <QuantityLabel htmlFor="quantity-select">Quantity:</QuantityLabel>
        <QuantitySelect name="quantity-select" id="quantity-select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </QuantitySelect>
      </QuantityContainer>
      <StyledButton handleCart={handleCart} product={product}>
        {buttonText}
      </StyledButton>
    </div>
  )
}

const StyledItemCard = styled(ItemCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 500px;
  width: 250px;
  border: 1px solid;
`

export default StyledItemCard

// TODO: Add outline and stuff to button or select when pressed/hovered, and check out accessibility
// TODO: Possibly change select to a component
