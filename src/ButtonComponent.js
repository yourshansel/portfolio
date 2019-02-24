import React, { Component } from 'react';
import styled from 'styled-components';
import { slideUp }  from './Animation.js';
import './fonts.css';


const ButtonBackground = styled.div`
  animation: ${slideUp} 0.4s ease-out forwards;;
  background: #1DB954;
  width: 128px;
  height: 40px;
  margin: auto;
  border-radius: 200px;
  pointer: cursor;

  &:hover {
    background: #21DA6B;
    cursor: pointer;
  }
`;

const ButtonLabel = styled.a`
  display: block;
  text-decoration: none;
  text-align: center;
  color: #FFFFFF;
  font-family: 'CenturyGothic-Bold';
  font-size: 16px;
  line-height: 40px;
`




class Button extends Component{
  render(){
    return(
      <div>
      <ButtonBackground>
        <ButtonLabel href="https://dribbble.com/yourshansel" target="_blank">
          View Works
          </ButtonLabel>
      </ButtonBackground>
      </div>
    )}

}

export default Button;
