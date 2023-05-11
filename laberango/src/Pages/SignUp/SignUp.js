import React from "react";
import { useForm } from "../../Hooks/useForm";
import { Main, InputMuiMaterial } from "./styled";

const SignUp = () =>{
    const { form, onChange, clean } = useForm(
        {
            "name": "",
            "email": "",
            "cpf": "",
            "password": ""
        }
    )
    
    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(form)
    }  


    return(
        <Main>
            <p>CADASTRAR</p>
            <form onSubmit={onSubmitForm}>
            <InputMuiMaterial
                id="outlined-basic"
                label={"Name"}
                name='name'
                type={'text'}
                placeholder={'Digite seu nome'}
                variant="outlined"
                value={form.name}
                onChange={onChange}          
            />
            <InputMuiMaterial
                    id="outlined-basic"
                    label={'Email'}
                    name='email'
                    type={'email'}
                    placeholder={'Digite seu email'}
                    variant="outlined"
                    value={form.email}
                    onChange={onChange}
                    required
                />
            <InputMuiMaterial
                    id="outlined-basic"
                    label={'Cpf'}
                    name='cpf'
                    type={'text'}
                    placeholder={'Digite seu cpf'}
                    variant="outlined"
                    //value={cpfMask(form.cpf)}
                    onChange={onChange}
                    required
            />
            <div>
            <InputMuiMaterial
                        id="outlined-adornment-password"
                        label={'Password'}
                        name='password'
                        //type={showPass ? 'text' : 'password'}
                        placeholder={'minimo 6 caracteres'}
                        inputProps={{ minLength: 6, title: "A senha deve conter no minimo 6 digitos" }}
                        value={form.password}
                        onChange={onChange}
                        required 
                        />
            </div>
            </form>


        </Main>
    )
}

export default SignUp