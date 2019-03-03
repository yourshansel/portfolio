import React, { Component } from 'react';
import styled from 'styled-components';
import { slideUp }  from './Animation.js';
import './fonts.css';

const Wrapper = styled.div`
  max-width: 640px;
  margin: auto;
`;

const H1 = styled.h1`
  animation: ${slideUp} 0.4s ease-out forwards;
  color: #FFFFFF;
  font-family: 'CenturyGothic-Bold';
  font-size: 40px;
  text-align: center;
  line-height: 48px;
  letter-spacing: 1px;
  margin: auto;

  @media (max-width: 480px) 
  {
    line-height: 40px;
  }
`


class Header extends Component{
  render(){
    return(
      <Wrapper>
      <H1>Hansel Wong</H1>
      </Wrapper>

    )}

}

export default Header;
