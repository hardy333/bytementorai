import React from "react";

const Faq2 = () => {
  return (
    <section className="py-8">
      <div className="container my-lg-8">
        <div className="row">
          <div className="offset-lg-2 col-lg-6 col-12">
            <div className="mb-8 pe-lg-8">
              <h2 className="mb-4 h1 fw-semibold">
                Most frequently asked questions
              </h2>
              <p className="lead">
                Here are the most frequently asked questions you may check
                before getting started
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="offset-lg-2 col-lg-8 col-12">
            <div className="accordion accordion-flush" id="accordionExample">
              <div className="border p-3 rounded-3 mb-2" id="headingOne">
                <h3 className="mb-0 fs-4">
                  <a
                    href="#"
                    className="d-flex align-items-center text-inherit active"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <span className="me-auto">Is there a 14-days trial?</span>
                    <span className="collapse-toggle ms-4">
                      <i className="fe fe-chevron-down"></i>
                    </span>
                  </a>
                </h3>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="pt-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fuga aperiam velit possimus! Voluptatum aliquid minima
                    dolorum, enim perspiciatis sit. Distinctio quidem
                    perferendis reprehenderit quisquam cum natus id, iusto, aut,
                    quasi modi nihil veritatis! Possimus eum beatae dolor rem
                    quidem libero sit odio quia eius ullam.
                  </div>
                </div>
              </div>
              <div className="border p-3 rounded-3 mb-2" id="headingTwo">
                <h3 className="mb-0 fs-4">
                  <a
                    href="#"
                    className="d-flex align-items-center text-inherit"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <span className="me-auto">
                      What’s the benefits of the Premium Membership?
                    </span>
                    <span className="collapse-toggle ms-4">
                      <i className="fe fe-chevron-down"></i>
                    </span>
                  </a>
                </h3>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="pt-3">
                    Velit nisi libero modi, repellat quo ducimus eos saepe totam
                    architecto doloremque earum commodi. Porro labore,
                    accusantium totam eius unde quam obcaecati cum ut animi
                    voluptatum iste sit veritatis minima reiciendis aliquid
                    reprehenderit praesentium autem ipsa molestias quod dolores.
                  </div>
                </div>
              </div>
              <div className="border p-3 rounded-3 mb-2" id="headingThree">
                <h3 className="mb-0 fs-4">
                  <a
                    href="#"
                    className="d-flex align-items-center text-inherit active"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <span className="me-auto">
                      How much time I will need to learn this app?
                    </span>
                    <span className="collapse-toggle ms-4">
                      <i className="fe fe-chevron-down"></i>
                    </span>
                  </a>
                </h3>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="pt-3">
                    Necessitatibus alias at labore explicabo totam illum saepe
                    error delectus excepturi. Dolorem vitae eaque magnam quidem
                    optio explicabo ipsa quae in nisi aut voluptates ratione
                    cumque dignissimos non at voluptatum quis soluta, modi
                    dolorum nesciunt porro praesentium corporis commodi
                    doloremque.
                    <br />
                    <br />
                    Architecto eaque vitae quaerat quo in, voluptas earum hic
                    repudiandae assumenda, incidunt, mollitia numquam illo saepe
                    impedit!
                  </div>
                </div>
              </div>
              <div className="border p-3 rounded-3 mb-2" id="headingFour">
                <h3 className="mb-0 fs-4">
                  <a
                    href="#"
                    className="d-flex align-items-center text-inherit active"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <span className="me-auto">
                      Are there any free tutorials available?
                    </span>
                    <span className="collapse-toggle ms-4">
                      <i className="fe fe-chevron-down"></i>
                    </span>
                  </a>
                </h3>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="pt-3">
                    Tenetur rem error, voluptatem fugit iusto laudantium laborum
                    at molestias dolorum sint facilis voluptas alias soluta
                    consequuntur. Id saepe officiis voluptates sit fuga repellat
                    facilis tempore vel explicabo unde, dicta, natus, amet
                    repellendus ea reprehenderit! Perspiciatis non modi beatae
                    vel est. Nisi?
                  </div>
                </div>
              </div>
              <div className="border p-3 rounded-3 mb-2" id="headingFive">
                <h3 className="mb-0 fs-4">
                  <a
                    href="#"
                    className="d-flex align-items-center text-inherit active"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    <span className="me-auto">
                      Is there a month-to-month payment option?
                    </span>
                    <span className="collapse-toggle ms-4">
                      <i className="fe fe-chevron-down"></i>
                    </span>
                  </a>
                </h3>
                <div
                  id="collapseFive"
                  className="collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="pt-3">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod.
                  </div>
                </div>
              </div>
              <div className="border p-3 rounded-3 mb-2" id="headingSix">
                <h3 className="mb-0 fs-4">
                  <a
                    href="#"
                    className="d-flex align-items-center text-inherit active"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    <span className="me-auto">
                      How do I take a Geeks course?
                    </span>
                    <span className="collapse-toggle ms-4">
                      <i className="fe fe-chevron-down"></i>
                    </span>
                  </a>
                </h3>
                <div
                  id="collapseSix"
                  className="collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div className="pt-3">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod.
                  </div>
                </div>
              </div>
              <div className="border p-3 rounded-3 mb-2" id="headingSeven">
                <h3 className="mb-0 fs-4">
                  <a
                    href="#"
                    className="d-flex align-items-center text-inherit active"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    <span className="me-auto">
                      How Does Geeks Courses Work?
                    </span>
                    <span className="collapse-toggle ms-4">
                      <i className="fe fe-chevron-down"></i>
                    </span>
                  </a>
                </h3>
                <div
                  id="collapseSeven"
                  className="collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#accordionExample"
                >
                  <div className="pt-3">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod.
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

export default Faq2;
