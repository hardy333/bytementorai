import { UserButton, auth, currentUser } from "@clerk/nextjs";
import React from "react";
import ProfileSection from "../ProfileSection";
import TechnoList from "./TechnoList";
// import x from "../../theme/dist/assets/images/path/"
import "./profile.css";

const Profile = async () => {
  const user = await currentUser();

  return (
    <>
      <ProfileSection />
      <TechnoList />
    </>
  );
};

export default Profile;
