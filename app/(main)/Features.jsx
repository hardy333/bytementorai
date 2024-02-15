import React from "react";

const Features = () => {
  return (
    <section className="py-8">
      <div className="container mb-lg-8">
        <div className="row mb-8 justify-content-center">
          <div className="col-lg-8 col-md-12 col-12 text-center">
            <span className="text-primary mb-3 d-block text-uppercase fw-semibold ls-xl">
              Why Learn with Byte Mentor
            </span>
            <h2 className="mb-2 display-4 fw-bold">
              Build better skills,faster
            </h2>
            <p className="lead mb-0">
              Explore new skills, deepen existing passions, and get lost in
              creativity. What you find just might surprise and inspire you.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="mb-4">
              <div className="display-4 text-primary">
                <i className="fe fe-settings"></i>
              </div>
              <div className="mt-4">
                <h3>Learn the latest skills</h3>
                <p className="fs-4 mb-0">
                  Lorem ipsum dolor sit amet, lorem consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="mb-4">
              <div className="display-4 text-primary">
                <i className="fe fe-user"></i>
              </div>
              <div className="mt-4">
                <h3>Get ready for a career</h3>
                <p className="fs-4 mb-0">
                  Pellentesque eu mi rhoncus, rhoncus tortor a, interdum nisi.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="mb-4">
              <div className="display-4 text-primary">
                <i className="fe fe-award"></i>
              </div>
              <div className="mt-4">
                <h3>Earn a Certificate</h3>
                <p className="fs-4 mb-0">
                  Quisque tempus lectus cursus, imperdiet eros vel, pulvinar
                  arcu.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="mb-4">
              <div className="display-4 text-primary">
                <i className="fe fe-users"></i>
              </div>
              <div className="mt-4">
                <h3>Upskill your organization</h3>
                <p className="fs-4 mb-0">
                  Etiam dignissim est tristique ex porta, bibendum commodo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
