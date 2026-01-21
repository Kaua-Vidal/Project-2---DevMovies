import styled from "styled-components";


export const Container = styled.div`
    transition: background-color 500ms ease;
    height: 100px;
    width: 100%;
    z-index: 99;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    align-items: center;
    background-color: ${(props) => (props.changeBackground ? '#000' : 'transparent')};


    img {
        width: 25%;
    }
`
export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 50px;
`
export const Li = styled.li`
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    font-size: 21px;
    position: relative;

    a{
        text-decoration: none;
        color: #fff;
    }

    &::after{
        content: '';
        height: 3px;
        width: ${(props) => (props.$isActive ? '100%' : 0)};
        background-color: #189b20;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        transition: width 500ms ease-in-out;
    }

    &:hover::after{
        width: 100%;

    }
`