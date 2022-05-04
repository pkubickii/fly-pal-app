import React from "react";
import PropTypes from "prop-types";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const Profile = () => {
  const { username, email } = useContext(UserContext);

  return (
    <div className="bg-primary" style={{ height: "80vh" }}>
      <div className="mx-9 p-5 card bg-info text-dark">
        <p className="h4">name: {username}</p>
        <p className="h4">email: {email}</p>
      </div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};

export default Profile;
