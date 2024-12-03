import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Page404 from "./Pages/Page404";
import Home from "./Pages/Home";
import ProfilWilayah from "./Pages/ProfilWilayah";
import KeuanganDesa from "./Pages/KeuanganDesa";
import Galery from "./Pages/Galery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Page404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/profil-wilayah" element={<ProfilWilayah />} />
        <Route path="/galeri-desa" element={<Galery />} />
        <Route path="/keuangan-dasa" element={<KeuanganDesa />} />
      </Routes>
    </Router>
  );
}

export default App;
