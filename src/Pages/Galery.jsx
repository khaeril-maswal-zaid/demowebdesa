import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Galery = () => {
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
              <span className="text-success">Galery Desa</span>
            </div>
          </div>
        </div>
        {/* Alamat Web Start */}
      </section>

      {/* Projects Start */}
      <section className="container-xxl py-4">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <h1 className="display-5">Galery Desa</h1>
            <h2 className="display-5 mb-5">Wakanda Raya</h2>
          </div>
          <div className="row portfolio-containerX mb-3 ">
            <div
              className="col-lg-4 col-md-6 portfolio-item mb-3 <? $urutan[$i-- % 2] ?> wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div
                className="portfolio-inner rounded"
                style={{ height: "15em" }}
              >
                <img
                  className="img-fluid h-100 w-100"
                  src="assetdemo/img/blog/default-khusus.jpg"
                  alt
                  style={{ objectFit: "cover" }}
                />
                <div className="portfolio-text px-3">
                  <h5 className="text-white text-center mb-4">Potensi Desa</h5>
                  <div className="d-flex">
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href="/img/blog/default-khusus.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye" />
                    </a>
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href="/potensi-desa/1733031447"
                    >
                      <i className="fa fa-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item mb-3 <? $urutan[$i-- % 2] ?> wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div
                className="portfolio-inner rounded"
                style={{ height: "15em" }}
              >
                <img
                  className="img-fluid h-100 w-100"
                  src="assetdemo/img/blog/default-khusus.jpg"
                  alt
                  style={{ objectFit: "cover" }}
                />
                <div className="portfolio-text px-3">
                  <h5 className="text-white text-center mb-4">Sejarah Desa</h5>
                  <div className="d-flex">
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href="/img/blog/default-khusus.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye" />
                    </a>
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href="/sejarah-desa/1733031447"
                    >
                      <i className="fa fa-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 portfolio-item mb-3 <? $urutan[$i-- % 2] ?> wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div
                className="portfolio-inner rounded"
                style={{ height: "15em" }}
              >
                <img
                  className="img-fluid h-100 w-100"
                  src="assetdemo/img/blog/default-khusus.jpg"
                  alt
                  style={{ objectFit: "cover" }}
                />
                <div className="portfolio-text px-3">
                  <h5 className="text-white text-center mb-4">
                    Profil Wilayah
                  </h5>
                  <div className="d-flex">
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href="/img/blog/default-khusus.jpg"
                      data-lightbox="portfolio"
                    >
                      <i className="fa fa-eye" />
                    </a>
                    <a
                      className="btn btn-lg-square rounded-circle mx-2"
                      href="/profil-wilayah/1733031447"
                    >
                      <i className="fa fa-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //pagination CI4 */}
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-end">
              <li className="page-item active">
                <a
                  className="page-link"
                  href="http://localhost:8080/index.php/galeri-desa?page_siades_artikel=1"
                >
                  1{" "}
                </a>
              </li>
            </ul>
          </nav>{" "}
        </div>
      </section>
      {/* Projects End */}

      <Footer />
    </>
  );
};

export default Galery;
