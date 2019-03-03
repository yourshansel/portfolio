import React, { Component } from 'react';
import styled from 'styled-components';
import Link from './Link.js';
import { slideUp }  from './Animation.js';
import './fonts.css';

const Wrapper = styled.div`
  animation: ${slideUp} 0.4s ease-out forwards;
  max-width: 640px;
  margin: auto;
  padding: 24px;
`;

const BodyText = styled.div`
  color: #FFFFFF;
  font-family: 'CenturyGothic';
  font-size: 16px;
  letter-spacing: 0.2px;
  text-align: center;
  line-height: 36px;
  max-width: 480px;
  margin: auto;

  @media (max-width: 480px) 
  {
    font-size: 14px;
    line-height: 28px;
  }
`;



class Body extends Component{
  render(){
    return(
      <Wrapper>
      <BodyText>
          A digital product designer from Singapore running <Link href="https://neede.co" target="_blank" rel="noreferrer">Neede </Link>
          as a side project. Final year student at the <Link href="http://nus.edu.sg/" target="_blank" rel="noreferrer">National University of Singapore</Link>.
          Former Design Intern at <Link href="https://aaptiv.com/" target="_blank" rel="noreferrer">Aaptiv</Link> and <Link href="https://www.codigo.co/work" target="_blank" rel="noreferrer">Codigo</Link>.
      </BodyText>
      </Wrapper>
    )}

}

export default Body;
