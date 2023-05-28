import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../Routers/coordinator"
import  Logo  from "../../Assents/laberangofundoLaranja.png"
import { Botao, Divfeed } from "./styled" 


const Feed = () =>{

    const navigate = useNavigate()

    const vaiPraPageLogin = () =>{
        goToLogin(navigate)
    }


    return(
        <Divfeed>

            <Botao className="full-width-button" onclick={() => vaiPraPageLogin} > <img src={Logo} alt={Logo}/> </Botao>
        </Divfeed>
    )
}

export default Feed