import React, { useState } from "react";
import FormPresentation from "./FormPresentation";

function FormComponents(props) {
  const [userName, setUserName] = useState("");

  const handleChange = event => {
    setUserName(event.target.value);
  };
  const handleSubmit = async event => {
    event.preventDefault();
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    props.onSubmit(data);
    setUserName("");
  };
  return (
    <FormPresentation
      userName={userName}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
export default FormComponents;
