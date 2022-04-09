import React from 'react'
import styled from 'styled-components'

export default function TypesBadge({children, color}) {
  return (
    <Type color={color}>{children}</Type>
  )
}

const Type = styled.span`
    color: white;
    text-transform: capitalize;
    background-color: ${props => props.color ? props.color : 'white'};
    border-radius: 20px;
    margin-right: 5px;
    margin-left: -2px;
    margin-top: 5px;
    text-align: center;
    padding: 5px 1.5rem;
    font-size: 1rem;
`