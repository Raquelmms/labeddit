import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import CommentDetail from "../../components/CommentDetail/CommentDetail";
import faker from "@faker-js/faker";
import { BASE_URL } from "../../constants/urls";
import { getAuthToken } from "../../constants/token";
import CreateComment from "../../components/CreateComment/CreateComment";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { ContainerBody, Img, ContainerImg } from "./styled";
import UpVoteGrey from "../../assets/VotesImg/UpVoteGrey.svg";
import UpVoteGreen from "../../assets/VotesImg/UpVoteGreen.svg";
import DownVoteGrey from "../../assets/VotesImg/DownVoteGrey.svg";
import DownVoteRed from "../../assets/VotesImg/DownVoteRed.svg";
import ImgWaiting from "../../assets/waiting-requisition.webp";
import ImgComments from "../../assets/comments-empty.webp";
import { useState } from "react";
import AlertSuccess from "../../components/AlertSuccess/AlertSuccess";
import PostComponent from "../../components/PostComponent/PostComponent";

const PostPage = () => {
  const [alertSuccess, setAlertSuccess] = useState(false);
  const pathParams = useParams();
  const idPostPath = pathParams.id;
  useProtectedPage();
  const [posts, isLoadingPosts, errorPost, getPost] = useRequestData(
    `${BASE_URL}/posts`
  );
  const [allComments, isLoadingComment, errorComment, getAllComments] =
    useRequestData(`${BASE_URL}/posts/${idPostPath}/comments`);
  const { form, onChangeForm, cleanFields } = useForm({
    body: "",
  });

  const onSubmitComment = (event) => {
    event.preventDefault();

    axios
      .post(`${BASE_URL}/posts/${idPostPath}/comments`, form, {
        headers: {
          Authorization: getAuthToken(),
        },
      })
      .then((res) => {
        setAlertSuccess(true);
        cleanFields();
        getPost(`${BASE_URL}/posts`);
        getAllComments(`${BASE_URL}/posts/${idPostPath}/comments`);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const postSelected =
    posts &&
    posts.find((post) => {
      return post.id === idPostPath;
    });

  const isVotedLiked = () => {
    if (postSelected.userVote === 1) {
      return UpVoteGreen;
    } else {
      return UpVoteGrey;
    }
  };

  const isVotedDisliked = () => {
    if (postSelected.userVote < 0) {
      return DownVoteRed;
    } else {
      return DownVoteGrey;
    }
  };

  const createCommentVote = (idComment, num) => {
    const body = {
      direction: num,
    };

    axios
      .post(`${BASE_URL}/comments/${idComment}/votes`, body, {
        headers: {
          Authorization: getAuthToken(),
        },
      })
      .then((res) => {
        getAllComments(`${BASE_URL}/posts/${idPostPath}/comments`);
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  const deleteCommentVote = (idComment) => {
    axios
      .delete(`${BASE_URL}/comments/${idComment}/votes`, {
        headers: {
          Authorization: getAuthToken(),
        },
      })
      .then((res) => {
        getAllComments(`${BASE_URL}/posts/${idPostPath}/comments`);
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  const commentsList =
    allComments &&
    allComments.map((comment) => {
      const selectedColorVoteLike = () => {
        if (comment.userVote < 0 || comment.userVote === null) {
          return UpVoteGrey;
        } else {
          return UpVoteGreen;
        }
      };

      const selectedColorVoteDislike = () => {
        if (comment.userVote > 0 || comment.userVote === null) {
          return DownVoteGrey;
        } else {
          return DownVoteRed;
        }
      };
      return (
        <CommentDetail
          key={comment.id}
          avatar={faker.image.avatar()}
          name={comment.username}
          timeAgo={new Date(comment.createdAt).toString().slice(0, 21)}
          title={comment.title}
          message={comment.body}
          numberVotes={comment.voteSum}
          onClickUp={() => createCommentVote(comment.id, 1)}
          onClickDown={() => createCommentVote(comment.id, -1)}
          imgVoteUp={selectedColorVoteLike()}
          imgVoteDown={selectedColorVoteDislike()}
          onClickChangeUpVote={() => deleteCommentVote(comment.id)}
          onClickChangeDownVote={() => deleteCommentVote(comment.id)}
        />
      );
    });

  const onCloseAlert = () => {
    setAlertSuccess(false);
  };

  return (
    <ContainerBody>
      {alertSuccess && (
        <AlertSuccess
          alertText={"Parabéns, você comentou em um post!"}
          onClose={onCloseAlert}
        />
      )}

      {isLoadingPosts && (
        <div className="ui active dimmer">
          <div className="ui text loader">Carregando...</div>
        </div>
      )}
      {postSelected && (
        <div className="ui container comments">
          <PostComponent
            name={postSelected.username}
            timeAgo={new Date(postSelected.createdAt).toString().slice(0, 21)}
            title={postSelected.title}
            message={postSelected.body}
            avatar={faker.image.avatar()}
            numberVotes={postSelected.voteSum}
            numberComments={postSelected.commentCount}
            commentText={"Comentários"}
            imgVoteUp={isVotedLiked()}
            imgVoteDown={isVotedDisliked()}
          />
        </div>
      )}
      {!isLoadingPosts && errorPost && (
        <ContainerImg>
          <Img src={ImgWaiting} alt="Ilustração de erro na requisição" />
          <p>Ocorreu um erro na requisição, tente novamente mais tarde.</p>
        </ContainerImg>
      )}

      <CreateComment
        onSubmitComment={onSubmitComment}
        nameComment={"body"}
        valueComment={form.body}
        onChangeComment={onChangeForm}
      />

      <div className="ui container comments">
        {isLoadingComment && (
          <div className="ui active dimmer">
            <div className="ui text loader">Carregando...</div>
          </div>
        )}
        {!isLoadingComment && errorComment && (
          <ContainerImg>
            <Img src={ImgWaiting} alt="Ilustração de erro na requisição" />
            <p>Ocorreu um erro na requisição, tente novamente mais tarde.</p>
          </ContainerImg>
        )}
        {!isLoadingComment && allComments && commentsList}
        {!isLoadingComment && allComments && commentsList.length === 0 && (
          <ContainerImg>
            <p>Não há nenhum comentários nesse post, deseja comentar?</p>
            <Img src={ImgComments} alt="Ilustração post sem comentários" />
          </ContainerImg>
        )}
      </div>
    </ContainerBody>
  );
};

export default PostPage;
