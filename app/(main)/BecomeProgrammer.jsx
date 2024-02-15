import Image from "next/image";
import React from "react";
import ReactImg from "../imgs/react.svg";
import CssImg from "../imgs/css.svg";
import AngularImg from "../imgs/angular.svg";
import PythonSvg from "../imgs/python.svg";

const BecomeProgrammer = () => {
  return (
    <div className="container mb-lg-8 py-8">
      <div className="row mb-4 justify-content-center">
        <div className="col-lg-11 col-md-12">
          <div className="row align-items-center">
            <div className="col-md-12 col-12 mb-4">
              <div className="avatar-group me-5">
                <span className="avatar avatar-lg">
                  <Image
                    alt="avatar"
                    src={ReactImg}
                    className="rounded-circle"
                  />
                </span>
                <span className="avatar avatar-lg">
                  <Image
                    alt="avatar"
                    src={AngularImg}
                    className="rounded-circle"
                  />
                </span>
                <span className="avatar avatar-lg">
                  <Image alt="avatar" src={CssImg} className="rounded-circle" />
                </span>
                <span className="avatar avatar-lg">
                  <Image
                    alt="avatar"
                    src={PythonSvg}
                    className="rounded-circle"
                  />
                </span>
                <span className="avatar avatar-lg avatar-danger">
                  <span className="avatar-initials rounded-circle fs-5 fw-bold">
                    5+
                  </span>
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-12 mb-6">
              <h1 className="display-3 fw-bold">Become an Programmer</h1>
            </div>
            <div className="offset-lg-1 col-lg-6 col-md-7 col-12 mb-6">
              <p className="lead mb-0">
                We teach millions of students Around the world on byte Mentor.
                We provide the tools and skills to teach what you love
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12 mb-3">
              <h3 className="fw-semibold mb-2">Earn money</h3>
              <p className="fs-4 mb-0">
                Earn money every time a student purchases your course. Get paid
                monthly through
                <span className="text-dark">Paypal</span>
                or
                <span className="text-dark">Payoneer</span>.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mb-3">
              <h3 className="fw-semibold mb-2">Inspire students</h3>
              <p className="fs-4 mb-0">
                Help people learn new skills, advance their careers, and explore
                their hobbies by sharing your knowledge.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mb-3">
              <h3 className="fw-semibold mb-2">Join our community</h3>
              <p className="fs-4 mb-0">
                Take advantage of our active community of instructors to help
                you through your course creation process.
              </p>
            </div>
            <div className="col-md-12 mt-3">
              <a href="#" className="btn btn-primary">
                Start Teaching Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeProgrammer;
