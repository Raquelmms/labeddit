import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/coordinator";

export const login = (body, navigate , setRightButtonText) => {
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      goToFeed(navigate)
      setRightButtonText("Logout")
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
