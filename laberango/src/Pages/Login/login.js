import React, { useState } from "react";
import { Main, Form,  ButtonStyled, DivPassword, InputMuiMaterial } from "./styled.js";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

const Login = () =>{
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const onSubmitLogin = (event) =>{

        event.preventDefault()

    }

    return(


        <Main>
            <p>Entrar</p>
        <Form onSubmit={onSubmitLogin}>
            <InputMuiMaterial 
            id="outlined-basic" 
            label="Email" 
            type={"email"}
            variant="outlined"
            placeholder={'email@email.com'}
            value={email}
            onChange={(event)=> setEmail(event.target.value)}
            required
            />
            <DivPassword>
            <InputMuiMaterial 
            id="outlined-basic"
            label="Senha"
            type={showPassword ? "password" : "text"}
            variant="outlined"
            placeholder={'Minimo 6 caracteries'}
            value={password}
            onChange={(event) =>setPassword(event.target.value)}
            inputProps={{minLength:6,text:"A senha precisa conter no minimo 6 caracteres"}}
            required
            />
            <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                </DivPassword>
          
            <ButtonStyled type='submit'>Entrar</ButtonStyled>
        </Form>
            
        </Main>
    
)}

export default Login