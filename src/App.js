import React, { Component } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Button from './ButtonComponent.js';
import Body from './BodyComponent.js';
import Social from './SocialComponent.js';
import Header from './HeaderComponent.js';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://cdn.staticaly.com/gh/yourshansel/portfolio/6526c07b/src/fonts/CenturyGothic.ttf');
    font-family: 'CenturyGothic',;
  }
`

const Page = styled.div`
  background-color: #000000;
  height: 100vh;
  display: flex;
  margin: auto;
`

const Wrapper = styled.div`
margin: auto;
max-width: 640px;

`


class App extends Component {
  render() {
    return (

      <div>
      <GlobalStyles />
      <Page>
      <Wrapper>
        <Header/>
        <Body/>
        <Button/>
      </Wrapper>
      <Social/>
      </Page>
      </div>
    );
  }
}

export default App;
