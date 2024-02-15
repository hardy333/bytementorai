const Faq = () => {
  return (
    <>
      <section className="py-7 py-lg-8">
        <div className="container my-lg-8">
          <div className="row mb-8 justify-content-center">
            <div className="col-lg-6 col-md-12 col-12 text-center">
              <span className="text-primary mb-3 d-block text-uppercase fw-semibold ls-xl">
                Need to Know
              </span>
              <h2 className="mb-2 display-4 fw-bold">
                Frequently Asked Questions.
              </h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                mattis non accumsan in, tempor dictum neque.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-12">
              <div className="accordion accordion-flush" id="accordionExample">
                <div className="border-bottom py-3" id="headingOne">
                  <h3 className="mb-0 fw-bold">
                    <a
                      href="#"
                      className="d-flex align-items-center text-inherit active"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span className="me-auto">
                        What is the cost of an online course
                      </span>
                      <span className="collapse-toggle ms-4">
                        <i className="fe fe-plus text-primary"></i>
                      </span>
                    </a>
                  </h3>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="py-3 fs-4">
                    Create beautiful website with this Geeks UI template. Get
                    started building a site today.
                  </div>
                </div>
                <div className="border-bottom py-3" id="headingTwo">
                  <h3 className="mb-0 fw-bold">
                    <a
                      href="#"
                      className="d-flex align-items-center text-inherit"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span className="me-auto">
                        What do I need to take a course?
                      </span>
                      <span className="collapse-toggle ms-4">
                        <i className="fe fe-plus text-primary"></i>
                      </span>
                    </a>
                  </h3>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="py-3 fs-4">
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
                <div className="border-bottom py-3" id="headingThree">
                  <h3 className="mb-0 fw-bold">
                    <a
                      href="#"
                      className="d-flex align-items-center text-inherit active"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span className="me-auto">
                        What do I receive for taking this course?
                      </span>
                      <span className="collapse-toggle ms-4">
                        <i className="fe fe-plus text-primary"></i>
                      </span>
                    </a>
                  </h3>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="py-3 fs-4">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod.
                  </div>
                </div>
                <div className="pt-3" id="headingFour">
                  <h3 className="mb-0 fw-bold">
                    <a
                      href="#"
                      className="d-flex align-items-center text-inherit active"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <span className="me-auto">
                        What willI get if I subscribe to this Certificate?
                      </span>
                      <span className="collapse-toggle ms-4">
                        <i className="fe fe-plus text-primary"></i>
                      </span>
                    </a>
                  </h3>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="py-3 fs-4">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod.
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <a href="#" className="btn btn-outline-primary">
                  More questions? Visit the Learner Help Center.
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
