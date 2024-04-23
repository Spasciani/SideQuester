import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Quest({ questItem }) {
  //<div>{msgItem.msg}</div>
  const navigate = useNavigate();
  const handleQClick = () => {
    navigate('/quest-confirmation');
};
  return (
    <div className="quest" style={{ paddingBottom: "20px" }} onClick={handleQClick}>
      <b>{questItem.name}</b><br />
      <u>{questItem.reward}</u><br />
      {questItem.description}
      <br />
    </div>
  );
}
