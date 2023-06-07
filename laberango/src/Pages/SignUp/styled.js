import styled from "styled-components"
import { Button } from "@mui/material" 
import { TextField } from "@mui/material"
import MuiIconButton from '@mui/material/IconButton';

export const InputMuiMaterial =styled(TextField)`
    &&{
        width: 100%;
        margin-bottom: 10px;
    }

`

export const Main = styled.div`
    padding: 10px;
    right: 100%;
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
    height: auto;
    justify-content: space-evenly;

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

export const ButtonCadastro = styled(Button)`
    &&{
        
        width: 100%;
    }

`

export const PassDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    p{
        font-size: 1rem;
    }
`

export const IconButtonOlho = styled(MuiIconButton)`
  && {
    position: absolute;
    right: 349px;
    top: 94%;
    transform: translateY(-34%);
  }
  `

export const IconButtonOlho2 = styled(MuiIconButton)`
&& {
  position: absolute;
  right: 349px;
  top: 83%;
  transform: translateY(-34%);
}
`
export const DivP = styled.div`
         position: absolute;
         top: 200px ;

`