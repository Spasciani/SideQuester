import React from "react";
import Quest from "./quest";

export default function QuestsDisplay({ quests, questsLoaded }) {
  function getQuests() {
    if (questsLoaded) {
      return quests?.map(function(questItem,i) {
        return <Quest key={i} questItem={questItem} />;
      });
    } else {
      return <div>Loading...</div>;
    }
  }

  return (
    <div
      className="questsC"
      style={{
        background: "#ccc",
        width: "55%",
        float: "right",
        padding: "20px"
      }}
    >
      <h2>Available Quests</h2>

      {getQuests()}
    </div>
  );
}
