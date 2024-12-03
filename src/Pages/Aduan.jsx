import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Aduan = () => {
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
              <a href="/kontak-desa">Layanan Pengaduan</a>
            </div>
          </div>
        </div>
        {/* Petunjuk URL Enad */}
      </section>

      {/* Features Start */}
      <section className="container-xxl py-3">
        <div className="container">
          <h1 className="display-5 text-primary">Layanan Pengaduan</h1>
          <p className="fs-4 d-md-block d-none fw-bold text-primary mb-5">
            Desa Wakanda Raya, Kecamatan Konoha Timur, Kabupaten Londong Raya
          </p>
          <p className="d-md-none d-block fw-bold text-primary mb-5">
            Desa Wakanda Raya, Kecamatan Konoha Timur, Kabupaten Londong Raya
          </p>
          <div className="row">
            <div className="col-md-5 wow fadeInUp" data-wow-delay="0.1s">
              <form>
                <input type="hidden" name="csrf_test_name" />
                <input type="hidden" name="nomoraduan" />

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        autoFocus
                        name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email Anda"
                      />
                      <label htmlFor="email">Email*</label>
                      <div className="invalid-feedback">
                        Email wajib diisi &amp; Valid Email
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        name="nik"
                        type="text"
                        className="form-control"
                        id="nik"
                        placeholder="NIK Anda"
                        maxLength={16}
                      />
                      <label htmlFor="nik">NIK</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        name="name"
                        type="text"
                        className="form-control "
                        id="name"
                        placeholder="Nama Anda"
                      />
                      <label htmlFor="name">Nama*</label>
                      <div className="invalid-feedback">
                        Nama wajib diisi &amp; tidak lebih 150 karakter
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        name="hp"
                        type="text"
                        className="form-control"
                        id="hp"
                        placeholder="No Hp Anda"
                      />
                      <label htmlFor="hp">No Hp</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        name="subject"
                        type="text"
                        className="form-control "
                        id="subject"
                        placeholder="Subject"
                      />
                      <label htmlFor="subject">Subjek*</label>
                      <div className="invalid-feedback">
                        Subjek wajib diisi &amp; tidak lebih 200 karakter
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        name="pengaduan"
                        className="form-control"
                        id="message"
                        style={{ height: 200 }}
                      />
                      <label htmlFor="message">Isi Pengaduan*</label>
                      <div className="invalid-feedback">
                        Isi Pengaduan wajib diisi &amp; tidak lebih 1000
                        karakter
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floatingX">
                      <label htmlFor="file" className="form-label">
                        File Lampiran (jpg, jpeg, png)
                      </label>
                      <input
                        name="fileaduan"
                        type="file"
                        className="form-control "
                        id="file"
                        placeholder="Subject"
                      />
                      <div className="invalid-feedback"></div>
                    </div>
                  </div>
                  <div className="col-12 mb-5">
                    <div className="d-grid gap-2">
                      <button
                        className="btn btn-primary d-block d-md-none"
                        type="submit"
                      >
                        Kirim Aduan
                      </button>
                    </div>
                    <button
                      className="btn btn-primary py-3 px-4 d-none d-md-block"
                      type="submit"
                    >
                      Kirim Aduan
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div
              className="col-md-7 border border-2 border-success rounded wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="p-4">
                <h2 className="text-primary mb-0">Riwayat Pengaduan:</h2>
                <div className="owl-carousel testimonial-carousel"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <section
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                LAYANAN PENGADUAN
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body bg-light">
              <div className="row">
                <div className="col-md-7">
                  <div className="card">
                    <div className="card-header">
                      <span id="nama">Khaeril Maswal Zaid</span>
                      <span
                        id="status"
                        className="badge bg-secondary float-end"
                      >
                        Aman diproses
                      </span>
                    </div>
                    <div className="card-body">
                      <div
                        id="lampiran"
                        style={{ height: "13em" }}
                        className="overflow-hidden mb-3"
                      >
                        <img
                          src="assetdemo/img/aduan/default.jpg"
                          alt="default"
                        />
                      </div>
                      <h5 id="subjectm" className="card-title">
                        Subjek: Penawaran Domain Website Desa
                      </h5>
                      <p id="aduan" className="card-text">
                        Kami senang dapat menyediakan layanan domain website
                        desa untuk memperkuat kehadiran online dan mempromosikan
                        potensi dan informasi penting dari Desa Wakanda Raya
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="card">
                    <div className="card-header">
                      <span id="nama">Respon</span>
                      <span
                        className="d-block"
                        style={{ fontSize: 12 }}
                        id="emailtanggapan"
                      >
                        tanggapan: muhammadkhaerilzaid@gmail.com
                      </span>
                    </div>
                    <div className="card-body">
                      <h5 id="noaduan" className="card-title">
                        No. Aduan: 7777777777
                      </h5>
                      <p id="respon" className="card-text">
                        Respon Balik dari admin
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Aduan;
