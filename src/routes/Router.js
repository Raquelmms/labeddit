import React from "react";
import {  Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignupPage from "../pages/Signup/SignupPage";

const Router = ({rightButtonText, setRightButtonText}) => {
  return (
      <Routes>
        <Route exact path={"/"} element={<LoginPage />} />

        <Route exact path={"/login"} element={<LoginPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />} />

        <Route exact path={"/signup"} element={<SignupPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}  />} />

        <Route exact path={"/posts"} element={<FeedPage />} />

        <Route exact path={"/post/:id"} element={<PostPage />} />

        <Route exact path={"*"} element={<ErrorPage/>} />
      </Routes>
  );
}

export default Router;
