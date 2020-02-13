import React from "react";
import Card from "./Card";

const CardList = props => {
  return (
    <div>
      {props.profiles.map(userData => (
        <Card key={userData.id} userProfile={userData} />
      ))}
    </div>
  );
};
export default CardList;
