import Footer from "../Components/Footer";
import IdmChart from "../Components/IdmChart";
import Navbar from "../Components/Navbar";

const Idm = () => {
  return (
    <>
      <Navbar />

      {/* Petunjuk URL Start */}
      <div className="container-xxl">
        <div className="container">
          <div className="alert alert-success py-2" role="alert">
            <a href="/">
              <i className="bi bi-house-door-fill" />
            </a>
            <span className="px-1">/</span>
            <span className="px-1">IDM Desa</span>
          </div>
        </div>
      </div>
      {/* Petunjuk URL Enad */}
      {/* Features Start */}
      <section className="container-xxl py-3">
        <div className="container">
          <h1 className="display-5 text-primary">IDM Desa Tahun 2024</h1>
          <p className="fs-4 d-md-block d-none fw-bold text-primary mb-5">
            Desa Wakanda Raya, Kecamatan Konoha Timur, Kabupaten Londong Raya
          </p>
          <p className="d-md-none d-block fw-bold text-primary mb-5">
            Desa Wakanda Raya, Kecamatan Konoha Timur, Kabupaten Londong Raya
          </p>
          <ul className="nav nav-tabs mb-5">
            <li className="nav-item">
              <a className="nav-link active" href="/status-idm/">
                2024
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/status-idm/2023">
                2023
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/status-idm/2022">
                2022
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/status-idm/2021">
                2021
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/status-idm/2020">
                2020
              </a>
            </li>
          </ul>
          {/* Isi Disini */}
          <div className="row mb-5 g-5">
            <div className="col-md-6 ">
              <div className="row">
                <div
                  className="col-sm-6 mb-3 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="card text-white bg-dark  mb-2 h-100">
                    <div className="card-header">BULO BULO</div>
                    <div className="card-body  position-relative me-2">
                      <h1 className="text-white mt-3">2024 </h1>
                      <i
                        className="bi bi-award-fill position-absolute bottom-0 end-0"
                        style={{ fontSize: "4em" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 mb-3 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="card text-white bg-primary  mb-2 h-100">
                    <div className="card-header">SKOR IDM TERKINI</div>
                    <div className="card-body  position-relative me-2">
                      <h1 className="text-white mt-3">0.8527 </h1>
                      <i
                        className="bi bi-graph-up position-absolute bottom-0 end-0"
                        style={{ fontSize: "4em" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 mb-3 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="card text-white bg-success  mb-2 h-100">
                    <div className="card-header">STATUS IDM</div>
                    <div className="card-body  position-relative me-2">
                      <h3 className="text-white mt-3 text-uppercase">
                        MANDIRI
                      </h3>
                      <i
                        className="bi bi-pin-angle-fill position-absolute bottom-0 end-0"
                        style={{ fontSize: "4em" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 mb-3 wow fadeInDown"
                  data-wow-delay="0.3s"
                >
                  <div className="card text-white bg-warning mb-2 h-100">
                    <div className="card-header">TARGET STATUS</div>
                    <div className="card-body position-relative me-2">
                      <h2 className="text-white mt-3">MANDIRI</h2>
                      <i
                        className="bi bi-clipboard-data position-absolute bottom-0 end-0"
                        style={{ fontSize: "4em" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 mb-3 wow fadeInDown"
                  data-wow-delay="0.5s"
                >
                  <div className="card text-white bg-danger mb-2 h-100">
                    <div className="card-header">SKOR MINIMAL</div>
                    <div className="card-body  position-relative me-2">
                      <h1 className="text-white mt-3">0.8156</h1>
                      <i
                        className="bi bi-calendar-event position-absolute bottom-0 end-0"
                        style={{ fontSize: "4em" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 mb-3 wow fadeInDown"
                  data-wow-delay="0.3s"
                >
                  <div className="card text-white bg-secondary mb-2 h-100">
                    <div className="card-header">PENAMBAHAN</div>
                    <div className="card-body position-relative me-2">
                      <h1 className="text-white mt-3">-0.0371</h1>
                      <i
                        className="bi bi-dash-circle-fill position-absolute bottom-0 end-0"
                        style={{ fontSize: "4em" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <IdmChart />
            </div>
          </div>
          <div className="overflow-auto">
            <table
              className="table table-striped table-bordered"
              style={{ fontSize: "75%" }}
            >
              <thead>
                <tr className="table-warning">
                  <th rowSpan={2} className="align-middle text-center">
                    No
                  </th>
                  <th rowSpan={2} className="align-middle text-center">
                    Indikator IDM
                  </th>
                  <th rowSpan={2} className="align-middle text-center">
                    Skor
                  </th>
                  <th rowSpan={2} className="align-middle text-center">
                    Keterangan
                  </th>
                  <th rowSpan={2} nowrap className="align-middle text-center">
                    Kegiatan Yang Dapat Dilakukan
                  </th>
                  <th rowSpan={2} nowrap className="align-middle text-center">
                    + Nilai
                  </th>
                  <th colSpan={6} className="text-center">
                    Yang Dapat Melaksanakan Kegiatan
                  </th>
                </tr>
                <tr className="table-warning">
                  <th>Pusat</th>
                  <th>Provensi</th>
                  <th>Kabupaten</th>
                  <th>Desa</th>
                  <th>CSR</th>
                  <th>Lainnya</th>
                </tr>
              </thead>
              <tbody>
                <tr className>
                  <td className="align-middle">1</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Akses Sarkes
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Waktu tempuh dari ≤ 30 Menit
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> Dinkes, PU </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">2</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Dokter
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jumlah dokter ≥ 1 orang
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DINKES </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">3</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Bidan
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jumlah bidan ≥ 1 orang
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DINKES </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">4</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Nakes Lain
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jumlah tenaga kesehatan lainnya ≥ 5 orang
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DINKES </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">5</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Tingkat Kepesertaan BPJS
                  </td>
                  <td className="align-middle text-center"> 3 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jumlah peserta BPJS/jumlah penduduk antara 0,26 s.d 0,5
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Fasilitasi kepesertaan BPJS warga Desa hingga &gt; 75%
                  </td>
                  <td className="align-middle text-center"> 0.00380952 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DINKES </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> BPJS </td>
                </tr>
                <tr className>
                  <td className="align-middle">6</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Akses Poskesdes
                  </td>
                  <td className="align-middle text-center"> 3 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jarak tempuh menuju Poskesdes = 1001 s.d 2000 Meter
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0.00380952 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DINKES </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">7</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Aktivitas Posyandu
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jumlah Posyandu aktif 1 bulan sekali/ Jumlah Posyandu &gt;
                    0,75
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DPMD </td>
                  <td className="align-middle"> DPMD, DINKES </td>
                  <td className="align-middle"> DD </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">8</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Akses SD/MI
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jarak tempuh menuju SD atau MI = 3000 Meter
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DISDIK, PU </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">9</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Akses SMP/MTS
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jarak tempuh menuju SMP atau MTs ≤ 6000 Meter
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DISDIK, PU </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">10</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Akses SMA/SMK
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jarak tempuh menuju SMU atau SMK ≤ 6000 Meter
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DISDIK </td>
                  <td className="align-middle"> PU </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">11</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Ketersediaan PAUD
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jumlah PAUD ≥ 1
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DISDIK </td>
                  <td className="align-middle"> DISDIK </td>
                  <td className="align-middle"> DD </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">12</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Ketersediaan PKBM/ Paket ABC
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jumlah PKBM atau Paket ABC ≥ 1
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DISDIK </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">13</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Ketersediaan Kursus
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jumlah Pusat Keterampilan atau Kursus ≥ 1
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> CSR </td>
                  <td className="align-middle"> Swasta, Perorangan </td>
                </tr>
                <tr className>
                  <td className="align-middle">14</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Ketersediaan Taman Baca/ Perpus Desa
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Taman Bacaan Masyarakat atau perpustakaan Desa tersedia
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"> Kemenperpus Arsip </td>
                  <td className="align-middle"> Dinas Perpus </td>
                  <td className="align-middle"> Dinas Perpus </td>
                  <td className="align-middle"> DD </td>
                  <td className="align-middle"> CSR </td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">15</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Kebiasaan Goryong
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Terdapat Kebiasaan Gotong Royong
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> Desa </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">16</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Frekuensi Goryong
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Frekuensi Gotong Royong &gt; 2
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> Desa </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">17</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Ketersediaan Ruang Publik
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Ruang Publik terdapat didesa
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> PU </td>
                  <td className="align-middle"> DD </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">18</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Kelompok OR
                  </td>
                  <td className="align-middle text-center"> 2 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jumlah kelompok kegiatan olahraga 2 s.d 3
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Penambahan Min 6 Kelp Olahraga
                  </td>
                  <td className="align-middle text-center"> 0.00571429 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DISPORA </td>
                  <td className="align-middle"> DISPORA </td>
                  <td className="align-middle"> Karang Taruna </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">19</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Kegiatan OR
                  </td>
                  <td className="align-middle text-center"> 2 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jumlah kegiatan olahraga 2 s.d 3
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Pembangunan Min 6 Lap Olahraga
                  </td>
                  <td className="align-middle text-center"> 0.00571429 </td>
                  <td className="align-middle"> Kemepora/ Kemendes </td>
                  <td className="align-middle"> DISPORA </td>
                  <td className="align-middle"> DISPORA </td>
                  <td className="align-middle"> DD </td>
                  <td className="align-middle"> CSR </td>
                  <td className="align-middle"> Perorangan </td>
                </tr>
                <tr className>
                  <td className="align-middle">20</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Keragaman Agama
                  </td>
                  <td className="align-middle text-center"> 1 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jumlah Jenis Agama di Desa terdapat 1
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Pendataan Jenis Agama Penduduk Desa
                  </td>
                  <td className="align-middle text-center"> 0.00761905 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> Desa </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">21</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Keragaman Bahasa
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jumlah Bahasa yang digunakan sehari-hari &gt; 1
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> Desa </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">22</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Keragaman Komunikasi
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Warga Desa terdiri dari Suku &gt; 1
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> Desa </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">23</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Poskamling
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Terdapat Pos Keamanan di Desa
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DD </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">24</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Siskamling
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Terdapat Sistem Keamanan Lingkungan warga di Desa
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> Desa </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">25</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Konflik
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Tidak terdapat atau tidak ada Konflik di Desa
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> Kesbangpol </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">26</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor PMKS
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jumlah PMKS tidak ada atau 0
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> Dinsos </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">27</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor SLB
                  </td>
                  <td className="align-middle text-center"> 3 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jumlah Skor SLB antara 4 s.d 5
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Penanganan SLB
                  </td>
                  <td className="align-middle text-center"> 0.00380952 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DIKNAS </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">28</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Akses Listrik
                  </td>
                  <td className="align-middle text-center"> 3 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    (Jumlah Keluarga Memakai listrik + non Listrik/Jumlah
                    keluarga memakai listrik) antara 0,6 s.d 0,79
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Fasilitasi Akses Listrik warga hingga &gt;90 % dari jumlah
                    KK
                  </td>
                  <td className="align-middle text-center"> 0.00380952 </td>
                  <td className="align-middle"> ESDM </td>
                  <td className="align-middle"> ESDM </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DD </td>
                  <td className="align-middle"> CSR </td>
                  <td className="align-middle"> Perorangan </td>
                </tr>
                <tr className>
                  <td className="align-middle">29</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Sinyal Tlp
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Sinyal telepon seluler di Desa Kuat
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"> Kominfo </td>
                  <td className="align-middle"> Diskominfo </td>
                  <td className="align-middle"> Diskominfo </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> Operator Selular </td>
                </tr>
                <tr className>
                  <td className="align-middle">30</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Internet Kantor Desa
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Terdapat fasilitas internet di kantor Desa
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"> Kominfo/ Kemendes </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> Desa </td>
                  <td className="align-middle"> CSR </td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">31</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Akses Internet Warga
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Terdapat Akses internet warga di Desa
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"> Kominfo </td>
                  <td className="align-middle"> Diskominfo </td>
                  <td className="align-middle"> Diskominfo </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> Operator Selular </td>
                </tr>
                <tr className>
                  <td className="align-middle">32</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Akses Jamban
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Warga Desa BAB di Jamban Sendiri
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DINSOS,DINKES </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> CSR </td>
                  <td className="align-middle"> Perorangan </td>
                </tr>
                <tr className>
                  <td className="align-middle">33</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Sampah
                  </td>
                  <td className="align-middle text-center"> 4 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Warga desa membuang sampah di Lubang atau di Bakar
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Pembangunan TPS danTPA Sampah
                  </td>
                  <td className="align-middle text-center"> 0.00190476 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DLH </td>
                  <td className="align-middle"> DLH, DKPP </td>
                  <td className="align-middle"> DD </td>
                  <td className="align-middle"> CSR </td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">34</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Air Minum
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Sumber air minum berasal dari PAM, Air Ledeng tanpa Meteran
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"> PAMSIMAS, PU </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> PU </td>
                  <td className="align-middle"> DD </td>
                  <td className="align-middle"> CSR </td>
                  <td className="align-middle"> PDAM </td>
                </tr>
                <tr className>
                  <td className="align-middle">35</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Air Mandi &amp; Cuci
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Sumber air mandi dan cuci berasal dari PAM, Air Ledeng tanpa
                    Meteran
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"> PAMSIMAS, PU </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> PU </td>
                  <td className="align-middle"> DD </td>
                  <td className="align-middle"> CSR </td>
                  <td className="align-middle"> PDAM </td>
                </tr>
                <tr className="table-primary">
                  <td className="align-middle" />
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    IKS 2024
                  </td>
                  <td className="align-middle text-center">0.89142857142857</td>
                  <td className="align-middle" style={{ minWidth: 200 }}></td>
                  <td className="align-middle" style={{ minWidth: 200 }}></td>
                  <td className="align-middle text-center"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">1</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Keragaman Produksi
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jumlah Industri Mikro/ Jumlah KK ≥ 0,004
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DISPERINDAKOP UKM </td>
                  <td className="align-middle"> DISPERINDAKOP UKM </td>
                  <td className="align-middle"> DD </td>
                  <td className="align-middle"> CSR </td>
                  <td className="align-middle"> Perorangan </td>
                </tr>
                <tr className>
                  <td className="align-middle">2</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Pertokoan
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jarak ke kelompok pertokoan terdekat ≤ 7 KM
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DISPERINDAKOP UKM </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> Perorangan, Swasta </td>
                </tr>
                <tr className>
                  <td className="align-middle">3</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Pasar
                  </td>
                  <td className="align-middle text-center"> 1 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    (Total KK/jumlah pasar(permanen)) = 0
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Pembangunan Pasar Permanen
                  </td>
                  <td className="align-middle text-center"> 0.02222222 </td>
                  <td className="align-middle"> Kemenperind, Kemendes </td>
                  <td className="align-middle"> DISPERINDAKOP UKM </td>
                  <td className="align-middle"> DISPERINDAKOP UKM </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">4</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Toko/ Warung Kelontong
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jumlah Toko dan warung kelontong &gt; 3
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DD </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> Perorangan </td>
                </tr>
                <tr className>
                  <td className="align-middle">5</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Kedai &amp; Penginapan
                  </td>
                  <td className="align-middle text-center"> 3 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jumlah Kedai dan Penginapan = 1
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Pembangunan 1 Unit Penginapan
                  </td>
                  <td className="align-middle text-center"> 0.01111111 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> Dinas Pariwisata </td>
                  <td className="align-middle"> Dinas Pariwisata </td>
                  <td className="align-middle"> DD </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> Perorangan, Swasta </td>
                </tr>
                <tr className>
                  <td className="align-middle">6</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor POS &amp; Logistik
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jumlah pos dan jasa logistik &gt; 1
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> BUMDES </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> Kantor Pos, Swasta </td>
                </tr>
                <tr className>
                  <td className="align-middle">7</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Bank &amp; BPR
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jumlah bank dan BPR = 0
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Fasilitasi Pembangunan Bank Pemerintah, Swasta &amp;/ BPR
                  </td>
                  <td className="align-middle text-center"> 0.02777778 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> Perbankan </td>
                </tr>
                <tr className>
                  <td className="align-middle">8</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Kredit
                  </td>
                  <td className="align-middle text-center"> 3 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jumlah fasilitas kredit = 2
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Penambahan 2 jenis Fasilitas Kredit (KUR/KKPE/KUK/Kredit
                    lainnya)(Identifikasi kekurangan akses kredit)
                  </td>
                  <td className="align-middle text-center"> 0.01111111 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DISPERINDAKOP UKM </td>
                  <td className="align-middle"> BUMDES/ Koperasi </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> Bank, Swasta </td>
                </tr>
                <tr className>
                  <td className="align-middle">9</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Lembaga Ekonomi
                  </td>
                  <td className="align-middle text-center"> 3 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jumlah koperasi aktif dan BUMDESA = 1
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Pembangunan 1 unit Koperasi / BUMDES (Identifikasi yang
                    tidak ada di desa)
                  </td>
                  <td className="align-middle text-center"> 0.01111111 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DISPERINDAKOP UKM </td>
                  <td className="align-middle"> Desa </td>
                  <td className="align-middle"> CSR </td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">10</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Moda Transportasi Umum
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Transportasi Umum ada dengan trayek tetap
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DISHUB </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">11</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Keterbukaan Wilayah
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jalan di Desa dilalui oleh kendaraan bermotor roda empat
                    atau lebih Sepanjang Tahun
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> PU </td>
                  <td className="align-middle"> DD </td>
                  <td className="align-middle"> CSR </td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">12</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Kualitas Jalan
                  </td>
                  <td className="align-middle text-center"> 4 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jenis permukaan jalan desa Diperkeras (kerikil, batu dan
                    lain-lain)
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Peningkatan Kualitas Jalan desa (Aspal/Beton)
                  </td>
                  <td className="align-middle text-center"> 0.00555556 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> PU </td>
                  <td className="align-middle"> DD </td>
                  <td className="align-middle"> CSR </td>
                  <td className="align-middle"></td>
                </tr>
                <tr className="table-primary">
                  <td className="align-middle" />
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    IKE 2024
                  </td>
                  <td className="align-middle text-center">0.73333333333333</td>
                  <td className="align-middle" style={{ minWidth: 200 }}></td>
                  <td className="align-middle" style={{ minWidth: 200 }}></td>
                  <td className="align-middle text-center"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">1</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Kualitas Lingkungan
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Pencemaran (air, udara, tanah, limbah disungai) di desa
                    [jumlah pencemaran/4] = 0
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DLH </td>
                  <td className="align-middle"> DLH, DINKES </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">2</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Rawan Bencana
                  </td>
                  <td className="align-middle text-center"> 5 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Jenis bencana (longsor, banjir, kebakaran hutan) jenis
                    bencana di desa = 0
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    -
                  </td>
                  <td className="align-middle text-center"> 0 </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"> DISHUT/KPH, BPDB </td>
                  <td className="align-middle"> BPBD </td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className>
                  <td className="align-middle">3</td>
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    Skor Tanggap Bencana
                  </td>
                  <td className="align-middle text-center"> 4 </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Fasilitas mitigasi/tanggap bencana (peringatan dini bencana
                    alam, peringatan dini tsunami, perlengkapan keselamatan,
                    jalur evakuasi) jumlah fasilitas mitigasi / tanggap bencana
                    = 2
                  </td>
                  <td className="align-middle" style={{ minWidth: 200 }}>
                    Pembangunan/Pengadaan 1 Fasilitas Mitigasi Bencana Sesuai
                    karakteristik wilayah (Kebutuhan sesuai hasil identifikasi
                    kerawanan/potensi bencana)
                  </td>
                  <td className="align-middle text-center"> 0.02222222 </td>
                  <td className="align-middle"> BNPB, Kemendes </td>
                  <td className="align-middle"> DISHUT/KPH, BPDB, DINSOS </td>
                  <td className="align-middle"> DPBD, DINSOS </td>
                  <td className="align-middle"> DD </td>
                  <td className="align-middle"> CSR </td>
                  <td className="align-middle"></td>
                </tr>
                <tr className="table-primary">
                  <td className="align-middle" />
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    IKL 2024
                  </td>
                  <td className="align-middle text-center">0.93333333333333</td>
                  <td className="align-middle" style={{ minWidth: 200 }}></td>
                  <td className="align-middle" style={{ minWidth: 200 }}></td>
                  <td className="align-middle text-center"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className="table-primary">
                  <td className="align-middle" />
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    IDM 2024
                  </td>
                  <td className="align-middle text-center">0.85269841269841</td>
                  <td className="align-middle" style={{ minWidth: 200 }}></td>
                  <td className="align-middle" style={{ minWidth: 200 }}></td>
                  <td className="align-middle text-center"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
                <tr className="table-primary">
                  <td className="align-middle" />
                  <td className="align-middle" style={{ minWidth: 170 }}>
                    STATUS IDM 2024
                  </td>
                  <td className="align-middle text-center"> Mandiri </td>
                  <td className="align-middle" style={{ minWidth: 200 }}></td>
                  <td className="align-middle" style={{ minWidth: 200 }}></td>
                  <td className="align-middle text-center"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                  <td className="align-middle"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Idm;
