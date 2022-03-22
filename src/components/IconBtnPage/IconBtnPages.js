import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Container } from "./styled";
const IconBtnPages = (props) => {
  return (
    <Container>
      <IconButton
        color="primary"
        aria-label="next"
        size="large"
        onClick={props.getPreviewPage}
      >
        <ArrowCircleLeftIcon />
      </IconButton>

      <IconButton
        color="primary"
        aria-label="next"
        size="large"
        onClick={props.getNextPage}
      >
        <ArrowCircleRightIcon />
      </IconButton>
    </Container>
  );
};

export default IconBtnPages;
