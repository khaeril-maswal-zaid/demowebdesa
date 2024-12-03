import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark text-light px-0 py-2">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <span className="fa fa-phone-alt me-2" />
              <span>08123456789</span>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <span className="far fa-envelope me-2" />
              <span>official@wakandaraya.desa.id</span>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center mx-n2">
              <Link className="btn btn-link text-light pe-2" to>
                <i className="fa fa-globe" />
              </Link>
              <span>Kabupaten Londong Raya</span>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-md bg-white navbar-light sticky-top p-0">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h1 className="m-0">Desa Wakanda</h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link">
              Beranda
            </Link>
            <div className="nav-item dropdown">
              <Link
                to="/#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Profil
              </Link>
              <div className="dropdown-menu bg-light m-0">
                <Link to="/profil-wilayah" className="dropdown-item">
                  Profil Wilayah
                </Link>
                <Link to="/sejarah-desa" className="dropdown-item">
                  Sejarah Desa
                </Link>
                <Link to="/galeri-desa" className="dropdown-item">
                  Galeri Desa
                </Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link
                to="/#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pemerintahan
              </Link>
              <div className="dropdown-menu bg-light m-0">
                <Link
                  to="/badan-permusyawaratan-desa"
                  className="dropdown-item"
                >
                  Badan Permusyawaratan Desa (BPD)
                </Link>
                <Link to="/visi-misi-desa" className="dropdown-item">
                  Visi Misi Desa
                </Link>
                <Link to="/struktur-pemerintahan" className="dropdown-item">
                  Struktur Pemerintahan
                </Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link
                to="/#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Kelembagaan
              </Link>
              <div className="dropdown-menu bg-light m-0">
                <Link className="dropdown-item" to="/lembaga-pemberdayaan-desa">
                  Lembaga Pemberdayaan Desa (LPM)
                </Link>
                <Link
                  className="dropdown-item"
                  to="/pembinaan-kesejahteraan-keluarga"
                >
                  Pemberdayaan Kesejahteraan Keluarga (PKK)
                </Link>
                <Link className="dropdown-item" to="/karang-taruna">
                  Karang Taruna
                </Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link
                to="/#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Data
              </Link>
              <div className="dropdown-menu bg-light m-0">
                <Link to="/data-desa/data-wilayah" className="dropdown-item">
                  Data Wilayah
                </Link>
                <Link to="/data-desa/data-agama" className="dropdown-item">
                  Data Agama
                </Link>
                <Link
                  to="/data-desa/data-asuransi-kesehatan"
                  className="dropdown-item"
                >
                  Data Asuransi Kesehatan
                </Link>
                <Link
                  to="/data-desa/data-status-perkawinan"
                  className="dropdown-item"
                >
                  Data Status Perkawinan
                </Link>
                <Link to="/data-desa/data-pendidikan" className="dropdown-item">
                  Data Pendidikan
                </Link>
                <Link to="/data-desa/data-pekerjaan" className="dropdown-item">
                  Data Pekerjaan
                </Link>
              </div>
            </div>
          </div>
          <Link
            to="/kontak-desa"
            className="btn btn-primary py-4 px-md-4 rounded-0 d-none d-md-block"
          >
            Kontak kami
            <i className="fa fa-arrow-right ms-3" />
          </Link>
          <Link
            to="/kontak-desa"
            className="btn btn-primary rounded d-block d-md-none m-3 mb-5 py-2"
            style={{ maxHeight: "45px !important" }}
          >
            Kontak kami
            <i className="fa fa-arrow-right ms-3" />
          </Link>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
};

export default Navbar;
