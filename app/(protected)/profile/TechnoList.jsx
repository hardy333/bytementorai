"use client";

import { useRouter } from "next/navigation";

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
            class="col-xl-4 col-lg-6 col-md-6 col-12"
          >
            <div class="card mb-4 card-hover">
              <div class="d-flex justify-content-between align-items-center p-4">
                <div class="d-flex">
                  <a href="course-path-single.html">
                    <img
                      src="../../theme/dist/assets/images/path/path-html.svg"
                      alt="html"
                      class="avatar-md"
                    />
                  </a>
                  <div class="ms-3">
                    <h4 class="mb-1">
                      <a href="course-path-single.html" class="text-inherit">
                        HTML
                      </a>
                    </h4>
                    <p class="mb-0 fs-6">
                      <span class="me-2">
                        <span class="text-dark fw-medium">12</span>
                        Courses
                      </span>
                      <span>
                        <span class="text-dark fw-medium">34</span>
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
                      src="../../assets/images/path/path-css.svg"
                      alt="css"
                      className="avatar-md"
                    />
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
                      src="../../assets/images/path/path-javascript.svg"
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
                      src="../../assets/images/path/path-bootstrap.svg"
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
                    <img
                      src="../../assets/images/path/path-angular.svg"
                      alt="angularjs"
                      className="avatar-md"
                    />
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
                    <img
                      src="../../assets/images/path/path-gatsby.svg"
                      alt="getsby"
                      className="avatar-md"
                    />
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
                    <img
                      src="../../assets/images/path/path-react.svg"
                      alt="react"
                      className="avatar-md"
                    />
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
