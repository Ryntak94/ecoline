import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import image from './img/img1.jpg'
const Img = styled.img`
    border: solid 1px black;
    border-radius: 20px;
    width: 962px;
    height: 962px;
`

const AppDiv = styled.div`
    background: #5C32A8;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

function App() {
  return (

    <AppDiv>

        <Img src={image} />
    </AppDiv>
  );
}

export default App;
