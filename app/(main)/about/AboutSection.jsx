import React from "react";

const AboutSection = () => {
  return (
    <section className="py-8 bg-white pb-2">
      <div className="container my-lg-4">
        <div className="row">
          <div className="offset-lg-2 col-lg-8 col-md-12 col-12 mb-8">
            <h1 className="display-2 fw-bold mb-3">
              Hi there, we’re
              <span className="text-primary" style={{ paddingLeft: 10 }}>
                Byte mentor
              </span>
            </h1>
            <p className="h2 mb-3">
              We’re building the best next-generation interactive bootstrap
              based UI Kit design tool for developers, engineers, Full-Stack
              developer, and digital agency.
            </p>
            <p className="mb-0 h4 text-body lh-lg">
              Geeks provide clean and consistent page designs to help you to
              create beautiful looking contents. Geek is feature-rich components
              and beautifully designed pages that help you create the best
              possible website and web application projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
