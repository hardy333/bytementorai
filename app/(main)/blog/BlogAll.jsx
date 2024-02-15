import React from "react";
import ReactImg from "../../imgs/react.svg";
import Image from "next/image";
import Img1 from "../../theme/dist/assets/images/blog/blogpost-6.jpg";
import Img2 from "../../theme/dist/assets/images/blog/blogpost-1.jpg";
import Img3 from "../../theme/dist/assets/images/blog/blogpost-2.jpg";
import Img4 from "../../theme/dist/assets/images/blog/blogpost-4.jpg";
import Img5 from "../../theme/dist/assets/images/blog/blogpost-5.jpg";

import "./blog.css";

// /images/avatar/avatar-7.jpg
// /images/blog/blogpost-4.jpg

const BlogAll = () => {
  return (
    <section className="pb-8 blog-section">
      <div className="container mb-lg-8">
        <div className="row">
          <div className="col-lg-8 col-md-7 col-12">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="card mb-4 shadow-lg card-lift">
                  <a href="blog-single.html">
                    <Image src={Img1} className="card-img-top" alt="blogpost" />
                  </a>
                  <div className="card-body">
                    <a
                      href="#"
                      className="fs-5 mb-2 fw-semibold d-block text-success"
                    >
                      Courses
                    </a>
                    <h3>
                      <a href="blog-single.html" className="text-inherit">
                        How to become modern Stack Developer in 2020
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, accu msan in, tempor dictum
                      nequrem ipsum...
                    </p>
                    <div className="row align-items-center g-0 mt-4">
                      <div className="col-auto"></div>
                      <div className="col lh-1">
                        <h5 className="mb-1">Reva Yokk</h5>
                        <p className="fs-6 mb-0">September 05, 2020</p>
                      </div>
                      <div className="col-auto">
                        <p className="fs-6 mb-0">20 Min Read</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="card mb-4 shadow-lg card-lift">
                  <a href="blog-single.html">
                    <Image src={Img2} className="card-img-top" alt="blogpost" />
                  </a>
                  <div className="card-body">
                    <a
                      href="#"
                      className="fs-5 fw-semibold d-block mb-3 text-danger"
                    >
                      Tutorial
                    </a>
                    <h3>
                      <a href="blog-single.html" className="text-inherit">
                        What is PHP Function? For Beginner’s Guide
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, accu msan in, tempor dictum
                      nequrem ipsum...
                    </p>
                    <div className="row align-items-center g-0 mt-4">
                      <div className="col-auto"></div>
                      <div className="col lh-1">
                        <h5 className="mb-1">Lisa Menon</h5>
                        <p className="fs-6 mb-0">September 06, 2020</p>
                      </div>
                      <div className="col-auto">
                        <p className="fs-6 mb-0">8 Min Read</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="card mb-4 shadow-lg card-lift">
                  <a href="blog-single.html">
                    <Image src={Img2} className="card-img-top" alt="blogpost" />
                  </a>
                  <div className="card-body">
                    <a
                      href="#"
                      className="fs-5 fw-semibold d-block mb-3 text-primary"
                    >
                      Workshop
                    </a>
                    <h3>
                      <a href="blog-single.html" className="text-inherit">
                        What is Cyber Security? A Beginner’s Guide
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, accu msan in, tempor dictum
                      nequrem ipsum...
                    </p>
                    <div className="row align-items-center g-0 mt-4">
                      <div className="col-auto"></div>
                      <div className="col lh-1">
                        <h5 className="mb-1">Maria Pinto</h5>
                        <p className="fs-6 mb-0">September 07, 2020</p>
                      </div>
                      <div className="col-auto">
                        <p className="fs-6 mb-0">15 Min Read</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="card mb-4 shadow-lg card-lift">
                  <a href="blog-single.html">
                    <Image src={Img3} className="card-img-top" alt="blogpost" />
                  </a>
                  <div className="card-body">
                    <a
                      href="#"
                      className="fs-5 fw-semibold d-block mb-3 text-danger"
                    >
                      Tutorial
                    </a>
                    <h3>
                      <a href="blog-single.html" className="text-inherit">
                        What is machine learning and how does it work?
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, accu msan in, tempor dictum
                      nequrem ipsum...
                    </p>
                    <div className="row align-items-center g-0 mt-4">
                      <div className="col-auto"></div>
                      <div className="col lh-1">
                        <h5 className="mb-1">Loran Sipon</h5>
                        <p className="fs-6 mb-0">September 08, 2020</p>
                      </div>
                      <div className="col-auto">
                        <p className="fs-6 mb-0">10 Min Read</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="card mb-4 shadow-lg card-lift">
                  <a href="blog-single.html">
                    <Image src={Img4} className="card-img-top" alt="blogpost" />
                  </a>
                  <div className="card-body">
                    <a
                      href="#"
                      className="fs-5 fw-semibold d-block mb-3 text-primary"
                    >
                      Workshop
                    </a>
                    <a href="blog-single.html">
                      <h3>
                        The Best DevOps Tools for Your Application Lifecycle
                      </h3>
                    </a>
                    <p>
                      Inventore pariatur veritatis maxime fugiat sint dolorem
                      quas culpa officiis nemo quis!
                    </p>
                    <div className="row align-items-center g-0 mt-4">
                      <div className="col-auto"></div>
                      <div className="col lh-1">
                        <h5 className="mb-1">Dustin Warren</h5>
                        <p className="fs-6 mb-0">September 09, 2020</p>
                      </div>
                      <div className="col-auto">
                        <p className="fs-6 mb-0">12 Min Read</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="card mb-4 shadow-lg card-lift">
                  <a href="blog-single.html">
                    <Image src={Img5} className="card-img-top" alt="blogpost" />
                  </a>
                  <div className="card-body">
                    <a
                      href="#"
                      className="fs-5 fw-semibold d-block mb-3 text-info"
                    >
                      Courses
                    </a>
                    <h3>
                      <a href="blog-single.html" className="text-inherit">
                        How to become modern Stack Developer in 2020
                      </a>
                    </h3>
                    <p>
                      At beatae non sit dicta similique perspiciatis facilis
                      veritatis quam. Recusandae, corrupti?
                    </p>
                    <div className="row align-items-center g-0 mt-4">
                      <div className="col-auto"></div>
                      <div className="col lh-1">
                        <h5 className="mb-1">Sia Port</h5>
                        <p className="fs-6 mb-0">September 10, 2020</p>
                      </div>
                      <div className="col-auto">
                        <p className="fs-6 mb-0">10 Min Read</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12 col-12 mt-4">
                <a href="#" className="btn btn-primary">
                  <div
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  Load More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-12 mt-6 mt-md-0">
            <div className="mb-4">
              <div className="mb-3 position-relative">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="position-absolute end-0 top-0 mt-2 me-3">
                  <i className="bi bi-search fs-5"></i>
                </span>
              </div>
            </div>
            <div className="card mb-4 border">
              <div className="card-body p-4">
                <h3>Recent Posts</h3>
                <div className="mt-3">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-3">
                      <h4 className="lh-lg">
                        <a href="#" className="text-inherit">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </a>
                      </h4>
                    </li>
                    <li className="mb-3">
                      <h4 className="lh-lg">
                        <a href="#" className="text-inherit">
                          Duis placerat mi quis purus feugiat, at bibendum arcu
                          dignissim.
                        </a>
                      </h4>
                    </li>
                    <li className="mb-3">
                      <h4 className="lh-lg">
                        <a href="#" className="text-inherit">
                          Morbi sit amet metus nec elit hendrerit luctus.
                        </a>
                      </h4>
                    </li>
                    <li>
                      <h4 className="lh-lg">
                        <a href="#" className="text-inherit">
                          Vivamus ac sapien ultricies dolor ullamcorper
                          porttitor.
                        </a>
                      </h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card mb-4 border">
              <div className="card-body p-4">
                <h3>Categories</h3>
                <div className="mt-3">
                  <ul className="list-unstyled mb-0 nav nav-x-0 flex-column">
                    <li className="lh-lg mb-1">
                      <i className="fe fe-arrow-right"></i>
                      <a href="#" className="text-link d-inline">
                        Business
                      </a>
                    </li>
                    <li className="lh-lg mb-1">
                      <i className="fe fe-arrow-right"></i>
                      <a href="#" className="text-link d-inline">
                        Marketing
                      </a>
                    </li>
                    <li className="lh-lg mb-1">
                      <i className="fe fe-arrow-right"></i>
                      <a href="#" className="text-link d-inline">
                        Courses
                      </a>
                    </li>
                    <li className="lh-lg mb-1">
                      <i className="fe fe-arrow-right"></i>
                      <a href="#" className="text-link d-inline">
                        Dashboard
                      </a>
                    </li>
                    <li className="lh-lg mb-1">
                      <i className="fe fe-arrow-right"></i>
                      <a href="#" className="text-link d-inline">
                        Landings
                      </a>
                    </li>
                    <li className="lh-lg mb-1">
                      <i className="fe fe-arrow-right"></i>
                      <a href="#" className="text-link d-inline">
                        E-commerce
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card mb-4 border">
              <div className="card-body p-4">
                <h3>Archive</h3>
                <div className="mt-3">
                  <ul className="list-unstyled mb-0 nav nav-x-0 flex-column">
                    <li className="lh-lg mb-1">
                      <i className="fe fe-arrow-right"></i>
                      <a href="#" className="text-link d-inline">
                        March 2021
                      </a>
                    </li>
                    <li className="lh-lg mb-1">
                      <i className="fe fe-arrow-right"></i>
                      <a href="#" className="text-link d-inline">
                        February 2021
                      </a>
                    </li>
                    <li className="lh-lg mb-1">
                      <i className="fe fe-arrow-right"></i>
                      <a href="#" className="text-link d-inline">
                        January 2021
                      </a>
                    </li>
                    <li className="lh-lg mb-1">
                      <i className="fe fe-arrow-right"></i>
                      <a href="#" className="text-link d-inline">
                        December 2020
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card mb-4 border">
              <div className="card-body p-4">
                <h3>Tags</h3>
                <div className="mt-3">
                  <a href="#" className="btn btn-light btn-xs mb-2">
                    business
                  </a>
                  <a href="#" className="btn btn-light btn-xs mb-2">
                    e-commerce
                  </a>
                  <a href="#" className="btn btn-light btn-xs mb-2">
                    course
                  </a>
                  <a href="#" className="btn btn-light btn-xs mb-2">
                    dashboard
                  </a>
                  <a href="#" className="btn btn-light btn-xs mb-2">
                    landings
                  </a>
                  <a href="#" className="btn btn-light btn-xs mb-2">
                    marketing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAll;
