import React from "react";
import { Container } from "./styled";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"

const CreateComment = (props) => {
  return (
    <Container>
      <form onSubmit={props.onSubmitComment}>
        <TextField
          placeholder="Escreva um comentário!"
          fullWidth
          name={props.nameComment}
          value={props.valueComment}
          onChange={props.onChangeComment}
          margin={"dense"}
          required
        />
        <Button variant="contained" fullWidth type={"submit"} >Comentar!</Button>
      </form>
    </Container>
  );
};

export default CreateComment;
