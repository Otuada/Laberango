import React, { useState } from "react";
import { useForm } from "../../Hooks/useForm";
import { Main, InputMuiMaterial, PassDiv, DivP, ButtonStyled, IconButtonOlho, IconButtonOlho2 } from "./styled";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { useNavigate } from "react-router-dom";
import { goToSignUpAdress } from "../../Routers/coordinator";
import LogoB from "../../Assents/laberangoFundoBranco.png"

const SignUp = () => {
  const { form, onChange, clean } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showCheckPass, setShowCheckPass] = useState(false);
  const [checkErrPass, setCheckErrPass] = useState(false);

  const navigate = useNavigate();

  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };

  const handleClickShowCheckPassword = () => {
    setShowCheckPass(!showCheckPass);
  };

  const signUpPerson = async () => {
    await axios
      .post(`${BASE_URL}/signUp`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert(`boas vindas ${res.data.user.name}`);
        goToSignUpAdress(navigate);
      })
      .catch((err) => {
        alert(err.response.data.message);
        clean();
        setConfirmPassword("");
      });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (form.password !== confirmPassword) {
      setCheckErrPass(true);
    } else {
      setCheckErrPass(false);
      signUpPerson();
    }
  };

  return (
    <Main>
      <img src={LogoB} alt={LogoB}/>
      <DivP>
      <p>CADASTRAR</p>
      </DivP>
      <form onSubmit={onSubmitForm}>
        <InputMuiMaterial
          id="outlined-basic"
          label={"Name"}
          name="name"
          type="text"
          placeholder="Digite seu nome"
          variant="outlined"
          value={form.name}
          onChange={onChange}
        />
        <InputMuiMaterial
          id="outlined-basic"
          label={"Email"}
          name="email"
          type="email"
          placeholder="Digite seu email"
          variant="outlined"
          value={form.email}
          onChange={onChange}
          required
        />
        <InputMuiMaterial
          id="outlined-basic"
          label={"Cpf"}
          name="cpf"
          type="text"
          placeholder="Digite seu cpf"
          variant="outlined"
          value={cpfMask(form.cpf)}
          onChange={onChange}
          required
        />
        <PassDiv>
          <InputMuiMaterial
            id="outlined-adornment-password"
            label={"Password"}
            name="password"
            type={showPass ? "text" : "password"}
            placeholder="minimo 6 caracteres"
            inputProps={{ minLength: 6, title: "A senha deve conter no minimo 6 digitos" }}
            value={form.password}
            onChange={onChange}
            required
          />

          <IconButtonOlho2
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPass ? <Visibility /> : <VisibilityOff />}
          </IconButtonOlho2>
        </PassDiv>
        <PassDiv>
          <InputMuiMaterial
            error={checkErrPass}
            helperText={checkErrPass ? "Deve ser a mesma que a anterior." : ""}
            id="outlined-adornment-password"
            label={"Confirmar"}
            type={showCheckPass ? "text" : "password"}
            placeholder="minimo 6 caracteres"
            inputProps={{ minLength: 6, title: "A senha deve conter no minimo 6 digitos" }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <IconButtonOlho
            aria-label="toggle password visibility"
            onClick={handleClickShowCheckPassword}
            edge="end"
          >
            {showCheckPass ? <Visibility /> : <VisibilityOff />}
          </IconButtonOlho>
        </PassDiv>
        <ButtonStyled type="submit">Entrar</ButtonStyled>
      </form>
        
    </Main>
  );
};

export default SignUp;
