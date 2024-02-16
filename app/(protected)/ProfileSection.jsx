import React from "react";
import Img from "../theme/dist/assets/images/avatar/avatar-3.jpg";
import Image from "next/image";
import "./profile-section.css";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";

const ProfileSection = async () => {
  const user = await currentUser();

  console.log(user);

  return (
    <section className="pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <div
              className="pt-8 rounded-top-md profile-section-img-container"
              style={{
                backgroundSize: "cover",
                height: "100px",
              }}
            ></div>
            <div className="card rounded-0 rounded-bottom px-4 pt-2 pb-4">
              <div className="d-flex align-items-end justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="me-2 position-relative d-flex justify-content-end align-items-end mt-n5">
                    <Image
                      src={user.imageUrl}
                      width={200}
                      height={200}
                      className="avatar-xl rounded-circle border border-4 border-white"
                      alt="avatar"
                    />
                  </div>
                  <div className="lh-1">
                    <h2 className="mb-0">
                      <span style={{ paddingRight: 10 }}>
                        {user.firstName} {user.lastName}
                      </span>
                      <Link
                        href="/profile/settings"
                        className=""
                        data-bs-toggle="tooltip"
                        data-placement="top"
                        title="Beginner"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="3"
                            y="8"
                            width="2"
                            height="6"
                            rx="1"
                            fill="#754FFE"
                          ></rect>
                          <rect
                            x="7"
                            y="5"
                            width="2"
                            height="9"
                            rx="1"
                            fill="#DBD8E9"
                          ></rect>
                          <rect
                            x="11"
                            y="2"
                            width="2"
                            height="12"
                            rx="1"
                            fill="#DBD8E9"
                          ></rect>
                        </svg>
                      </Link>
                    </h2>
                    <p className="mb-0 d-block">
                      {user.emailAddresses[0].emailAddress}
                    </p>
                  </div>
                </div>
                <div>
                  <Link
                    href="/profile/settings"
                    className="btn btn-primary btn-sm d-none d-md-block"
                  >
                    Account Setting
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
