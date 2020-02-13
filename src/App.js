import React, { useState } from "react";
import "./styles.css";
import Tilte from "./Title";
import FormComponents from "./FormComponents";
import CardList from "./CardList";

export default function App() {
  const [profiles, setProfiles] = useState([]);
  const addNewProfile = newProfile => {
    setProfiles([...profiles, newProfile]);
  };
  return (
    <div className="App">
      <div className="header">
        <Tilte title="The GitHub Card App" />
        <FormComponents onSubmit={addNewProfile} />
        <CardList profiles={profiles} />
      </div>
    </div>
  );
}
