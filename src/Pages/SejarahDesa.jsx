import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const SejarahDesa = () => {
  return (
    <>
      <Navbar />

      <section className="mb-md-4">
        <div
          className="container-fluid page-header py-5 mb-4 mb-md-5 wow fadeIn"
          data-wow-delay="0.1s"
          style={{
            visibility: "visible",
            animationDelay: "0.1s",
            animationName: "fadeIn",
          }}
        >
          <div className="container text-center py-5">
            <h1 className="display-5 text-white mb-3 slideInDown">
              Situs Resmi
            </h1>
            <h1 className="display-4 text-white mb-2 slideInDown">
              Desa Wakanda Raya
            </h1>
          </div>
        </div>
        {/* Petunjuk URL Start */}
        <div className="container-xxl">
          <div className="container">
            <div className="alert alert-success py-2" role="alert">
              <a href="/">
                <i className="bi bi-house-door-fill" />
              </a>
              <span className="px-1">/</span>
              <a href="#">Informasi</a>
              <span className="px-1">/</span>
              <span className="text-success">Kabar Desa</span>
            </div>
          </div>
        </div>
        {/* Petunjuk URL Enad */}
      </section>
      {/* Features Start */}
      <section className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8 wow fadeInUp mt-2" data-wow-delay="0.1s">
              <img
                src="assetdemo/img/blog/default-khusus.jpg"
                alt="default-khusus.jpg"
                className="mb-2 img-fluid w-100"
                style={{ objectFit: "cover" }}
              />
              <div className="d-flex mb-lg-3 mb-3" style={{ fontSize: "77%" }}>
                <div className="align-items-center">
                  <img
                    className="rounded-circle me-0"
                    src="assetdemo/img/admin/default.jpg"
                    width={20}
                    height={20}
                    alt="default.jpg"
                  />
                  <span className="m-1">Default Admin</span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="ms-2">
                    <i className="far fa-eye mr-2" /> 52
                  </span>
                </div>
              </div>
              <h1 className="display-6 mb-lg-1 mb-2 text-uppercase">
                Sejarah Desa
              </h1>
              <div className="mb-4" style={{ fontSize: "77%" }}>
                <span className="btn btn-primary btn-sm fw-semi-bold rounded-0 p-0 px-1 me-2">
                  KABAR DESA
                </span>
                <span className="text-body">07 Maret 2023</span>
              </div>
              <div className="mb-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque doloribus iure reprehenderit ullam tempora nulla
                  accusantium veniam porro assumenda tenetur unde a dolore
                  necessitatibus, odit atque cupiditate laborum itaque
                  repudiandae delectus, eius modi dolores optio harum. Ipsum
                  repellat suscipit odit. Blanditiis assumenda eum rem sapiente
                  quae odio officia vel temporibus. Quas vel et alias
                  voluptatibus beatae at, quae ratione itaque nam vero nemo sed
                  possimus eum? Veniam eum mollitia pariatur. Eligendi quidem
                  doloremque, culpa vero fuga laborum consequuntur sapiente amet
                  natus quisquam maiores rem necessitatibus minima possimus ab
                  earum repellendus tempora dolor? Eos enim vitae hic
                  consequuntur inventore eveniet ut provident id, distinctio eum
                  fugit impedit facilis reiciendis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque doloribus iure reprehenderit ullam tempora nulla
                  accusantium veniam porro assumenda tenetur unde a dolore
                  necessitatibus, odit atque cupiditate laborum itaque
                  repudiandae delectus, eius modi dolores optio harum. Ipsum
                  repellat suscipit odit. Blanditiis assumenda eum rem sapiente
                  quae odio officia vel temporibus. Quas vel et alias
                  voluptatibus beatae at, quae ratione itaque nam vero nemo sed
                  possimus eum? Veniam eum mollitia pariatur. Eligendi quidem
                  doloremque, culpa vero fuga laborum consequuntur sapiente amet
                  natus quisquam maiores rem necessitatibus minima possimus ab
                  earum repellendus tempora dolor? Eos enim vitae hic
                  consequuntur inventore eveniet ut provident id, distinctio eum
                  fugit impedit facilis reiciendis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque doloribus iure reprehenderit ullam tempora nulla
                  accusantium veniam porro assumenda tenetur unde a dolore
                  necessitatibus, odit atque cupiditate laborum itaque
                  repudiandae delectus, eius modi dolores optio harum. Ipsum
                  repellat suscipit odit. Blanditiis assumenda eum rem sapiente
                  quae odio officia vel temporibus. Quas vel et alias
                  voluptatibus beatae at, quae ratione itaque nam vero nemo sed
                  possimus eum? Veniam eum mollitia pariatur. Eligendi quidem
                  doloremque, culpa vero fuga laborum consequuntur sapiente amet
                  natus quisquam maiores rem necessitatibus minima possimus ab
                  earum repellendus tempora dolor? Eos enim vitae hic
                  consequuntur inventore eveniet ut provident id, distinctio eum
                  fugit impedit facilis reiciendis.
                </p>
              </div>
            </div>
            <div className="col-lg-4 px-4 ps-lg-0 mt-lg-2">
              <div
                className="wow fadeInUp bg-light p-3 border-success border-4 border-start position-sticky"
                data-wow-delay="0.5s"
                style={{ top: "7rem" }}
              >
                {/* <div class="border-start ps-4"> */}
                <p className="fs-5 fw-bold text-primary">Aparatur Desa</p>
                <div
                  className="carousel slide"
                  id="aparatur-carousel"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-wow-delay="0.1s">
                      <div className="team-item rounded">
                        <img
                          className="img-fluid"
                          src="assetdemo/img/personil/default.jpg"
                          alt="Muhammad Fulan, S.Kmz"
                        />
                        <div className="team-text bottom-0 mb-3">
                          <h5 className="mb-0">Muhammad Fulan, S.Kmz</h5>
                          <span>Kepala Desa</span>
                          <div className="d-flex team-social mt-3">
                            <a
                              className="btn btn-lg-square rounded-circle mx-2"
                              href="/img/personil/default.jpg"
                              data-lightbox="aparatur"
                            >
                              <i className="fa fa-eye" />
                            </a>
                            <a
                              className="btn btn-lg-square rounded-circle mx-2"
                              href="/struktur-pemerintahan/kepala-desa/muhammad-fulan,-s.kmz"
                            >
                              <i className="fa fa-link" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#aparatur-carousel"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#aparatur-carousel"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features End */}

      <Footer />
    </>
  );
};

export default SejarahDesa;
