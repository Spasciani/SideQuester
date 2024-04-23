import React from "react";

export default function Quest({ questItem }) {
  //<div>{msgItem.msg}</div>

  return (
    <div className="quest" style={{ paddingBottom: "20px" }}>
      <b>{questItem.time}</b>
      <br />
      {questItem.msg}
    </div>
  );
}
