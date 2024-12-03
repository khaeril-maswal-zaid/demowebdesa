import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const DataWilayah = () => {
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
              <a href="/data-desa/data-wilayah">Data Wilayah</a>
            </div>
          </div>
        </div>
        {/* Petunjuk URL Enad */}
      </section>

      {/* Features Start */}
      <section className="container-xxl py-3">
        <div className="container">
          <h1 className="display-5 text-primary">Data Wilayah</h1>
          <p className="fs-4 d-md-block d-none fw-bold text-primary mb-5">
            Desa Wakanda Raya, Kecamatan Konoha Timur, Kabupaten Londong Raya
          </p>
          <p className="d-md-none d-block fw-bold text-primary mb-5">
            Desa Wakanda Raya, Kec. Konoha Timur, Kab. Londong Raya
          </p>
          <table className="table table-striped table-bordered">
            <thead>
              <tr className="text-center">
                <th scope="col">#</th>
                <th scope="col" colSpan={3}>
                  Wilayah/Ketua
                </th>
                <th scope="col">KK</th>
                <th scope="col">L</th>
                <th scope="col">P</th>
                <th scope="col">L+P</th>
              </tr>
            </thead>
            <tbody>
              <tr className="#">
                <th
                  className="text-center align-middle"
                  scope="row"
                  rowSpan={10}
                >
                  1
                </th>
                <td colSpan={3} className="ps-md-5 fw-bold">
                  Dusun Wakanda Timur
                </td>
                <td className="fw-bold text-center">738</td>
                <td className="fw-bold text-center">738</td>
                <td className="fw-bold text-center">738</td>
                <td className="fw-bold text-center">1476</td>
              </tr>
              <tr className="#">
                <td className="text-center align-middle" rowSpan={3}>
                  1
                </td>
                <td className="ps-md-4 fw-bold" colSpan={2}>
                  RW 001
                </td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">492</td>
              </tr>
              <tr className="#">
                <td className="text-center">1</td>
                <td className="#">RT 001</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">246 </td>
              </tr>
              <tr className="#">
                <td className="text-center">2</td>
                <td className="#">RT 002</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">246 </td>
              </tr>
              <tr className="#">
                <td className="text-center align-middle" rowSpan={3}>
                  2
                </td>
                <td className="ps-md-4 fw-bold" colSpan={2}>
                  RW 002
                </td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">492</td>
              </tr>
              <tr className="#">
                <td className="text-center">1</td>
                <td className="#">RT 003</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">246 </td>
              </tr>
              <tr className="#">
                <td className="text-center">2</td>
                <td className="#">RT 004</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">246 </td>
              </tr>
              <tr className="#">
                <td className="text-center align-middle" rowSpan={3}>
                  3
                </td>
                <td className="ps-md-4 fw-bold" colSpan={2}>
                  RW 003
                </td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">492</td>
              </tr>
              <tr className="#">
                <td className="text-center">1</td>
                <td className="#">RT 005</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">246 </td>
              </tr>
              <tr className="#">
                <td className="text-center">2</td>
                <td className="#">RT 006</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">246 </td>
              </tr>
              <tr className="#">
                <th
                  className="text-center align-middle"
                  scope="row"
                  rowSpan={10}
                >
                  2
                </th>
                <td colSpan={3} className="ps-md-5 fw-bold">
                  Dusun Wakanda Barat
                </td>
                <td className="fw-bold text-center">738</td>
                <td className="fw-bold text-center">738</td>
                <td className="fw-bold text-center">738</td>
                <td className="fw-bold text-center">1476</td>
              </tr>
              <tr className="#">
                <td className="text-center align-middle" rowSpan={3}>
                  1
                </td>
                <td className="ps-md-4 fw-bold" colSpan={2}>
                  RW 001
                </td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">492</td>
              </tr>
              <tr className="#">
                <td className="text-center">1</td>
                <td className="#">RT 001</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">246 </td>
              </tr>
              <tr className="#">
                <td className="text-center">2</td>
                <td className="#">RT 002</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">246 </td>
              </tr>
              <tr className="#">
                <td className="text-center align-middle" rowSpan={3}>
                  2
                </td>
                <td className="ps-md-4 fw-bold" colSpan={2}>
                  RW 002
                </td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">492</td>
              </tr>
              <tr className="#">
                <td className="text-center">1</td>
                <td className="#">RT 003</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">246 </td>
              </tr>
              <tr className="#">
                <td className="text-center">2</td>
                <td className="#">RT 004</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">246 </td>
              </tr>
              <tr className="#">
                <td className="text-center align-middle" rowSpan={3}>
                  3
                </td>
                <td className="ps-md-4 fw-bold" colSpan={2}>
                  RW 003
                </td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">492</td>
              </tr>
              <tr className="#">
                <td className="text-center">1</td>
                <td className="#">RT 005</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">246 </td>
              </tr>
              <tr className="#">
                <td className="text-center">2</td>
                <td className="#">RT 006</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">246 </td>
              </tr>
              <tr className="#">
                <th
                  className="text-center align-middle"
                  scope="row"
                  rowSpan={9}
                >
                  3
                </th>
                <td colSpan={3} className="ps-md-5 fw-bold">
                  Dusun Wakanda Tengah
                </td>
                <td className="fw-bold text-center">615</td>
                <td className="fw-bold text-center">615</td>
                <td className="fw-bold text-center">615</td>
                <td className="fw-bold text-center">1230</td>
              </tr>
              <tr className="#">
                <td className="text-center align-middle" rowSpan={2}>
                  1
                </td>
                <td className="ps-md-4 fw-bold" colSpan={2}>
                  RW 001
                </td>
                <td className="fw-bold text-center">123</td>
                <td className="fw-bold text-center">123</td>
                <td className="fw-bold text-center">123</td>
                <td className="fw-bold text-center">246</td>
              </tr>
              <tr className="#">
                <td className="text-center">1</td>
                <td className="#">RT 002</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">246 </td>
              </tr>
              <tr className="#">
                <td className="text-center align-middle" rowSpan={3}>
                  2
                </td>
                <td className="ps-md-4 fw-bold" colSpan={2}>
                  RW 002
                </td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">492</td>
              </tr>
              <tr className="#">
                <td className="text-center">1</td>
                <td className="#">RT 003</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">246 </td>
              </tr>
              <tr className="#">
                <td className="text-center">2</td>
                <td className="#">RT 004</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">246 </td>
              </tr>
              <tr className="#">
                <td className="text-center align-middle" rowSpan={3}>
                  3
                </td>
                <td className="ps-md-4 fw-bold" colSpan={2}>
                  RW 003
                </td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">246</td>
                <td className="fw-bold text-center">492</td>
              </tr>
              <tr className="#">
                <td className="text-center">1</td>
                <td className="#">RT 005</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">246 </td>
              </tr>
              <tr className="#">
                <td className="text-center">2</td>
                <td className="#">RT 006</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">123</td>
                <td className="text-center">246 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DataWilayah;
