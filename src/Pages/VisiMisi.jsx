import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const VisiMisi = () => {
  return (
    <>
      <Navbar />
      {/* Features Start */}
      <section className="container-xxl py-3">
        <div className="container">
          <div className="mb-5">
            <h1 className="display-5 text-primary">Visi Misi Desa</h1>
            <p className="fs-4 d-md-block d-none fw-bold text-primary mb-0">
              Desa Wakanda Raya, Kecamatan Konoha Timur, Kabupaten Londong Raya
            </p>
            <p className="d-md-none d-block fw-bold text-primary mb-0">
              Desa Wakanda Raya, Kec. Konoha Timur, Kab. Londong Raya
            </p>
          </div>
          <div className="row g-5 mt-1">
            <div className="col-lg-4 px-4 pe-lg-0 mt-2">
              <div
                className="wow fadeInUp bg-light p-3 pb-2 border-success border-4 border-start position-sticky"
                data-wow-delay="0.5s"
                style={{ top: "7rem" }}
              >
                <p className="fs-5 fw-bold text-primary">Kepala Desa</p>
                <div
                  className="team-item rounded wow fadeInUp mb-2"
                  data-wow-delay="0.1s"
                >
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
            <div
              className="col-lg-8 wow fadeInUp mt-lg-2"
              data-wow-delay="0.1s"
            >
              <div className="card border-success mb-3">
                <div className="card-header bg-light">Biodata</div>
                <div className="card-body text-success px-4">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Jabatan</th>
                        <th scope="col">:</th>
                        <th scope="col">Kepala Desa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Nama</td>
                        <td>:</td>
                        <td>Muhammad Fulan, S.Kmz</td>
                      </tr>
                      <tr>
                        <td>Alamat</td>
                        <td>:</td>
                        <td>Default</td>
                      </tr>
                      <tr>
                        <td>pendidikan</td>
                        <td>:</td>
                        <td>Default</td>
                      </tr>
                      <tr>
                        <td>No Hp (WhatsApp)</td>
                        <td>:</td>
                        <td>Default</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card border-success mb-3">
                <div className="card-header bg-light">Visi Desa</div>
                <div className="card-body">Default</div>
              </div>
              <div className="card border-success mb-3">
                <div className="card-header bg-light">Misi Desa</div>
                <div className="card-body">Default</div>
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

export default VisiMisi;
