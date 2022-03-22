import React from "react";
import VotesAndCount from "../VotesAndCountComment/VotesAndCount";
import { Container, DivPointer } from "./styled";
//import { useState } from "react";

const CommentDetail = (props) => {
  return (
    <Container>
      <div className="comment">
        <a className="avatar">
          <img alt="avatar" src={props.avatar} />
        </a>
        <DivPointer className="content" onClick={props.clickToPostDetail}>
          <a className="author">{props.name}</a>
          <div className="metadata">
            <span className="date">{props.timeAgo}</span>
          </div>
          <div>
            <h5>{props.title}</h5>
          </div>
          <div className="text">{props.message}</div>
        </DivPointer>
      </div>
      <div>
      <VotesAndCount
        onClickUp={props.onClickUp}
        onClickDown={props.onClickDown}

        onClickChangeUpVote={props.onClickChangeUpVote}
        onClickChangeDownVote={props.onClickChangeDownVote}
       
        imgVoteUp={props.imgVoteUp}
        imgVoteDown={props.imgVoteDown}

        numberVotes={props.numberVotes}
        numberComments={props.numberComments}
        commentText={props.commentText}
      />
      </div>
    </Container>
  );
};

export default CommentDetail;
