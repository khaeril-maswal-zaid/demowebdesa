import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const KeuanganDesa = () => {
  return (
    <>
      <Navbar />

      <div
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
      </div>
      {/* Petunjuk URL Start */}
      <div className="container-xxl">
        <div className="container">
          <div className="alert alert-success py-2" role="alert">
            <Link to="">
              <i className="bi bi-house-door-fill" />
            </Link>
            <span className="px-1">/</span>
            <span className="px-1">Keuangan Desa</span>
          </div>
        </div>
      </div>
      {/* Petunjuk URL Enad */}
      {/* Features Start */}
      <section className="container-xxl py-3">
        <div className="container">
          <h1 className="display-5 text-primary">Keuangan Desa</h1>
          <p className="fs-4 d-md-block d-none fw-bold text-primary mb-5">
            Desa Wakanda Raya, Kecamatan Konoha Timur, Kabupaten Londong Raya
          </p>
          <p className="d-md-none d-block fw-bold text-primary mb-5">
            Desa Wakanda Raya, Kecamatan Konoha Timur, Kabupaten Londong Raya
          </p>
          <ul className="nav nav-tabs mb-5">
            <li className="nav-item">
              <Link className="nav-link active" to="keuangan-dasa/2024">
                2024
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="keuangan-dasa/2023">
                2023
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="keuangan-dasa/2022">
                2022
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="keuangan-dasa/2021">
                2021
              </Link>
            </li>
          </ul>
          <div className="g-5 mt-4">
            <div className="card border-primary mb-3">
              <div className="card-header bg-primary text-white">
                PENDAPATAN DESA
              </div>
              <div className="card-body overflow-auto">
                <h6 className="card-title">Transfer</h6>
                <table
                  style={{ fontSize: "80% !important" }}
                  className="table table-striped table-bordered mb-4"
                >
                  <thead>
                    <tr>
                      <th
                        className="text-center"
                        scope="col"
                        style={{ width: 122 }}
                      >
                        #
                      </th>
                      <th
                        className="text-center"
                        scope="col"
                        style={{ width: 550 }}
                      >
                        Uraian
                      </th>
                      <th className="text-center" scope="col">
                        Angaran (Rp)
                      </th>
                      <th className="text-center" scope="col">
                        Realisasi (Rp)
                      </th>
                      <th className="text-center" scope="col">
                        Lebih/Kurang (Rp)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="text-center" scope="row">
                        4.2.1.01
                      </th>
                      <td>Dana Desa</td>
                      <td className="text-center">1.234.567</td>
                      <td className="text-center">1.234.567</td>
                      <td className="text-center">0</td>
                    </tr>
                    <tr>
                      <th className="text-center" scope="row">
                        4.2.2.01
                      </th>
                      <td>
                        Bagian dari Hasil Pajak dan Retribusi Daerah
                        Kabupaten/kota
                      </td>
                      <td className="text-center">1.234.567</td>
                      <td className="text-center">1.234.567</td>
                      <td className="text-center">0</td>
                    </tr>
                    <tr>
                      <th className="text-center" scope="row">
                        4.2.3.01
                      </th>
                      <td>Alokasi Dana Desa</td>
                      <td className="text-center">1.234.567</td>
                      <td className="text-center">1.234.567</td>
                      <td className="text-center">0</td>
                    </tr>
                  </tbody>
                </table>
                <h6 className="card-title">Belanja Pegawai</h6>
                <table
                  style={{ fontSize: "80% !important" }}
                  className="table table-striped table-bordered mb-4"
                >
                  <thead>
                    <tr>
                      <th
                        className="text-center"
                        scope="col"
                        style={{ width: 122 }}
                      >
                        #
                      </th>
                      <th
                        className="text-center"
                        scope="col"
                        style={{ width: 550 }}
                      >
                        Uraian
                      </th>
                      <th className="text-center" scope="col">
                        Angaran (Rp)
                      </th>
                      <th className="text-center" scope="col">
                        Realisasi (Rp)
                      </th>
                      <th className="text-center" scope="col">
                        Lebih/Kurang (Rp)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="text-center" scope="row">
                        4.2.4.01
                      </th>
                      <td>Bantuan Keuangan dari APBD Provinsi</td>
                      <td className="text-center">1.234.567</td>
                      <td className="text-center">1.234.567</td>
                      <td className="text-center">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card border-primary mb-3">
              <div className="card-header bg-primary text-white">
                BELANJA DESA
              </div>
              <div className="card-body overflow-auto">
                <h6 className="card-title">Belanja Pegawai</h6>
                <table
                  style={{ fontSize: "80% !important" }}
                  className="table table-striped table-bordered mb-4"
                >
                  <thead>
                    <tr>
                      <th
                        className="text-center"
                        scope="col"
                        style={{ width: 122 }}
                      >
                        #
                      </th>
                      <th
                        className="text-center"
                        scope="col"
                        style={{ width: 550 }}
                      >
                        Uraian
                      </th>
                      <th className="text-center" scope="col">
                        Angaran (Rp)
                      </th>
                      <th className="text-center" scope="col">
                        Realisasi (Rp)
                      </th>
                      <th className="text-center" scope="col">
                        Lebih/Kurang (Rp)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="text-center" scope="row">
                        5.1.1.01
                      </th>
                      <td>Penghasilan Tetap Kepala Desa</td>
                      <td className="text-center">1.234.567</td>
                      <td className="text-center">1.234.567</td>
                      <td className="text-center">0</td>
                    </tr>
                    <tr>
                      <th className="text-center" scope="row">
                        5.1.1.02
                      </th>
                      <td>Tunjangan Kepala Desa</td>
                      <td className="text-center">1.234.567</td>
                      <td className="text-center">1.234.567</td>
                      <td className="text-center">0</td>
                    </tr>
                  </tbody>
                </table>
                <h6 className="card-title">Belanja Barang dan Jasa</h6>
                <table
                  style={{ fontSize: "80% !important" }}
                  className="table table-striped table-bordered mb-4"
                >
                  <thead>
                    <tr>
                      <th
                        className="text-center"
                        scope="col"
                        style={{ width: 122 }}
                      >
                        #
                      </th>
                      <th
                        className="text-center"
                        scope="col"
                        style={{ width: 550 }}
                      >
                        Uraian
                      </th>
                      <th className="text-center" scope="col">
                        Angaran (Rp)
                      </th>
                      <th className="text-center" scope="col">
                        Realisasi (Rp)
                      </th>
                      <th className="text-center" scope="col">
                        Lebih/Kurang (Rp)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="text-center" scope="row">
                        5.1.2.01
                      </th>
                      <td>Penghasilan Tetap Perangkat Desa</td>
                      <td className="text-center">1.234.567</td>
                      <td className="text-center">1.234.567</td>
                      <td className="text-center">0</td>
                    </tr>
                    <tr>
                      <th className="text-center" scope="row">
                        5.1.2.02
                      </th>
                      <td>Tunjangan Perangkat Desa</td>
                      <td className="text-center">1.234.567</td>
                      <td className="text-center">1.234.567</td>
                      <td className="text-center">0</td>
                    </tr>
                    <tr>
                      <th className="text-center" scope="row">
                        5.1.3.01
                      </th>
                      <td>Jaminan Kesehatan Kepala Desa</td>
                      <td className="text-center">1.234.567</td>
                      <td className="text-center">1.234.567</td>
                      <td className="text-center">0</td>
                    </tr>
                    <tr>
                      <th className="text-center" scope="row">
                        5.1.3.02
                      </th>
                      <td>Jaminan Kesehatan Perangkat Desa</td>
                      <td className="text-center">1.234.567</td>
                      <td className="text-center">1.234.567</td>
                      <td className="text-center">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default KeuanganDesa;
