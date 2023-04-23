import styled from "styled-components"
import { Button } from "@mui/material" 

export const Main = styled.div`
    padding: 10px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 2rem;
    }
`

export const Form = styled.form`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    height: 30%;
    justify-content: space-evenly

`

export const ButtonStyled = styled(Button)`
       &&{
        background-color: #A3EF1B;
        width: 100%;


       }
`

