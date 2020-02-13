import React from "react";

function Card(props) {
  return (
    <div className="github-profile">
      <img src={props.userProfile.avatar_url} alt="?" />
      <div className="info">
        <div className="name">{props.userProfile.name}</div>
        <div className="compnay">{props.userProfile.compnay}</div>
      </div>
    </div>
  );
}
export default Card;
