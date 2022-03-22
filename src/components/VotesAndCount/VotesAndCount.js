import React from "react";
import { ContainerVotes, ContainerArrows, CommentCtn } from "./styled";
import ModeCommentIcon from '@mui/icons-material/ModeComment';


const VotesAndCount = (props) => {

  return (
    <ContainerVotes>
        <ContainerArrows>
            <div onClick={props.onClickUp}>
        <img onClick={props.onClickChangeUpVote} src={props.imgVoteUp} alt={"like"} />
           </div>
        {props.numberVotes}
        <div onClick={props.onClickDown}>
        <img onClick={props.onClickChangeDownVote} src= {props.imgVoteDown} alt={"dislike"} />
        </div>
        
       

            </ContainerArrows>
      <CommentCtn>
      <ModeCommentIcon color="primary" />
          {props.numberComments} {props.commentText}
      </CommentCtn>
    </ContainerVotes>
  );
};

export default VotesAndCount;
