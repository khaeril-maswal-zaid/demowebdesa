import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Page404 = () => {
  return (
    <>
      <Navbar />

      {/* 404 Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-primary" />
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4">
                Maaf, halaman yang Anda cari tidak ada di situs web kami!
                Silahkan kembali ke beranda kami atau coba gunakan pencarian!
              </p>
              <a className="btn btn-primary py-3 px-4" href="/">
                Kembali Ke Beranda
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* 404 End */}

      <Footer />
    </>
  );
};

export default Page404;
