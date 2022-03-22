import React from "react";
import { Container } from "./styled";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"

const CreatePost = (props) => {
  return (
    <Container>
      <form onSubmit={props.onSubmit}>
        <TextField
          name={props.name}
          value={props.value}
          label="Título"
          variant="outlined"
          onChange={props.onChangeTitle}
          margin={"dense"}
          required
          fullWidth
        />

        <TextField
          placeholder="Compartilhe algo com a comunidade LabEddit!"
          fullWidth
          name={props.nameTextArea}
          value={props.valueTextArea}
          onChange={props.onChangeTextArea}
          margin={"dense"}
          required
        />
        <Button>Postar!</Button>
      </form>
    </Container>
  );
};

export default CreatePost;
