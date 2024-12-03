import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Page404 from "./Pages/Page404";
import Home from "./Pages/Home";
import ProfilWilayah from "./Pages/ProfilWilayah";
import KeuanganDesa from "./Pages/KeuanganDesa";
import Galery from "./Pages/Galery";
import SejarahDesa from "./Pages/SejarahDesa";
import Bpd from "./Pages/Bpd";
import VisiMisi from "./Pages/VisiMisi";
import Struktur from "./Pages/Struktur";
import Lpm from "./Pages/Lpm";
import Pkk from "./Pages/Pkk";
import KarangTaruna from "./Pages/KarangTaruna";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Page404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/profil-wilayah" element={<ProfilWilayah />} />
        <Route path="/sejarah-desa" element={<SejarahDesa />} />
        <Route path="/galeri-desa" element={<Galery />} />

        <Route path="/badan-permusyawaratan-desa" element={<Bpd />} />
        <Route path="/visi-misi-desa" element={<VisiMisi />} />
        <Route path="/struktur-pemerintahan" element={<Struktur />} />

        <Route path="/lembaga-pemberdayaan-desa" element={<Lpm />} />
        <Route path="/pembinaan-kesejahteraan-keluarga" element={<Pkk />} />
        <Route path="/karang-taruna" element={<KarangTaruna />} />

        <Route path="/keuangan-dasa" element={<KeuanganDesa />} />
      </Routes>
    </Router>
  );
}

export default App;
