import styled from "styled-components"

export const ContainerFeed = styled.div`
      align-items: center;
      

`
export const CardResta = styled.div`
      padding: 0 1rem;

`

export const InputFeed = styled.input`
      width: 100%;
      height: 3.5rem;
      padding: 1rem 0.503rem 1rem 1.063;
      border-radius: 2px;
      border: solid 1px blue;
      margin: 0 1rem;
`

export const Menu = styled.nav`
     height: 2.625rem;
     display: flex;
     align-items: center;
     padding: 0 1rem 0 0;
     width:100%;
     overflow-x: auto;
`
export const MenuItens = styled.button`
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: ${(p) => p.select ? "orangered":"black"};
    border: none;
    background-color: transparent;
    outline: none;
    padding: 0 1rem;
`
