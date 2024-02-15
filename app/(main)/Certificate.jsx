import React from "react";

import CertificateImg from "../theme/dist/assets/images/education/certificate.jpg";
import Image from "next/image";
// src="../../assets/images/education/certificate.jpg"

const Certificate = () => {
  return (
    <section className="pb-lg-8 pb-6">
      <div className="container mb-lg-8">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-md-12 col-12">
            <div className="text-center mb-lg-8 mb-6">
              <h2 className="h1 fw-bold">
                Building strong
                <u className="text-warning">
                  <span
                    className="text-primary"
                    style={{ paddingLeft: "10px" }}
                  >
                    foundational skills
                  </span>
                </u>
              </h2>
              <p className="lead mb-0">
                Online courses certification section design for showcase your
                certificate program features.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6 col-md-12 col-12">
            <div className="mb-6 mb-lg-0">
              <div className="mb-2">
                <Image
                  src={CertificateImg}
                  alt="certificate"
                  className="img-fluid w-100"
                />
              </div>
              <div className="d-flex">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="var(--gk-primary)"
                    className="bi bi-patch-check-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                  </svg>
                </span>
                <span className="ms-2">
                  Completion certificate awarded on every course completion
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-6 col-md-12 col-12">
            <div className="row row-cols-2">
              <div className="col">
                <div className="mb-4 mb-xl-6">
                  <div className="mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="var(--gk-primary)"
                      className="bi bi-trophy"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Learn from Industry Experts</h4>
                    <p>
                      Lorem ipsum dolor sit amet, conse ctetur adipisc amus ac
                      iaculis arcu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="mb-lg-6 mb-4">
                  <div className="mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="var(--gk-primary)"
                      className="bi bi-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Free Resources</h4>
                    <p>
                      Pellentesque sagittis placerat mollii purus onvallis
                      venenatis asapien.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="mb-4 mb-md-0">
                  <div className="mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="var(--gk-primary)"
                      className="bi bi-shield-lock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                      <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Learn Anytime, Anywhere</h4>
                    <p>
                      Integer ultricies lorem nec erat fau euismod ipsum nislnec
                      leo iaculis
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div>
                  <div className="mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="var(--gk-primary)"
                      className="bi bi-nut"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.42 2 3.428 6-3.428 6H4.58L1.152 8 4.58 2h6.84zM4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1H4.58z" />
                      <path d="M6.848 5.933a2.5 2.5 0 1 0 2.5 4.33 2.5 2.5 0 0 0-2.5-4.33zm-1.78 3.915a3.5 3.5 0 1 1 6.061-3.5 3.5 3.5 0 0 1-6.062 3.5z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Skill-based Learning</h4>
                    <p>
                      Duis sed sollicitudin narcu mi, faucibus in sapien non,
                      auctor placerat arcu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;