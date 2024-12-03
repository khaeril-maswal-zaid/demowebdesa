import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Sdgs = () => {
  return (
    <>
      <Navbar />
      <section
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeIn",
        }}
      >
        <div className="container text-center py-5">
          <h1 className="display-5 text-white mb-3 slideInDown">Situs Resmi</h1>
          <h1 className="display-4 text-white mb-2 slideInDown">
            Desa Wakanda Raya
          </h1>
        </div>
      </section>

      {/* Petunjuk URL Start */}
      <section className="container-xxl">
        <div className="container">
          <div className="alert alert-success py-2" role="alert">
            <a href="/">
              <i className="bi bi-house-door-fill" />
            </a>
            <span className="px-1">/</span>
            <span className="px-1">SDGS Desa</span>
          </div>
        </div>
      </section>
      {/* Petunjuk URL Enad */}

      {/* Features Start */}
      <section className="container-xxl py-3">
        <div className="container">
          <h1 className="display-5 text-primary">SDGS Desa Tahun 2024</h1>
          <p className="fs-4 d-md-block d-none fw-bold text-primary mb-5">
            Desa Wakanda Raya, Kecamatan Konoha Timur, Kabupaten Londong Raya
          </p>
          <p className="d-md-none d-block fw-bold text-primary mb-5">
            Desa Wakanda Raya, Kecamatan Konoha Timur, Kabupaten Londong Raya
          </p>
          <div
            className="text-center mx-auto wow fadeInUp pt-lg-5 pb-lg-3"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <h1 className="display-5">Skor SDGs Desa</h1>
            <h2 className="mb-5">32.21</h2>
          </div>
          <div className="row g-5">
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-1.jpg"
                  className="card-img-top"
                  alt="Desa Tanpa Kemiskinan"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">46.98</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-2.jpg"
                  className="card-img-top"
                  alt="Desa Tanpa Kelaparan"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">49.54</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-3.jpg"
                  className="card-img-top"
                  alt="Desa Sehat dan Sejahtera"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">60.11</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-4.jpg"
                  className="card-img-top"
                  alt="Pendidikan Desa Berkualitas"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">23.31</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-5.jpg"
                  className="card-img-top"
                  alt="Keterlibatan Perempuan Desa"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">42.11</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-6.jpg"
                  className="card-img-top"
                  alt="Desa Layak Air Bersih dan Sanitasi"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">72.16</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-7.jpg"
                  className="card-img-top"
                  alt="Desa Berenergi Bersih dan Terbarukan"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">99.25</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-8.jpg"
                  className="card-img-top"
                  alt="Pertumbuhan Ekonomi Desa Merata"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">31.74</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-9.jpg"
                  className="card-img-top"
                  alt="Infrastruktur dan Inovasi Desa Sesuai Kebutuhan"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">0</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-10.jpg"
                  className="card-img-top"
                  alt="Desa Tanpa Kesenjangan"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">25.85</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-11.jpg"
                  className="card-img-top"
                  alt="Kawasan Pemukiman Desa Aman dan Nyaman"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">79.35</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-12.jpg"
                  className="card-img-top"
                  alt="Konsumsi dan Produksi Desa Sadar Lingkungan"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">0</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-13.jpg"
                  className="card-img-top"
                  alt="Desa Tanggap Perubahan Iklim"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">0</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-14.jpg"
                  className="card-img-top"
                  alt="Desa Peduli Lingkungan Laut"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">0</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-15.jpg"
                  className="card-img-top"
                  alt="Desa Peduli Lingkungan Darat"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">0</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-16.jpg"
                  className="card-img-top"
                  alt="Desa Damai Berkeadilan"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">49.46</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-17.jpg"
                  className="card-img-top"
                  alt="Kemitraan Untuk Pembangunan Desa"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">0</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-18.jpg"
                  className="card-img-top"
                  alt="Kelembagaan Desa Dinamis dan Budaya Desa Adaptif"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">0</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="chart-line mt-5">
            <figure className="highcharts-figure">
              <div id="container" />
            </figure>
            <div className="close"></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Sdgs;
