import styled, { createGlobalStyle } from 'styled-components';
//@ts-ignore
import BGImage from './images/splashunsplash.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
       background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Hind Madurai', sans-serif;;  
    }
    `

    export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-itmes: center;

    > p {
       color: #fffff; 
    }

    .score {
        color: #ffffff;
        font-size: 16px;
        margin: 0;
    }

    h1 {
        font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold", sans-serif;
        background-image: linear-gradient(180deg, #fffff, #87f1ff);
        background-size: 100%;
        background-clip: text;
        --webkit-background-clip: text;
        --webkit-text-fill-color: transparent;
        --moz-backgroup-clip:text;
        --moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        font-weight: 400;
        text-align: center;
        margin: 20px;
    }
    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffa6c9);
        border: 3px solid #FF69b4;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.50);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
    }
    
    `