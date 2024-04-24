import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Quest({ questItem }) {
  //<div>{msgItem.msg}</div>
  const navigate = useNavigate();
  const handleQClick = () => {
      navigate('/quest-confirmation', { state: { name: this.name, phoneNumber: this.phoneNumber, description: this.description, reward: this.reward, place: this.place, latitude: this.latitude, longitude: this.longitude, image: null } });
};
  return (
    <div className="quest" style={{ paddingBottom: "20px" }} onClick={handleQClick}>
      <b>{questItem.name}</b><br />
      <u>Reward: {questItem.reward}</u><br />
      Description: {questItem.description}
      <br />
    </div>
  );
}
