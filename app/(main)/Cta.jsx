import React from "react";
import "./cta.css";

const Cta = () => {
  return (
    <section className="py-8 bg-gray-200 cta-section">
      <div className="container my-lg-8">
        <div className="row justify-content-center text-center">
          <div className="col-md-9 col-12">
            <h2 className="display-4">
              Join more than 1 million learners worldwide
            </h2>
            <p className="lead px-lg-8 mb-6">
              Effective learning starts with assessment. Learning a new skill is
              hard work—Signal makes it easier.
            </p>
            <div className="d-grid d-md-block">
              <a
                href="../sign-up.html"
                className="btn btn-primary mb-2 mb-md-0 me-2"
              >
                Start Learning for Free
              </a>
              <a href="../sign-up.html" className="btn btn-info">
                Byte mentor for Business
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
