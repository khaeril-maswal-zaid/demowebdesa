import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Lpm = () => {
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
            <div className="alert alert-success py-2 label-url" role="alert">
              <a href="/">
                <i className="bi bi-house-door-fill" />
              </a>
              <span className="px-1">/</span>
              <span className="px-1">Lembaga</span>
              <span className="px-1">/</span>
              <a href="/lembaga-pemberdayaan-desa">Lembaga Pemberdayaan Desa</a>
            </div>
          </div>
        </div>
        {/* Petunjuk URL Enad */}
      </section>

      {/* Features Start */}
      <section className="container-xxl py-3">
        <div className="container">
          <h1 className="display-5 text-primary">Lembaga Pemberdayaan Desa</h1>
          <p className="fs-4 d-md-block d-none fw-bold text-primary mb-5">
            Desa Wakanda Raya, Kecamatan Konoha Timur, Kabupaten Londong Raya
          </p>
          <p className="d-md-none d-block fw-bold text-primary mb-5">
            Desa Wakanda Raya, Kecamatan Konoha Timur, Kabupaten Londong Raya
          </p>
          <div className="row g-5 mt-4">
            <div className="col-lg-4 px-4 pe-lg-0 mt-2">
              <div
                className="wow fadeInUp bg-light p-3 pb-2 border-success border-4 border-start position-sticky"
                data-wow-delay="0.5s"
                style={{ top: "6rem" }}
              >
                <p className="fs-5 fw-bold text-primary">Personil LPM</p>
                <div
                  className="carousel slide mb-2"
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
                          <span>Ketua LPM</span>
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
                              href="https://wa.me/?text=Assalamualaikum Wr. Wb. %0A B/I. Muhammad Fulan, S.Kmz, Apakah ada waktu yang bisa saya gunakan untuk berkomunikasi?"
                              target="_blank"
                            >
                              <i className="fa fa-phone" />
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
              </div>
            </div>
            <div
              className="col-lg-8 wow fadeInUp mt-lg-2"
              data-wow-delay="0.1s"
            >
              <main>
                <div className="card border-success mb-3">
                  <div className="card-header bg-light">Kepengurusan LPM</div>
                  <div className="card-body text-success overflow-auto">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Nama</th>
                          <th scope="col">Jabatan</th>
                          <th scope="col">Alamat</th>
                          <th scope="col">Pendidikan</th>
                          <th scope="col">Kontak</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Muhammad Fulan, S.Kmz</td>
                          <td>Ketua LPM</td>
                          <td>Default</td>
                          <td>Default</td>
                          <td>Default</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card border-success mb-3">
                  <div className="card-header bg-light">Profil LPM</div>
                  <div className="card-body text-dark">Default </div>
                </div>
                <div className="card border-success mb-3">
                  <div className="card-header bg-light">
                    Tugas Pokok &amp; Fungsi LPM
                  </div>
                  <div className="card-body text-dark"> Default</div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </section>
      {/* Features End */}
      <Footer />
    </>
  );
};

export default Lpm;
