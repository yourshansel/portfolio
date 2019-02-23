import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.25s ease;
  color: #1DB954;

  &:hover {
    text-decoration: underline;
    color: #21DA6B;
  }
`


export default Link
