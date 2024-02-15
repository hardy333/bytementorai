"use client";

import React, { useState } from "react";

const PricingSection = () => {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <section className="py-8">
        <div className="container my-lg-8">
          <div className="row pt-lg-8">
            <div className="offset-xl-2 col-xl-8 offset-lg-1 col-lg-10 col-md-12 col-12">
              <div className="mb-8 text-center">
                <h2 className="display-4 mb-3 fw-bold">
                  Simple plans for everyone
                </h2>
                <p className="lead mb-4">
                  Everything you need to design like a professional. Boost you
                  and your team s creativity and supercharge your productivity
                  with Geeks UI Pro.
                </p>
                <div
                  id="pricing-switch-second"
                  className="d-flex justify-content-center align-items-center"
                >
                  <span className="fs-4 fw-semibold me-2">Pay Monthly</span>
                  <span className="form-check form-switch form-switch-price">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customSwitch1"
                      checked={checked}
                      onChange={(e) => setChecked(!checked)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customSwitch1"
                    ></label>
                  </span>
                  <span className="fs-4 fw-semibold ms-2">Pay Yearly</span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="card shadow-none border mb-3">
                    <div className="p-5">
                      <div className="mb-5">
                        <h4 className="fw-bold text-uppercase ls-md mb-4">
                          Free
                        </h4>
                        <div className="d-flex mb-4">
                          <span className="h3 mb-0 fw-bold">$</span>
                          <div
                            className="price-card--price-number toggle-price-content-second odometer text-dark fs-1 lh-1 h1"
                            data-price-monthly="0"
                            data-price-yearly="0"
                          >
                            0
                          </div>
                        </div>
                      </div>
                      <a href="#" className="btn btn-outline-primary">
                        Start designing
                      </a>
                      <div className="px-2 mt-6">
                        <ul className="list-unstyled mb-0">
                          <li className="mb-3 d-flex align-items-center">
                            <i className="fe fe-check text-success me-2"></i>
                            <span>20+ high quality design</span>
                          </li>
                          <li className="mb-3 d-flex align-items-center">
                            <i className="fe fe-check text-success me-2"></i>
                            <span>Instant access to 2 icon library</span>
                          </li>
                          <li className="mb-3 d-flex align-items-center">
                            <i className="fe fe-check text-success me-2"></i>
                            <span>24+ Free initial components</span>
                          </li>
                          <li className="mb-3 d-flex align-items-center">
                            <i className="fe fe-x me-2"></i>
                            <span>300+ beautiful design pages</span>
                          </li>
                          <li className="mb-3 d-flex align-items-center">
                            <i className="fe fe-x me-2"></i>
                            <span>Admin dashboard pages</span>
                          </li>
                          <li className="d-flex align-items-center">
                            <i className="fe fe-x me-2"></i>
                            <span>Support 24/7 hours</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="card shadow-none border mb-3">
                    <div className="p-5">
                      <div className="mb-5">
                        <h4 className="fw-bold text-uppercase ls-md mb-4">
                          Pro
                        </h4>
                        <div className="d-flex mb-4">
                          <span className="h3 mb-0 fw-bold">$</span>
                          <div
                            className="price-card--price-number toggle-price-content-second odometer text-dark fs-1 lh-1 h1"
                            data-price-monthly="39"
                            data-price-yearly="49"
                          >
                            49
                          </div>
                          <span
                            className="align-self-end mb-1 ms-2 toggle-price-content-second"
                            data-price-monthly="/mo"
                            data-price-yearly="/y"
                          >
                            /mo
                          </span>
                        </div>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Try free for 30 days
                      </a>
                      <div className="px-2 mt-6">
                        <ul className="list-unstyled mb-0">
                          <li className="mb-3 d-flex align-items-center">
                            <i className="fe fe-check text-success me-2"></i>
                            <span>120+ high quality designs</span>
                          </li>
                          <li className="mb-3 d-flex align-items-center">
                            <i className="fe fe-check text-success me-2"></i>
                            <span>Instant access to 2 icon library</span>
                          </li>
                          <li className="mb-3 d-flex align-items-center">
                            <i className="fe fe-check text-success me-2"></i>
                            <span>24+ Free initial components</span>
                          </li>
                          <li className="mb-3 d-flex align-items-center">
                            <i className="fe fe-check text-success me-2"></i>
                            <span>300+ beautiful design pages</span>
                          </li>
                          <li className="mb-3 d-flex align-items-center">
                            <i className="fe fe-check text-success me-2"></i>
                            <span>Admin dashboard pages</span>
                          </li>
                          <li className="d-flex align-items-center">
                            <i className="fe fe-check text-success me-2"></i>
                            <span>Support 24/7 hours</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-center mt-8">
            <div className="offset-lg-3 col-lg-6 col-md-12 col-12">
              <h2>Need a custom plan for your company?</h2>
              <p className="fs-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                semper scelerisque morbi lobortis
                <a href="https://geeksui.codescandy.com/geeks/" target="_blank">
                  contact us
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
