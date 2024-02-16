"use client";

import { useRouter } from "next/navigation";

import html from "../../imgs/html.svg";
import css from "../../imgs/css.svg";
import javascript from "../../imgs/javascript.svg";
import bootstrap from "../../imgs/bootstrap.svg";
import gatsby from "../../imgs/gatsby.svg";
import react from "../../imgs/react.svg";
import angular from "../../imgs/angular.svg";

const TechnoList = () => {
  const router = useRouter();

  return (
    <>
      <section className="py-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="row justify-content-between align-items-center">
                <div className="col-xl-8 col-md-6 col-12">
                  <h4 className="mb-3 mb-md-0">Total 7 Technologies</h4>
                </div>
                <div className="col-xl-2 col-md-3 col-6 pe-0">
                  <select className="form-select">
                    <option value="">Category</option>
                    <option value="2">Design</option>
                    <option value="3">Development</option>
                    <option value="3">Program</option>
                  </select>
                </div>
                <div className="col-xl-2 col-md-3 col-6">
                  <select className="form-select">
                    <option value="">Sort by</option>
                    <option value="1">Newest</option>
                    <option value="2">Popularity</option>
                    <option value="3">Rated</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container techno-container">
        <div className="row">
          <div
            onClick={() => {
              router.push("/training/html");
            }}
            className="col-xl-4 col-lg-6 col-md-6 col-12"
          >
            <div className="card mb-4 card-hover">
              <div className="d-flex justify-content-between align-items-center p-4">
                <div className="d-flex">
                  <a href="course-path-single.html">
                    <img src={html} alt="html" className="avatar-md" />
                  </a>
                  <div className="ms-3">
                    <h4 className="mb-1">
                      <a
                        href="course-path-single.html"
                        className="text-inherit"
                      >
                        HTML
                      </a>
                    </h4>
                    <p className="mb-0 fs-6">
                      <span className="me-2">
                        <span className="text-dark fw-medium">12</span>
                        Courses
                      </span>
                      <span>
                        <span className="text-dark fw-medium">34</span>
                        Hours
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-6 col-12">
            <div className="card mb-4 card-hover">
              <div className="d-flex justify-content-between align-items-center p-4">
                <div className="d-flex">
                  <a href="course-path-single.html">
                    <img src={css} alt="css" className="avatar-md" />
                  </a>
                  <div className="ms-3">
                    <h4 className="mb-1">
                      <a
                        href="course-path-single.html"
                        className="text-inherit"
                      >
                        Advanced CSS course
                      </a>
                    </h4>
                    <p className="mb-0 fs-6">
                      <span className="me-2">
                        <span className="text-dark fw-medium">6</span>
                        Courses
                      </span>
                      <span>
                        <span className="text-dark fw-medium">11</span>
                        Hours
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-6 col-12">
            <div className="card mb-4 card-hover">
              <div className="d-flex justify-content-between align-items-center p-4">
                <div className="d-flex">
                  <a href="course-path-single.html">
                    <img
                      src={javascript}
                      alt="javascript"
                      className="avatar-md"
                    />
                  </a>
                  <div className="ms-3">
                    <h4 className="mb-1">
                      <a
                        href="course-path-single.html"
                        className="text-inherit"
                      >
                        JavaScript Core Language
                      </a>
                    </h4>
                    <p className="mb-0 fs-6">
                      <span className="me-2">
                        <span className="text-dark fw-medium">12</span>
                        Courses
                      </span>
                      <span>
                        <span className="text-dark fw-medium">34</span>
                        Hours
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-6 col-12">
            <div className="card mb-4 card-hover">
              <div className="d-flex justify-content-between align-items-center p-4">
                <div className="d-flex">
                  <a href="course-path-single.html">
                    <img
                      src={bootstrap}
                      alt="bootstrap"
                      className="avatar-md"
                    />
                  </a>
                  <div className="ms-3">
                    <h4 className="mb-1">
                      <a
                        href="course-path-single.html"
                        className="text-inherit"
                      >
                        Bootstrap
                      </a>
                    </h4>
                    <p className="mb-0 fs-6">
                      <span className="me-2">
                        <span className="text-dark fw-medium">12</span>
                        Courses
                      </span>
                      <span>
                        <span className="text-dark fw-medium">34</span>
                        Hours
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-6 col-12">
            <div className="card mb-4 card-hover">
              <div className="d-flex justify-content-between align-items-center p-4">
                <div className="d-flex">
                  <a href="course-path-single.html">
                    <img src={angular} alt="angular" className="avatar-md" />
                  </a>
                  <div className="ms-3">
                    <h4 className="mb-1">
                      <a
                        href="course-path-single.html"
                        className="text-inherit"
                      >
                        AngularJS
                      </a>
                    </h4>
                    <p className="mb-0 fs-6">
                      <span className="me-2">
                        <span className="text-dark fw-medium">13</span>
                        Courses
                      </span>
                      <span>
                        <span className="text-dark fw-medium">50</span>
                        Hours
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-6 col-12">
            <div className="card mb-4 card-hover">
              <div className="d-flex justify-content-between align-items-center p-4">
                <div className="d-flex">
                  <a href="course-path-single.html">
                    <img src={gatsby} alt="gatsby" className="avatar-md" />
                  </a>
                  <div className="ms-3">
                    <h4 className="mb-1">
                      <a
                        href="course-path-single.html"
                        className="text-inherit"
                      >
                        GatsbyJS
                      </a>
                    </h4>
                    <p className="mb-0 fs-6">
                      <span className="me-2">
                        <span className="text-dark fw-medium">6</span>
                        Courses
                      </span>
                      <span>
                        <span className="text-dark fw-medium">11</span>
                        Hours
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-12">
            <div className="card mb-4 card-hover">
              <div className="d-flex justify-content-between align-items-center p-4">
                <div className="d-flex">
                  <a href="course-path-single.html">
                    <img src={react} alt="react" className="avatar-md" />
                  </a>
                  <div className="ms-3">
                    <h4 className="mb-1">
                      <a
                        href="course-path-single.html"
                        className="text-inherit"
                      >
                        React
                      </a>
                    </h4>
                    <p className="mb-0 fs-6">
                      <span className="me-2">
                        <span className="text-dark fw-medium">20</span>
                        Courses
                      </span>
                      <span>
                        <span className="text-dark fw-medium">12</span>
                        Hours
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnoList;
