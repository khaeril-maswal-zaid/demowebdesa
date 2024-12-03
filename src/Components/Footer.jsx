import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-light footer mt-5 py-3 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-5 col-md-6">
              <h4 className="text-white mb-4">Tentang</h4>
              <p>
                Merupakan Website Resmi Desa Wakanda Raya serta merupakan
                platform online yang dirancang secara khusus untuk memberikan
                kemudahan dalam berkomunikasi dan bertukar informasi antara
                pemerintah desa, warga desa, dan masyarakat umum.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 px-4 px-lg-0">
              <h4 className="text-white mb-4">Kontak</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                Jln. Tani, Dusun Konoha, Desa Wakanda Raya
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                08123456789, 08123456789
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                official@wakandaraya.desa.id
              </p>
              <div className="d-flex pt-2">
                <Link
                  className="btn btn-square btn-outline-light rounded-circle me-2"
                  to="#"
                >
                  <i className="fab fa-instagram" />
                </Link>
                <Link
                  className="btn btn-square btn-outline-light rounded-circle me-2"
                  to="#"
                >
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link
                  className="btn btn-square btn-outline-light rounded-circle me-2"
                  to="#"
                >
                  <i className="fab fa-youtube" />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Layanan</h4>
              <Link className="btn btn-link" to="admindes">
                Admin
              </Link>
              <Link className="btn btn-link" to="#">
                Direktori
              </Link>
              <p className="btn btn-link">Penelusuran</p>
              <div className="position-relative w-100">
                <input
                  className="form-control bg-light border-light w-100 py-3 ps-4 pe-5"
                  type="text"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  Cari
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Copyright Start */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              ©{" "}
              <Link className="border-bottom" to="#">
                Desa Wakanda Raya
              </Link>
              , All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
              Designed By
              <Link className="border-bottom" to="https://htmlcodex.com">
                HTML Codex
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}
      {/* Back to Top */}
      <Link
        to="#"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up" />
      </Link>
    </>
  );
};

export default Footer;
