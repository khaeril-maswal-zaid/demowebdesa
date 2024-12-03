import DataDesaChart from "../Components/DataDesaChart";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const DataPendidikan = () => {
  const dataChart = [
    { name: "BELUM MASUK TK/KELOMPOK BERMAIN", y: 246 },
    { name: "SEDANG TK/KELOMPOK BERMAIN", y: 246 },
    { name: "TIDAK PERNAH SEKOLAH", y: 246 },
    { name: "TIDAK TAMAT SD/SEDERAJAT", y: 246 },
    { name: "SEDANG SLTP/SEDERAJAT", y: 246 },
    { name: "SEDANG SLTA/SEDERAJAT", y: 246 },
    { name: "SEDANG S-1/SEDERAJAT", y: 246 },
    { name: "TIDAK DAPAT MEMBACA DAN MENULIS HURUF LATIN", y: 246 },
    { name: "Doubel klik ki untuk edit", y: 246 },
  ];

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
              <a href="/data-desa/data-pendidikan">Data Pendidikan</a>
            </div>
          </div>
        </div>
        {/* Petunjuk URL Enad */}
      </section>
      {/* Features Start */}
      <section className="container-xxl py-3">
        <div className="container">
          <h1 className="display-5 text-primary">Data Pendidikan</h1>
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
                <td className="#">BELUM MASUK TK/KELOMPOK BERMAIN</td>
                <td className="text-center">123</td>
                <td className="text-center">5.56 %</td>
                <td className="text-center">123</td>
                <td className="text-center">5.56 %</td>
                <td className="text-center">246</td>
                <td className="text-center">11.11 %</td>
              </tr>
              <tr className="#">
                <td className="text-center">2</td>
                <td className="#">SEDANG TK/KELOMPOK BERMAIN</td>
                <td className="text-center">123</td>
                <td className="text-center">5.56 %</td>
                <td className="text-center">123</td>
                <td className="text-center">5.56 %</td>
                <td className="text-center">246</td>
                <td className="text-center">11.11 %</td>
              </tr>
              <tr className="#">
                <td className="text-center">3</td>
                <td className="#">TIDAK PERNAH SEKOLAH</td>
                <td className="text-center">123</td>
                <td className="text-center">5.56 %</td>
                <td className="text-center">123</td>
                <td className="text-center">5.56 %</td>
                <td className="text-center">246</td>
                <td className="text-center">11.11 %</td>
              </tr>
              <tr className="#">
                <td className="text-center">4</td>
                <td className="#">TIDAK TAMAT SD/SEDERAJAT</td>
                <td className="text-center">123</td>
                <td className="text-center">5.56 %</td>
                <td className="text-center">123</td>
                <td className="text-center">5.56 %</td>
                <td className="text-center">246</td>
                <td className="text-center">11.11 %</td>
              </tr>
              <tr className="#">
                <td className="text-center">5</td>
                <td className="#">SEDANG SLTP/SEDERAJAT</td>
                <td className="text-center">123</td>
                <td className="text-center">5.56 %</td>
                <td className="text-center">123</td>
                <td className="text-center">5.56 %</td>
                <td className="text-center">246</td>
                <td className="text-center">11.11 %</td>
              </tr>
              <tr className="#">
                <td className="text-center">6</td>
                <td className="#">SEDANG SLTA/SEDERAJAT</td>
                <td className="text-center">123</td>
                <td className="text-center">5.56 %</td>
                <td className="text-center">123</td>
                <td className="text-center">5.56 %</td>
                <td className="text-center">246</td>
                <td className="text-center">11.11 %</td>
              </tr>
              <tr className="#">
                <td className="text-center">7</td>
                <td className="#">SEDANG S-1/SEDERAJAT</td>
                <td className="text-center">123</td>
                <td className="text-center">5.56 %</td>
                <td className="text-center">123</td>
                <td className="text-center">5.56 %</td>
                <td className="text-center">246</td>
                <td className="text-center">11.11 %</td>
              </tr>
              <tr className="#">
                <td className="text-center">8</td>
                <td className="#">
                  TIDAK DAPAT MEMBACA DAN MENULIS HURUF LATIN
                </td>
                <td className="text-center">123</td>
                <td className="text-center">5.56 %</td>
                <td className="text-center">123</td>
                <td className="text-center">5.56 %</td>
                <td className="text-center">246</td>
                <td className="text-center">11.11 %</td>
              </tr>
              <tr className="#">
                <td className="text-center">9</td>
                <td className="#">Doubel klik ki untuk edit</td>
                <td className="text-center">123</td>
                <td className="text-center">5.56 %</td>
                <td className="text-center">123</td>
                <td className="text-center">5.56 %</td>
                <td className="text-center">246</td>
                <td className="text-center">11.11 %</td>
              </tr>
              <tr className="table-warning">
                <td className="text-center" colSpan={2}>
                  JUMLAH
                </td>
                <td className="text-center">1107</td>
                <td className="text-center">50.00 %</td>
                <td className="text-center">1107</td>
                <td className="text-center">50.00 %</td>
                <td className="text-center">2214</td>
                <td className="text-center">100 %</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-5">
            <DataDesaChart
              data={dataChart}
              title="Data Penduduk Berdasarkan Pendidikan"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DataPendidikan;
