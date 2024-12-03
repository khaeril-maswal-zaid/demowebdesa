import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Kontak = () => {
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
              <a href="/kontak-desa">Kontak Desa</a>
            </div>
          </div>
        </div>
        {/* Petunjuk URL Enad */}
      </section>
      {/* Features Start */}
      <section className="container-xxl py-3">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="display-5 text-primary">Kontak Kami !</h1>
              <p className="fs-4 d-md-block d-none fw-bold text-primary mb-5">
                Desa Wakanda Raya, Kecamatan Konoha Timur, Kabupaten Londong
                Raya
              </p>
              <p className="d-md-none d-block fw-bold text-primary mb-5">
                Desa Wakanda Raya, Kecamatan Konoha Timur, Kabupaten Londong
                Raya
              </p>
              <div className="row mb-3">
                <div className="col-3">
                  <h5 className="kontak-area">Telpon</h5>
                </div>
                <div className="col-9">
                  <h5 className="kontak-area">
                    : <a href="#">08123456789</a>
                  </h5>
                </div>
                <div className="col-3">
                  <h5 className="kontak-area">WhatsApp</h5>
                </div>
                <div className="col-9">
                  <h5 className="kontak-area">
                    : <a href="#">08123456789</a>
                  </h5>
                </div>
                <div className="col-3">
                  <h5 className="kontak-area">Facebook</h5>
                </div>
                <div className="col-9">
                  <h5 className="kontak-area">
                    : <a href="#">Desa Wakanda Raya</a>
                  </h5>
                </div>
                <div className="col-3">
                  <h5 className="kontak-area">Instagram</h5>
                </div>
                <div className="col-9">
                  <h5 className="kontak-area">
                    : <a href="#">Desa Wakanda Raya</a>
                  </h5>
                </div>
                <div className="col-3">
                  <h5 className="kontak-area">Email</h5>
                </div>
                <div className="col-9">
                  <h5 className="kontak-area">
                    : <a href="#">official@wakandaraya.desa.id</a>
                  </h5>
                </div>
                <div className="col-3">
                  <h5 className="kontak-area">Youtube</h5>
                </div>
                <div className="col-9">
                  <h5 className="kontak-area">
                    : <a href="#">Desa Berkemajuan</a>
                  </h5>
                </div>
              </div>
              <div className="aduan-area">
                <p className="mb-4">
                  Kami sangat menghargai setiap masukan dan aduan dari
                  Masyarakat. Jika Anda memiliki aduan atau keluhan yang perlu
                  disampaikan kepada kami, silakan kunjungi laman Layanan
                  Pengaduan!
                </p>
                <Link
                  className="btn btn-primary py-3 px-4"
                  to="/layanan-pengaduan"
                >
                  Layanan Pengaduan
                </Link>
              </div>
            </div>
            <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
              <h2 className="display-6 text-primary mb-3">
                Peta Desa Wakanda Raya
              </h2>
              <div className="border border-3 border-success rounded">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12428.04460640446!2d120.41324731012118!3d-5.488315148052575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbc0972e26dcbb5%3A0x32c1c4177d63233d!2sPakubalaho%2C%20Kec.%20Bonto%20Tiro%2C%20Kabupaten%20Bulukumba%2C%20Sulawesi%20Selatan!5e0!3m2!1sid!2sid!4v1684291021556!5m2!1sid!2sid"
                  width="100%"
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Kontak;
