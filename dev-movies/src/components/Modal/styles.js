import styled from "styled-components";

export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    background-color: #000;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 50px;
    max-width: 1200px;

    iframe{
        border: none;
    }
`

export const Button = styled.button`
    width: 20px;
    height: 20px;
    position: absolute;
    display: flex;
    top: 10px;
    right: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    border: 2px solid #fff;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    transition: all 300ms ease;

    &:hover {
        background-color: #fff;
        color: #ff0000;
        transform: scale(1.2);
    }
    
`