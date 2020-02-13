import React from "react";

function FormRepresentation(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="userName"
          value={props.userName}
          placeholder="Enter UserName"
          onChange={props.handleChange}
        />
        <button>Add Card</button>
      </form>
    </div>
  );
}
export default FormRepresentation;
