import React, { useState } from "react";
import { Main, Form,  ButtonStyled, DivPassword, InputMuiMaterial } from "./styled.js";
import axios from "axios";
import { BASE_URL } from "../../Constants/url.js";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

const Login = () =>{
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [errEmail, setErrEmail] = useState("")
    const [errPass, setErrPass] = useState("")
    const [checkErrEmail, setCheckErrEmail] = useState(false)
    const [checkErrPass, setcheckErrPass] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const onSubmitLogin = (event) =>{

        event.preventDefault()

        const userLogin = {
            email,
            password
        }
        LoginApi(userLogin)

    }

    const LoginApi = async(body) =>{
        await axios.post(`${BASE_URL}/login`,body)
        .then((res) =>{
            console.log(res.data)
        })
        .catch((err) =>{
            if(err.response.data.message.includes('senha incorreta')){
                setErrPass(err.response.data.message)
                setcheckErrPass(true)
            }else{
                setErrEmail(err.response.data.message)
                setCheckErrEmail(true)
            }
            console.log(err.response.data.message)
        })
    }

    return(


        <Main>
            <p>Entrar</p>
        <Form onSubmit={onSubmitLogin}>
            <InputMuiMaterial
            error={checkErrEmail} 
            helperText={checkErrEmail ? errEmail:''}
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
            error={checkErrPass}
            helperText={checkErrPass ? errPass :''}   
            id="outlined-basic"
            label="Senha"
            type={showPassword ? "password" : "text"}
            variant="outlined"
            placeholder={'Minimo 6 caracteries'}
            value={password}
            onChange={(event) =>setPassword(event.target.value)}
            inputProps={{minLength:6, text:"A senha precisa conter no minimo 6 caracteres"}}
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