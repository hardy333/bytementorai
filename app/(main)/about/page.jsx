import React from "react";
import AboutSection from "./AboutSection";
import Corevalues from "./Corevalues";
import Faq2 from "./Faq2";
import Numbers from "./Numbers";

const About = () => {
  return (
    <>
      <AboutSection />
      <Numbers />
      <Corevalues />
      <section className="py-2">
        <div className="container my-lg-8">
          <div className="row">
            <div className="col-md-6 offset-right-md-6">
              <h1 className="display-4 fw-bold mb-3">Our global reach</h1>
              <p className="lead">
                Geeks is the leading global marketplace for teaching and
                learning, connecting millions of students to the skills they
                need to succeed.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="border-top pt-4 mt-6 mb-5">
                <h1 className="display-3 fw-bold mb-0">20M</h1>
                <p className="text-uppercase">Learners</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="border-top pt-4 mt-6 mb-5">
                <h1 className="display-3 fw-bold mb-0">57K</h1>
                <p className="text-uppercase">Instructors</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="border-top pt-4 mt-6 mb-5">
                <h1 className="display-3 fw-bold mb-0">21K</h1>
                <p className="text-uppercase">Courses</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="border-top pt-4 mt-6 mb-5">
                <h1 className="display-3 fw-bold mb-0">380M</h1>
                <p className="text-uppercase">Course enrollments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq2 />
    </>
  );
};

export default About;
