import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const DataAgama = () => {
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
              <span className="px-1">Statistik</span>
              <span className="px-1">/</span>
              <a href="/data-desa/data-agama">Data Agama</a>
            </div>
          </div>
        </div>
        {/* Petunjuk URL Enad */}
      </section>

      {/* Features Start */}
      <section className="container-xxl py-3">
        <div className="container">
          <h1 className="display-5 text-primary">Data Agama</h1>
          <p className="fs-4 d-md-block d-none fw-bold text-primary mb-5">
            Desa Wakanda Raya, Kecamatan Konoha Timur, Kabupaten Londong Raya
          </p>
          <p className="d-md-none d-block fw-bold text-primary mb-5">
            Desa Wakanda Raya, Kec. Konoha Timur, Kab. Londong Raya
          </p>
          <table className="table table-striped table-bordered">
            <thead>
              <tr className="text-center">
                <th scope="col" rowSpan={2} className="align-middle">
                  #
                </th>
                <th scope="col" rowSpan={2} className="align-middle">
                  Kelompok
                </th>
                <th scope="col" colSpan={2}>
                  Laki-laki
                </th>
                <th scope="col" colSpan={2}>
                  Perempuan
                </th>
                <th scope="col" colSpan={2}>
                  Jumlah
                </th>
              </tr>
              <tr className="text-center">
                <th scope="col">n</th>
                <th scope="col">%</th>
                <th scope="col">n</th>
                <th scope="col">%</th>
                <th scope="col">n</th>
                <th scope="col">%</th>
              </tr>
            </thead>
            <tbody>
              <tr className="#">
                <td className="text-center">1</td>
                <td className="#">ISLAM</td>
                <td className="text-center">123</td>
                <td className="text-center">10.00 %</td>
                <td className="text-center">123</td>
                <td className="text-center">10.00 %</td>
                <td className="text-center">246</td>
                <td className="text-center">20.00 %</td>
              </tr>
              <tr className="#">
                <td className="text-center">2</td>
                <td className="#">KRISTEN</td>
                <td className="text-center">123</td>
                <td className="text-center">10.00 %</td>
                <td className="text-center">123</td>
                <td className="text-center">10.00 %</td>
                <td className="text-center">246</td>
                <td className="text-center">20.00 %</td>
              </tr>
              <tr className="#">
                <td className="text-center">3</td>
                <td className="#">KATHOLIK</td>
                <td className="text-center">123</td>
                <td className="text-center">10.00 %</td>
                <td className="text-center">123</td>
                <td className="text-center">10.00 %</td>
                <td className="text-center">246</td>
                <td className="text-center">20.00 %</td>
              </tr>
              <tr className="#">
                <td className="text-center">4</td>
                <td className="#">HINDU</td>
                <td className="text-center">123</td>
                <td className="text-center">10.00 %</td>
                <td className="text-center">123</td>
                <td className="text-center">10.00 %</td>
                <td className="text-center">246</td>
                <td className="text-center">20.00 %</td>
              </tr>
              <tr className="#">
                <td className="text-center">5</td>
                <td className="#">Doubel klik ki untuk edit</td>
                <td className="text-center">123</td>
                <td className="text-center">10.00 %</td>
                <td className="text-center">123</td>
                <td className="text-center">10.00 %</td>
                <td className="text-center">246</td>
                <td className="text-center">20.00 %</td>
              </tr>
              <tr className="table-warning">
                <td className="text-center" colSpan={2}>
                  JUMLAH
                </td>
                <td className="text-center">615</td>
                <td className="text-center">50.00 %</td>
                <td className="text-center">615</td>
                <td className="text-center">50.00 %</td>
                <td className="text-center">1230</td>
                <td className="text-center">100 %</td>
              </tr>
            </tbody>
          </table>
          <figure className="highcharts-figure mt-5">
            <div id="container" />
          </figure>
          <div className="close"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DataAgama;
