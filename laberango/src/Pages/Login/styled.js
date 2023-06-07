
import { Button } from "@mui/material" 
import { TextField } from "@mui/material"
import styled from 'styled-components';
import MuiIconButton from '@mui/material/IconButton';

export const StyledIconButton = styled(MuiIconButton)`
  && {
    position: absolute;
    right: 540px;
    top: 50%;
    transform: translateY(30%);
  }
`;


export const InputMuiMaterial =styled(TextField)`
    &&{
        width: 100%;
        margin-bottom: 10px;
    }

`

export const Main = styled.div`
    padding: 10px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
    margin-bottom: -60px; 
  }
    p{
        font-size: 2rem;
    }
`

export const Form = styled.form`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    height: auto;
    justify-content: space-evenly

`

export const DivPassword = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 100%;
`

export const ButtonStyled = styled(Button)`
       &&{
        background-color: #bc3c24;   
        min-width: 100%;


       } 
`  

export const ButtonCadastro = styled(Button)`
    &&{
        
        width: 100%;
    }

`
