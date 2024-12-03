import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ProfilWilayah = () => {
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
              <Link to="/">
                <i className="bi bi-house-door-fill" />
              </Link>
              <span className="px-1">/</span>
              <Link to="#">Informasi</Link>
              <span className="px-1">/</span>
              <span className="text-success">Kabar Desa</span>
            </div>
          </div>
        </div>
        {/* Petunjuk URL Enad */}
      </section>

      {/* Features Start */}
      <section className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8 wow fadeInUp mt-2" data-wow-delay="0.1s">
              <img
                src="assetdemo/img/blog/default-khusus.jpg"
                alt="default-khusus.jpg"
                className="mb-2 img-fluid w-100"
                style={{ objectFit: "cover" }}
              />
              <div className="d-flex mb-lg-3 mb-3" style={{ fontSize: "77%" }}>
                <div className="align-items-center">
                  <img
                    className="rounded-circle me-0"
                    src="assetdemo/img/admin/default.jpg"
                    width={20}
                    height={20}
                    alt="default.jpg"
                  />
                  <span className="m-1">Default Admin</span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="ms-2">
                    <i className="far fa-eye mr-2" /> 53
                  </span>
                </div>
              </div>
              <h1 className="display-6 mb-lg-1 mb-2 text-uppercase">
                Profil Wilayah{" "}
              </h1>
              <div className="mb-4" style={{ fontSize: "77%" }}>
                <span className="btn btn-primary btn-sm fw-semi-bold rounded-0 p-0 px-1 me-2">
                  KABAR DESA
                </span>
                <span className="text-body">07 Maret 2023</span>
              </div>
              <div className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque doloribus iure reprehenderit ullam tempora nulla
                accusantium veniam porro assumenda tenetur unde a dolore
                necessitatibus, odit atque cupiditate laborum itaque repudiandae
                delectus, eius modi dolores optio harum. Ipsum repellat suscipit
                odit. Blanditiis assumenda eum rem sapiente quae odio officia
                vel temporibus. Quas vel et alias voluptatibus beatae at, quae
                ratione itaque nam vero nemo sed possimus eum? Veniam eum
                mollitia pariatur. Eligendi quidem doloremque, culpa vero fuga
                laborum consequuntur sapiente amet natus quisquam maiores rem
                necessitatibus minima possimus ab earum repellendus tempora
                dolor? Eos enim vitae hic consequuntur inventore eveniet ut
                provident id, distinctio eum fugit impedit facilis reiciendis.
                Qui amet tenetur, veniam excepturi officia nulla, beatae,
                blanditiis eaque facere cumque consequatur architecto! Eveniet
                consectetur eligendi exercitationem, nulla nobis delectus autem
                ab, beatae rerum architecto aspernatur blanditiis molestias
                tenetur porro eius? Perspiciatis, amet alias. Esse nemo
                excepturi commodi, voluptatibus optio ut voluptatum natus nulla
                repellendus ad quo perspiciatis, maiores reprehenderit veritatis
                doloribus expedita fugit neque nam aspernatur non earum fuga
                eos? Ducimus corporis praesentium labore reiciendis dolore
                tempora alias officia voluptatum omnis amet cumque
                necessitatibus, perspiciatis, neque fugiat doloribus libero?
                Incidunt rem aspernatur et laboriosam in voluptas recusandae
                accusantium dicta consequuntur, odit doloremque optio officiis
                minima quis molestiae, dolore assumenda adipisci nobis. Eos
                doloremque iure nostrum harum repellat reprehenderit in,
                voluptatem eum fugit cum, consectetur quaerat veritatis sed!
                Tempore autem perferendis mollitia temporibus magni ipsa aut
                inventore, tempora blanditiis totam molestias consequuntur
                maxime recusandae, est iure reiciendis cumque fuga sit! Odio
                tempora ad asperiores error unde dicta numquam perferendis est
                reprehenderit cum. Cumque nihil voluptatum aspernatur impedit
                numquam incidunt sequi omnis ullam eum, fuga magnam eveniet enim
                iusto officia, consectetur dolores rem blanditiis sunt quisquam
                consequuntur libero nam. Maxime dolores optio voluptates
                accusamus vero non inventore nisi quam, quas ratione quo
                officiis dolorum dolorem autem error saepe placeat culpa.
                Praesentium laudantium sunt, placeat dolore fugiat iste iusto
                tempora eligendi eius quasi beatae adipisci voluptate saepe
                soluta sapiente eos dignissimos, repellendus accusamus minus
                impedit molestias. Eveniet eligendi consequuntur facere rem,
                nihil dolores fugit quos quibusdam laborum dignissimos
                asperiores. Deleniti quisquam hic enim laborum expedita
                explicabo facilis doloribus ad in, sunt minima voluptate,
                dolorum quaerat placeat nobis fugiat dignissimos totam
                accusantium ipsum cumque iure adipisci culpa aut. Veniam magnam
                cupiditate cum ea at fugiat sequi totam reprehenderit optio
                tempora voluptatem quaerat, laudantium placeat quam harum? Amet
                suscipit quibusdam laudantium maxime a provident animi, velit
                dolor distinctio.{" "}
              </div>
            </div>
            <div className="col-lg-4 px-4 ps-lg-0 mt-lg-2">
              <div
                className="wow fadeInUp bg-light p-3 border-success border-4 border-start position-sticky"
                data-wow-delay="0.5s"
                style={{ top: "7rem" }}
              >
                {/* <div class="border-start ps-4"> */}
                <p className="fs-5 fw-bold text-primary">Aparatur Desa</p>
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
                              to="assetdemo/img/personil/default.jpg"
                              data-lightbox="aparatur"
                            >
                              <i className="fa fa-eye" />
                            </Link>
                            <Link
                              className="btn btn-lg-square rounded-circle mx-2"
                              to="/struktur-pemerintahan/kepala-desa/muhammad-fulan,-s.kmz"
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
      {/* Features End */}

      <Footer />
    </>
  );
};

export default ProfilWilayah;
