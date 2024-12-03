import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Sdgs = () => {
  const Options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Skor 18 Goals SDGs Desa",
    },
    subtitle: {
      text: "Desa Wakanda Raya, Kec. Konoha Timur, Kab. Londong Raya",
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Skor Nilai",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Skor Nilai: <b>{point.y:.1f}</b>",
    },
    series: [
      {
        name: "Population",
        // colors: [
        //   '#9b20d9', '#9215ac', '#861ec9', '#7a17e6', '#7010f9', '#691af3',
        //   '#6225ed', '#5b30e7', '#533be1', '#4c46db', '#4551d5', '#3e5ccf',
        //   '#3667c9', '#2f72c3', '#277dbd', '#1f88b7', '#1693b1', '#0a9eaa',
        //   '#03c69b', '#00f194'
        // ],
        colorByPoint: true,
        groupPadding: 0,
        data: [
          ["Desa Tanpa Kemiskinan", 46.98],
          ["Desa Tanpa Kelaparan", 49.54],
          ["Desa Sehat dan Sejahtera", 60.11],
          ["Pendidikan Desa Berkualitas", 23.31],
          ["Keterlibatan Perempuan Desa", 42.11],
          ["Desa Layak Air Bersih dan Sanitasi", 72.16],
          ["Desa Berenergi Bersih dan Terbarukan", 99.25],
          ["Pertumbuhan Ekonomi Desa Merata", 31.74],
          ["Infrastruktur dan Inovasi Desa Sesuai Kebutuhan", 0],
          ["Desa Tanpa Kesenjangan", 25.85],
          ["Kawasan Pemukiman Desa Aman dan Nyaman", 79.35],
          ["Konsumsi dan Produksi Desa Sadar Lingkungan", 0],
          ["Desa Tanggap Perubahan Iklim", 0],
          ["Desa Peduli Lingkungan Laut", 0],
          ["Desa Peduli Lingkungan Darat", 0],
          ["Desa Damai Berkeadilan", 49.46],
          ["Kemitraan Untuk Pembangunan Desa", 0],
          ["Kelembagaan Desa Dinamis dan Budaya Desa Adaptif", 0],
        ],
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "#FFFFFF",
          align: "right",
          format: "{point.y:.1f}", // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <section
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
      </section>

      {/* Petunjuk URL Start */}
      <section className="container-xxl">
        <div className="container">
          <div className="alert alert-success py-2" role="alert">
            <a href="/">
              <i className="bi bi-house-door-fill" />
            </a>
            <span className="px-1">/</span>
            <span className="px-1">SDGS Desa</span>
          </div>
        </div>
      </section>
      {/* Petunjuk URL Enad */}

      {/* Features Start */}
      <section className="container-xxl py-3">
        <div className="container">
          <h1 className="display-5 text-primary">SDGS Desa Tahun 2024</h1>
          <p className="fs-4 d-md-block d-none fw-bold text-primary mb-5">
            Desa Wakanda Raya, Kecamatan Konoha Timur, Kabupaten Londong Raya
          </p>
          <p className="d-md-none d-block fw-bold text-primary mb-5">
            Desa Wakanda Raya, Kecamatan Konoha Timur, Kabupaten Londong Raya
          </p>
          <div
            className="text-center mx-auto wow fadeInUp pt-lg-5 pb-lg-3"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <h1 className="display-5">Skor SDGs Desa</h1>
            <h2 className="mb-5">32.21</h2>
          </div>
          <div className="row g-5">
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-1.jpg"
                  className="card-img-top"
                  alt="Desa Tanpa Kemiskinan"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">46.98</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-2.jpg"
                  className="card-img-top"
                  alt="Desa Tanpa Kelaparan"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">49.54</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-3.jpg"
                  className="card-img-top"
                  alt="Desa Sehat dan Sejahtera"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">60.11</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-4.jpg"
                  className="card-img-top"
                  alt="Pendidikan Desa Berkualitas"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">23.31</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-5.jpg"
                  className="card-img-top"
                  alt="Keterlibatan Perempuan Desa"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">42.11</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-6.jpg"
                  className="card-img-top"
                  alt="Desa Layak Air Bersih dan Sanitasi"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">72.16</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-7.jpg"
                  className="card-img-top"
                  alt="Desa Berenergi Bersih dan Terbarukan"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">99.25</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-8.jpg"
                  className="card-img-top"
                  alt="Pertumbuhan Ekonomi Desa Merata"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">31.74</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-9.jpg"
                  className="card-img-top"
                  alt="Infrastruktur dan Inovasi Desa Sesuai Kebutuhan"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">0</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-10.jpg"
                  className="card-img-top"
                  alt="Desa Tanpa Kesenjangan"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">25.85</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-11.jpg"
                  className="card-img-top"
                  alt="Kawasan Pemukiman Desa Aman dan Nyaman"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">79.35</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-12.jpg"
                  className="card-img-top"
                  alt="Konsumsi dan Produksi Desa Sadar Lingkungan"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">0</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-13.jpg"
                  className="card-img-top"
                  alt="Desa Tanggap Perubahan Iklim"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">0</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-14.jpg"
                  className="card-img-top"
                  alt="Desa Peduli Lingkungan Laut"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">0</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-15.jpg"
                  className="card-img-top"
                  alt="Desa Peduli Lingkungan Darat"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">0</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-16.jpg"
                  className="card-img-top"
                  alt="Desa Damai Berkeadilan"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">49.46</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-17.jpg"
                  className="card-img-top"
                  alt="Kemitraan Untuk Pembangunan Desa"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">0</h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card mb-3 shadow bg-light border border-success rounded-3">
                <img
                  src="assetdemo/img/sdgs/skor-sdgs-18.jpg"
                  className="card-img-top"
                  alt="Kelembagaan Desa Dinamis dan Budaya Desa Adaptif"
                />
                <div className="card-body text-center">
                  <p className="card-text mb-2">Skor Nilai</p>
                  <h4 className="card-title">0</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <HighchartsReact highcharts={Highcharts} options={Options} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Sdgs;
