import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Struktur = () => {
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
              <a href="/struktur-pemerintahan">Struktur Pemerintahan</a>
              <span className="px-1">/</span>
              <span className="text-success">Album</span>
            </div>
          </div>
        </div>
        {/* Alamat Web Start */}
      </section>
      {/* Aparat Start */}

      <section className="container-xxl py-3">
        <div className="container">
          <h1 className="display-5 text-primary">Struktur Pemerintahan</h1>
          <p className="fs-4 d-md-block d-none fw-bold text-primary mb-3 mb-md-5">
            Desa Wakanda Raya, Kecamatan Konoha Timur, Kabupaten Londong Raya
          </p>
          <p className="d-md-none d-block fw-bold text-primary mb-3 mb-md-5">
            Desa Wakanda Raya, Kec. Konoha Timur, Kab. Londong Raya
          </p>
          <div className="row g-5 mt-4">
            <div className="col-lg-5 mt-2">
              <div
                className="card border-success mb-3 wow fadeInUp position-sticky"
                data-wow-delay="0.1s"
                style={{ top: "7rem" }}
              >
                <div className="card-header bg-light">Struktur Organisasi</div>
                <div className="card-body text-success px-4">
                  <img
                    src="assetdemo/img/personil/struktur-organisasi.jpg"
                    alt="Struktur Organisasi"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-7 wow fadeInUp mt-5 mt-md-2"
              data-wow-delay="0.1s"
            >
              <div className="row">
                <div className="col-md-6 mb-3 col-sm-6 px-lg-1 px-2">
                  <div
                    className="wow fadeInUp bg-light p-3 pb-2 border-success border-4 border-start"
                    data-wow-delay="0.5s"
                  >
                    <p className="fs-5 fw-bold text-primary">
                      Muhammad Fulan, S.Kmz
                    </p>
                    <div
                      className="team-item rounded wow fadeInUp mb-2"
                      data-wow-delay="0.1s"
                    >
                      <img
                        className="img-fluid"
                        src="assetdemo/img/personil/default.jpg"
                        alt
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
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Aparat End */}

      <Footer />
    </>
  );
};

export default Struktur;
