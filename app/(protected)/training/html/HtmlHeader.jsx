import React from "react";

const HtmlHeader = () => {
  return (
    <>
      <section
        className="py-8"
        style={{
          background: "linear-gradient(270deg, #9d4eff 0%, #782af4 100%)",
        }}
      ></section>

      <section className="bg-white shadow-sm mt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div className="d-md-flex align-items-center justify-content-between bg-white pt-3 pb-3 pb-lg-5">
                <div className="d-md-flex align-items-center text-lg-start text-center">
                  <div className="me-3 mt-n8">
                    <HtmlSvg />
                  </div>
                  <div className="mt-3 mt-md-0">
                    <h1 className="mb-0 fw-bold me-3">HTML</h1>
                  </div>
                  <div>
                    <span className="ms-2 fs-6">
                      <span className="text-dark fw-medium">21.9K</span>
                      students
                    </span>
                    <span className="ms-2 fs-6">
                      <span className="text-dark fw-medium">12</span>
                      Courses
                    </span>
                    <span className="ms-2 fs-6">
                      <span className="text-dark fw-medium">11</span>
                      hours avg training
                    </span>
                  </div>
                </div>
                <div className="mt-3 mt-lg-0 text-lg-start text-center">
                  <a
                    href="#"
                    className="btn-icon btn-light rounded-circle fe fe-bookmark fs-4 fs-4"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Add Bookmarked"
                  ></a>
                  <span className="dropdown">
                    <a
                      className="btn-icon btn-light rounded-circle"
                      href="#"
                      role="button"
                      id="shareDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fe fe-share-2 fs-4"></i>
                    </a>
                    <span
                      className="dropdown-menu"
                      aria-labelledby="shareDropdown"
                    >
                      <span className="dropdown-header">Share</span>
                      <a className="dropdown-item" href="#">
                        <span className="me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-facebook text-secondary"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z " />
                          </svg>
                        </span>
                        <span>Facebook</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-twitter text-secondary"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z " />
                          </svg>
                        </span>
                        <span>Twitter</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-linkedin text-secondary"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z " />
                          </svg>
                        </span>
                        <span>Linked In</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-copy text-secondary "
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"
                            />
                          </svg>
                        </span>
                        <span>Copy</span>
                        Link
                      </a>
                    </span>
                  </span>
                </div>
              </div>
              <ul className="nav nav-lt-tab" id="pills-tab" role="tablist">
                <li className="nav-item ms-0" role="presentation">
                  <a
                    className="nav-link active"
                    id="pills-course-tab"
                    data-bs-toggle="pill"
                    href="#pills-course"
                    role="tab"
                    aria-controls="pills-course"
                    aria-selected="true"
                  >
                    topics
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-about-tab"
                    data-bs-toggle="pill"
                    href="#pills-about"
                    role="tab"
                    aria-controls="pills-about"
                    aria-selected="false"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-author-tab"
                    data-bs-toggle="pill"
                    href="#pills-author"
                    role="tab"
                    aria-controls="pills-author"
                    aria-selected="false"
                  >
                    Author
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HtmlHeader;

const HtmlSvg = () => (
  <svg width="120" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M101.949 23.523l-7.726 86.547-34.727 9.627-34.631-9.614-7.717-86.56h84.801z"
      fill="#E44D26"
    />
    <path
      d="M59.549 112.338l28.06-7.779 6.603-73.958H59.549v81.737z"
      fill="#F16529"
    />
    <path
      d="M44.53 51.833h15.018V41.217h-26.62l.254 2.848 2.61 29.255h23.756V62.704H45.5l-.97-10.871zm2.392 26.796H36.267l1.487 16.669 21.746 6.036.05-.013V90.275l-.047.013-11.824-3.193-.755-8.466z"
      fill="#EBEBEB"
    />
    <path
      d="M25.038 0h5.395v5.33h4.935V0h5.396v16.141h-5.395v-5.405h-4.936v5.405h-5.395V0zm22.82 5.353h-4.749V0h14.897v5.353h-4.752V16.14h-5.395V5.353h-.001zM60.37 0h5.625l3.46 5.672L72.914 0h5.627v16.141h-5.373v-8l-3.711 5.739h-.093L65.65 8.14v8.001h-5.28V0zm20.855 0h5.397v10.806h7.587v5.335H81.225V0z"
      fill="#000"
    />
    <path
      d="M59.512 73.32h13.073l-1.233 13.77-11.84 3.195v11.045l21.764-6.031.16-1.794 2.494-27.95.26-2.85H59.511V73.32zm0-21.513v.026h25.643l.213-2.386.484-5.382.254-2.848H59.512v10.59z"
      fill="#fff"
    />
  </svg>
);
