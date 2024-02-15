import React from "react";

const Bloghero = () => {
  return (
    <>
      <section className="py-7">
        <div className="container">
          <div className="row">
            <div className="offset-xl-2 col-xl-8 offset-lg-1 col-lg-10 col-md-12 col-12">
              <div className="text-center mb-5">
                <h1 className="display-2 fw-bold">Geeks Newsroom</h1>
                <p className="lead">
                  Stories, tips, and tools to inspire you to find your most
                  creative self. Subscribe to get curated content delivered
                  directly to your inbox.
                </p>
              </div>
              <form className="row px-md-8 mx-md-8 needs-validation">
                <div className="mb-3 col ps-0 ms-2 ms-md-0">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                  <div className="invalid-feedback">
                    Please valid a Email Address
                  </div>
                </div>
                <div className="mb-3 col-auto ps-0">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bloghero;
