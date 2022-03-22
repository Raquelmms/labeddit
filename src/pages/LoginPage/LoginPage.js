import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { StyledContainer, Content, SignupButtonContainer, BtnContent } from "./styled";
import { goToSignup } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { login } from "../../services/users";
import { useUnProtectedPage } from "../../hooks/useUnProtectedPage";


const LoginPage = ({setRightButtonText}) => {
   useUnProtectedPage()
  const navigate = useNavigate();

  const { form, onChangeForm } = useForm({
    email: "",
    password: "",
  });

 const onSubmitLogin = (event) => {
    event.preventDefault()
    login(form, navigate, setRightButtonText)
 }

  return (
    <StyledContainer>
      <Content>
        <form onSubmit={onSubmitLogin}>
          <TextField
            name={"email"}
            value={form.email}
            label="Email"
            variant="outlined"
            onChange={onChangeForm}
            margin={"dense"}
            required
            fullWidth
          />
          <TextField
            name={"password"}
            value={form.password}
            label="Senha"
            variant="outlined"
            type="password"
            onChange={onChangeForm}
            margin={"dense"}
            required
            fullWidth
          />
          <div>
              <BtnContent>
            <Button
              type={"submit"}
              variant="contained"
              color="primary"
              fullWidth
            >
              Entrar
            </Button>
            </BtnContent>
          </div>
        </form>
      </Content>
      <SignupButtonContainer>
        <Button
          onClick={() => goToSignup(navigate)}
          variant="text"
          color="primary"
          fullWidth
        >
          Não possui conta? Cadastre-se
        </Button>
      </SignupButtonContainer>
    </StyledContainer>
  );
};

export default LoginPage;
