import React from "react";
import { Main, Form,  ButtonStyled } from "./styled.js";
import { TextField } from "@mui/material";
const Login = () =>{
    return(
        <Main>
            <p>Entrar</p>
        <Form>
            <TextField 
            id="outlined-basic" 
            label="Email" 
            type={"email"}
            variant="outlined"
            />
            <TextField 
            id="outlined-basic"
            label="Senha"
            type="password"
            variant="outlined"
            />
            <ButtonStyled type='submit'>Entrar</ButtonStyled>
        </Form>
            
        </Main>
    
)}

export default Login