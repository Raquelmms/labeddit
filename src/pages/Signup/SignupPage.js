import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import {StyledContainer, Content,BtnContent} from "./styled"
import axios from "axios";
import AlertSuccess from "../../components/AlertSuccess/AlertSuccess";
import { useUnProtectedPage } from "../../hooks/useUnProtectedPage";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../routes/coordinator";

const SignupPage = ({setRightButtonText}) => {
    useUnProtectedPage()
    const navigate = useNavigate()
    const [alertSuccess, setAlertSuccess] = useState(false)

    const { form, onChangeForm, cleanFields } = useForm({
        username:"",
        email: "",
        password: "",
      });


      const signup =(event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}/users/signup`, form)
        .then((res)=>{
            cleanFields()
            setAlertSuccess(true)
            localStorage.setItem("token", res.data.token)
            goToFeed(navigate)
            setRightButtonText("Logout")
        })
        .catch((err)=>{
            alert(err.response)
        })
      }

      const onCloseAlert = () => {
          setAlertSuccess(false)
      }


  return (
    <StyledContainer>
      {alertSuccess && <AlertSuccess alertText={"Parabéns, você conseguiu criar sua conta no LabEddit!"} onClose={onCloseAlert} /> }

        <Content>
      <form onSubmit={signup}>
        <TextField
          name={"username"}
          value={form.username}
          onChange={onChangeForm}
          label="Nome"
          required
          fullWidth
          margin={"dense"}
        />
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChangeForm}
          label="Email"
          required
          fullWidth
          margin={"dense"}
          type="email"
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={onChangeForm}
          label="Senha"
          required
          fullWidth
          margin={"dense"}
          type="password"
          helperText="A sua senha deve ter no mínimo 8 caracteres e no máximo 30 caracteres"
          inputProps={{ pattern: "^.{8,30}$" }}
        />
        <BtnContent>
        <Button variant="contained" fullWidth type={"submit"} >Fazer Cadastro</Button>
        </BtnContent>
      </form>
      </Content>
    </StyledContainer>
  );
};

export default SignupPage;
