import styled from "styled-components"
import { Button } from "@mui/material" 
import { TextField } from "@mui/material"

export const InputMuiMaterial =styled(TextField)`
    &&{
        width: 100%;
    }

`

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

export const DivPassword = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const ButtonStyled = styled(Button)`
       &&{
        background-color: #A3EF1B;   
        width: 100%;


       } 
`       

