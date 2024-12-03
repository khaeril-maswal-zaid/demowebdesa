import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      {/* Carousel Start */}
      <section className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100"
                src="assetdemo/img/assets/carousel-1.jpg"
                alt="Carousel 1"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h1 className="display-6 text-white mb-5 animated slideInDown">
                        Website Resmi <br />
                        Desa Wakanda Raya, Kec. Konoha Timur, Kab. Londong Raya
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100"
                src="assetdemo/img/assets/carousel-2.jpg"
                alt="Carousel 2"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <h1 className="display-6 text-white mb-5 animated slideInDown">
                        Pintu Informasi Desa <br />
                        Transparan, Terpercaya dan Terkini
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100"
                src="assetdemo/img/assets/carousel-3.jpg"
                alt="Carousel 3"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <h1 className="display-6 text-white mb-5 animated slideInDown">
                        Pintu Informasi Desa <br />
                        Transparan, Terpercaya dan Terkini
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* Carousel End */}
      {/* Fitur Utama Start */}
      <section className="container-fluid top-feature pb-lg-4 pt-lg-0">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div
                className="bg-white shadow d-flex align-items-center h-100 px-5 portfolio-inner"
                style={{ minHeight: 160 }}
              >
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      fill="#198754"
                      className="bi bi-cash-stack"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                      <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z" />
                    </svg>
                  </div>
                  <div className="ps-3">
                    <h4>Keuangan Desa</h4>
                    <span>
                      Membangun kesejahteraan melalui informasi yang jelas
                    </span>
                  </div>
                </div>
                <div className="portfolio-text">
                  <h4 className="text-white mb-2 mt-5">Selengkapnya...</h4>
                  <div className="d-flex">
                    <Link
                      className="btn btn-lg-square rounded-circle mx-2"
                      to="keuangan-dasa"
                    >
                      <i className="fa fa-eye" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div
                className="bg-white shadow d-flex align-items-center h-100 px-5 portfolio-inner"
                style={{ minHeight: 160 }}
              >
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      fill="#198754"
                      className="bi bi-building-add"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Z" />
                      <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1V1Z" />
                      <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                    </svg>
                  </div>
                  <div className="ps-3">
                    <h4>Status IDM</h4>
                    <span>Afirmasi, integrasi, dan sinergi pembangunan </span>
                  </div>
                </div>
                <div className="portfolio-text">
                  <h4 className="text-white mb-2 mt-5">Selengkapnya...</h4>
                  <div className="d-flex">
                    <Link
                      className="btn btn-lg-square rounded-circle mx-2"
                      to="status-idm"
                    >
                      <i className="fa fa-eye" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div
                className="bg-white shadow d-flex align-items-center h-100 px-5 portfolio-inner"
                style={{ minHeight: 160 }}
              >
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      fill="#198754"
                      className="bi bi-gear-wide"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
                    </svg>
                  </div>
                  <div className="ps-3">
                    <h4>Stasus SDGS</h4>
                    <span>Ekonomi, sosial, lingkungan dan tata kelola</span>
                  </div>
                </div>
                <div className="portfolio-text">
                  <h4 className="text-white mb-2 mt-5">Selengkapnya...</h4>
                  <div className="d-flex">
                    <Link
                      className="btn btn-lg-square rounded-circle mx-2"
                      to="sdgs-desa"
                    >
                      <i className="fa fa-eye" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Fitur Utama End */}
      {/* Jadwal Sholat */}
      <section className="container pb-3 pb-lg-4 mb-3">
        <div className="row">
          <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
            <div className="py-4 ps-3 bg-success mb-2 rounded">
              <h6 className="fw-bold text-white">
                <i className="bi bi-clock pe-2" /> Jadwal Sholat Bulukumba
              </h6>
              <i className="bi bi-calendar-date text-white pe-2" />
              <span className="fst-italic text-white">
                Selasa, 03 Desember 2024
              </span>
            </div>
          </div>
          {/* SUMBER API JADWAL SHOLAT DI "https://api.myquran.com/v1/sholat/kota/cari/BULUKUMBA" */}
          <div className="col-lg-8">
            <div className="row px-2">
              <div
                className="col-4 col-lg-2 mb-2 wow fadeInDown px-1"
                data-wow-delay="0.3s"
              >
                <div className="rounded shadow py-2 text-center border border-success">
                  <span className="text-sm tracking-widest capitalize text-primary">
                    <img
                      src="assetdemo/img/assets/moon.png"
                      alt="Subuh"
                      width={37}
                    />
                    <span>Imsak</span>
                  </span>
                  <h3 className="card-subtitle mt-2 mb-1">04:33</h3>
                </div>
              </div>
              <div
                className="col-4 col-lg-2 mb-2 wow fadeInDown px-1"
                data-wow-delay="0.3s"
              >
                <div className="rounded shadow py-2 text-center border border-success">
                  <span className="text-sm tracking-widest capitalize text-primary">
                    <img
                      src="assetdemo/img/assets/moon.png"
                      alt="Subuh"
                      width={37}
                    />
                    <span>Subuh</span>
                  </span>
                  <h3 className="card-subtitle mt-2 mb-1">04:43</h3>
                </div>
              </div>
              <div
                className="col-4 col-lg-2 mb-2 wow fadeInDown px-1"
                data-wow-delay="0.3s"
              >
                <div className="rounded shadow py-2 text-center border border-success">
                  <span className="text-sm tracking-widest capitalize text-primary">
                    <img
                      src="assetdemo/img/assets/moon.png"
                      alt="Subuh"
                      width={37}
                    />
                    <span>Dhuhr</span>
                  </span>
                  <h3 className="card-subtitle mt-2 mb-1">12:05</h3>
                </div>
              </div>
              <div
                className="col-4 col-lg-2 mb-2 wow fadeInDown px-1"
                data-wow-delay="0.3s"
              >
                <div className="rounded shadow py-2 text-center border border-success">
                  <span className="text-sm tracking-widest capitalize text-primary">
                    <img
                      src="assetdemo/img/assets/moon.png"
                      alt="Subuh"
                      width={37}
                    />
                    <span>Ashar</span>
                  </span>
                  <h3 className="card-subtitle mt-2 mb-1">15:15</h3>
                </div>
              </div>
              <div
                className="col-4 col-lg-2 mb-2 wow fadeInDown px-1"
                data-wow-delay="0.3s"
              >
                <div className="rounded shadow py-2 text-center border border-success">
                  <span className="text-sm tracking-widest capitalize text-primary">
                    <img
                      src="assetdemo/img/assets/moon.png"
                      alt="Subuh"
                      width={37}
                    />
                    <span>Maghrib</span>
                  </span>
                  <h3 className="card-subtitle mt-2 mb-1">18:02</h3>
                </div>
              </div>
              <div
                className="col-4 col-lg-2 mb-2 wow fadeInDown px-1"
                data-wow-delay="0.3s"
              >
                <div className="rounded shadow py-2 text-center border border-success">
                  <span className="text-sm tracking-widest capitalize text-primary">
                    <img
                      src="assetdemo/img/assets/moon.png"
                      alt="Subuh"
                      width={37}
                    />
                    <span>Isya</span>
                  </span>
                  <h3 className="card-subtitle mt-2 mb-1">19:04</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Jadwal Sholat End*/}
      {/* <hr class="d-block d-lg-none my-auto wow fadeIn" data-wow-delay="0.3s" style="max-width: 87%; margin: 0px auto"/> */}
      {/* Potensi Start */}
      <section className="container-xxl pt-3 pb-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-8 col-lg-9">
              <div className="row">
                <div
                  className="col-lg-4 col-sm-5 col-md-12 wow fadeInUp mb-3"
                  data-wow-delay="0.1s"
                >
                  <img
                    className="img-fluid rounded d-none d-sm-block d-md-none d-lg-block"
                    data-wow-delay="0.1s"
                    src="assetdemo/img/blog/default-khusus-lg.jpg"
                  />
                  <img
                    className="img-fluid rounded d-block d-md-block d-sm-none d-lg-none"
                    data-wow-delay="0.1s"
                    src="assetdemo/img/blog/default-khusus.jpg"
                  />
                </div>
                <div
                  className="col-lg-8 col-sm-7 col-md-12 wow fadeInUp ps-lg-2 pe-lg-4 mh-100"
                  data-wow-delay="0.3s"
                >
                  <h1 className="display-4 text-primary mb-2">
                    Potensi Desa Wakanda Raya
                  </h1>
                  <h3 className="-">Potensi Limbah Kulit Jagung</h3>
                  <p className="mb-4 overflow-hidden">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque doloribus iure reprehenderit ullam tempora nulla
                    accusantium veniam porro assumenda tenetur unde a dolore
                    necessitatibus, odit atque cupiditate laborum itaque
                    repudiandae delectus, eius modi dolores optio harum. Ipsum
                    repellat suscipit odit. Blanditiis assumenda eum rem
                    sapiente quae odio officia vel temporibus. Quas vel et alias
                    voluptatibus beatae at, quae ratione itaque nam vero nemo,..
                  </p>
                  <Link
                    className="btn btn-primary btn-sm py-2 px-3"
                    to="potensi-desa"
                  >
                    Selengkapnya...
                  </Link>
                </div>
              </div>
            </div>
            {/* <hr class="d-block d-lg-none" style="max-width: 95%; margin: 0px auto;" data-wow-delay="0.5s"> */}
            <div className="col-md-4 col-lg-3 px-0">
              <div
                className="wow fadeInUp bg-light p-3 border-start position-sticky"
                data-wow-delay="0.5s"
                style={{ top: "6rem" }}
              >
                {/* <div class="border-start ps-4"> */}
                <p className="fs-5 fw-bold text-primary">
                  <Link to="struktur-pemerintahan">Aparatur Desa</Link>
                </p>
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
                            <Link
                              className="btn btn-lg-square rounded-circle mx-2"
                              to="img/personil/default.jpg"
                              data-lightbox="aparatur"
                            >
                              <i className="fa fa-eye" />
                            </Link>
                            <Link
                              className="btn btn-lg-square rounded-circle mx-2"
                              to="struktur-pemerintahan/kepala-desa/muhammad-fulan,-s.kmz"
                            >
                              <i className="fa fa-link" />
                            </Link>
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
      {/* Potensi End */}
      {/* Facts Start */}
      <section
        className="container-fluid facts my-5 py-5"
        data-parallax="scroll"
        data-image-src="assetdemo/img/assets/carousel-4.jpg"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div
              className="col-sm-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.1s"
            >
              <h1 className="display-4 text-white" data-toggle="counter-up">
                2091
              </h1>
              <span className="fs-5 fw-semi-bold text-light">
                Penduduk Laki-Laki
              </span>
            </div>
            <div
              className="col-sm-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.3s"
            >
              <h1 className="display-4 text-white" data-toggle="counter-up">
                2091
              </h1>
              <span className="fs-5 fw-semi-bold text-light">
                Penduduk Perempuan
              </span>
            </div>
            <div
              className="col-sm-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.5s"
            >
              <h1 className="display-4 text-white" data-toggle="counter-up">
                4182
              </h1>
              <span className="fs-5 fw-semi-bold text-light">
                Jumlah Penduduk
              </span>
            </div>
            <div
              className="col-sm-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.7s"
            >
              <h1 className="display-4 text-white" data-toggle="counter-up">
                2091
              </h1>
              <span className="fs-5 fw-semi-bold text-light">
                Jumlah Keluarga
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Facts End */}
      {/* Berita Start */}
      <section className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <p className="fs-5 fw-bold text-primary">
              Selasa, 03 Desember 2024
            </p>
            <h1 className="display-5 mb-5">Kabar Desa Terkini</h1>
          </div>
          <div className="row g-4" />
        </div>
      </section>
      {/* Berita End */}
      {/* Maps dan Flayer Start */}
      <section className="container-xxl p-lg-5 bg-light mt-4">
        {/* <div class="container"> */}
        <div className="row align-items-centerX">
          <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="display-5 text-primary mb-3">
              Peta Desa Wakanda Raya
            </h1>
            <div className="overflowhidden border border-3 border-success rounded">
              <iframe
                width="100%"
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div
            className="col-lg-4 px-3 pt-4 px-lg-0 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            <div className="bg-primary mt-5 p-5 rounded">
              <h2 className="text-white">Layanan Pengaduan</h2>
              <h4 className="text-white pb-2">Desa Wakanda Raya</h4>
              <div className="aduan-area mt-4 pe-4">
                <p className="mb-5 text-white">
                  Kami sangat menghargai setiap masukan dan aduan dari
                  Masyarakat. Jika Anda memiliki aduan atau keluhan yang perlu
                  disampaikan kepada kami, silakan kunjungi laman Layanan
                  Pengaduan!
                </p>
                <Link
                  className="btn btn-warning py-3 px-4"
                  to="layanan-pengaduan"
                >
                  Layanan Pengaduan
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
      {/* Maps dan Flayer End */}

      <Footer />
    </>
  );
}

export default Home;
