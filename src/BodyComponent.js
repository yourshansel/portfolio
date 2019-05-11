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
          Designer from Singapore working on Product at <Link href="https://lomotif.com" target="_blank" rel="noreferrer">Lomotif</Link>. 
          Runs <Link href="https://neede.co" target="_blank" rel="noreferrer">Neede </Link>as a side project. Graduated from NUS <Link href="http://did.nus.edu.sg/" target="_blank" rel="noreferrer">Divison of Industrial Design </Link>in 2019.
     </BodyText>
      </Wrapper>
    )}

}

export default Body;
