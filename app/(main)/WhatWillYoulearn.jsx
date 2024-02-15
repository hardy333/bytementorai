import React from "react";
import Img4 from "../theme/dist/assets/images/svg/feature-icon-4.svg";
import Img3 from "../theme/dist/assets/images/svg/feature-icon-3.svg";
import Img2 from "../theme/dist/assets/images/svg/feature-icon-2.svg";
import Img1 from "../theme/dist/assets/images/svg/feature-icon-1.svg";
import Image from "next/image";

// assets/images/svg/feature-icon-4.svg
const WhatWillYoulearn = () => {
  return (
    <>
      <section className="py-7 py-lg-8 bg-gray-200">
        <div className="container my-lg-8">
          <div className="row mb-8 justify-content-center">
            <div className="col-lg-8 col-md-12 col-12 text-center">
              <span className="text-primary mb-3 d-block text-uppercase fw-semibold ls-xl">
                Course Description
              </span>
              <h2 className="mb-2 display-4 fw-bold">What will you learn?</h2>
              <p className="lead">
                Vanilla JS is a fast, lightweight, cross-platformframework for
                building incredible, powerful JavaScript applications.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card mb-4">
                <div className="card-body p-6">
                  <div className="d-md-flex mb-4">
                    <div className="mb-3 mb-md-0">
                      <Image
                        src={Img1}
                        alt="icon"
                        className="bg-primary icon-shape icon-xxl rounded-circle"
                      />
                    </div>
                    <div className="ms-md-4">
                      <h2 className="fw-bold mb-1">
                        Introduction to JavaScript
                        <span className="badge bg-warning ms-2">Free</span>
                      </h2>
                      <p className="text-uppercase fs-6 fw-semibold mb-0">
                        <span className="text-dark">Courses - 1</span>
                        <span className="ms-3">6 Lessons</span>
                        <span className="ms-3">1 Hour 12 Min</span>
                      </p>
                    </div>
                  </div>
                  <p className="mb-4 fs-4">
                    In et tempus dui, in porta dolor. Donec molestie a purus ut
                    interdum. Donec quis felis dignissim, luctus libero ornare.
                  </p>
                  <a
                    href="#"
                    className="btn-link"
                    data-bs-toggle="modal"
                    data-bs-target="#courseModal"
                  >
                    View Chapter Details
                    <i className="fe fe-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card mb-4">
                <div className="card-body p-6">
                  <div className="d-md-flex mb-4">
                    <div className="mb-3 mb-md-0">
                      <Image
                        src={Img2}
                        alt="icon"
                        className="bg-primary icon-shape icon-xxl rounded-circle"
                      />
                    </div>
                    <div className="ms-md-4">
                      <h2 className="fw-bold mb-1">JavaScript Beginning</h2>
                      <p className="text-uppercase fs-6 fw-semibold mb-0">
                        <span className="text-dark">Courses - 2</span>
                        <span className="ms-3">4 Lessons</span>
                        <span className="ms-3">32 Min</span>
                      </p>
                    </div>
                  </div>
                  <p className="mb-4 fs-4">
                    Malesuada fames ac turpis egesta mpor tempus tincidunt.
                    Aliquam congue lacus ac tellus consectetur malesuada.
                  </p>
                  <a
                    href="#"
                    className="btn-link"
                    data-bs-toggle="modal"
                    data-bs-target="#courseModal"
                  >
                    View Chapter Details
                    <i className="fe fe-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card mb-4">
                <div className="card-body p-6">
                  <div className="d-md-flex mb-4">
                    <div className="mb-3 mb-md-0">
                      <Image
                        src={Img3}
                        alt="icon"
                        className="bg-primary icon-shape icon-xxl rounded-circle"
                      />
                    </div>
                    <div className="ms-md-4">
                      <h2 className="fw-bold mb-1">Variables and Constants</h2>
                      <p className="text-uppercase fs-6 fw-semibold mb-0">
                        <span className="text-dark">Courses - 3</span>
                        <span className="ms-3">8 Lessons</span>
                        <span className="ms-3">10 Min</span>
                      </p>
                    </div>
                  </div>
                  <p className="mb-4 fs-4">
                    Aliquam pulvinar eros a dictur vitae diam imperdiet, ornare
                    turpis vequet elit nec, imperdiet lectuna liquam qs.
                  </p>
                  <a
                    href="#"
                    className="btn-link"
                    data-bs-toggle="modal"
                    data-bs-target="#courseModal"
                  >
                    View Chapter Details
                    <i className="fe fe-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="card mb-4">
                <div className="card-body p-6">
                  <div className="d-md-flex mb-4">
                    <div className="mb-3 mb-md-0">
                      <Image
                        src={Img4}
                        alt="icon"
                        className="bg-primary icon-shape icon-xxl rounded-circle"
                      />
                    </div>
                    <div className="ms-md-4">
                      <h2 className="fw-bold mb-1">Types and Operators</h2>
                      <p className="text-uppercase fs-6 fw-semibold mb-0">
                        <span className="text-dark">Courses - 4</span>
                        <span className="ms-3">10 Lessons</span>
                        <span className="ms-3">32 Min</span>
                      </p>
                    </div>
                  </div>
                  <p className="mb-4 fs-4">
                    In lobortis quam eu augue spendisse imperdiet nec orci
                    ipsum, tempus pharetra posuere imperdiet, lacinia a nisl.
                  </p>
                  <a
                    href="#"
                    className="btn-link"
                    data-bs-toggle="modal"
                    data-bs-target="#courseModal"
                  >
                    View Chapter Details
                    <i className="fe fe-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWillYoulearn;
