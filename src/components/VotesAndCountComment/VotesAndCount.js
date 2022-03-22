import React from "react";
import { ContainerVotes, ContainerArrows } from "./styled";


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
   
          {props.numberComments} {props.commentText}
    </ContainerVotes>
  );
};

export default VotesAndCount;
