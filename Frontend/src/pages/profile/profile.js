import React from 'react';
import { user1 } from './user';
import './profile.css'; // Import your CSS file
import Navbarboot from "../../components/navbar/navbarboot";
const PROFILE = () => {
  return (<>
    <div>
      <Navbarboot/>
    </div>
    <div className="profile-container">
      <img src={user1[0].profilePicture} alt="Profile" className="profile-picture" />
      <div className="profile-info">
        <h2 className="profile-name">{user1[0].name}</h2>
        <p className="profile-email">Email: {user1[0].email}</p>
        <p className="profile-wallet">Wallet: {user1[0].wallet}</p>
      </div>
    </div></>
  );
}

export default PROFILE;
