import React from "react";
import ProfileSection from "../../ProfileSection";
import { UserProfile } from "@clerk/nextjs";

const ProfileSettings = () => {
  return (
    <>
      <ProfileSection />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "10px",
          marginBottom: 100,
        }}
        className="container"
      >
        <UserProfile />
      </div>
    </>
  );
};

export default ProfileSettings;
