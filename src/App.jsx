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
import DataWilayah from "./Pages/DataWilayah";
import DataAgama from "./Pages/DataAgama";
import DataAsuransi from "./Pages/DataAsuransi";
import DataPerkawinan from "./Pages/DataPerkawinan";
import DataPendidikan from "./Pages/DataPendidikan";
import DataPekerjaan from "./Pages/DataPekerjaan";
import Kontak from "./Pages/Kontak";
import Aduan from "./Pages/Aduan";
import Sdgs from "./Pages/Sdgs";
import Idm from "./Pages/Idm";

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

        <Route path="/data-desa/data-wilayah" element={<DataWilayah />} />
        <Route path="/data-desa/data-agama" element={<DataAgama />} />
        <Route
          path="/data-desa/data-asuransi-kesehatan"
          element={<DataAsuransi />}
        />
        <Route
          path="/data-desa/data-status-perkawinan"
          element={<DataPerkawinan />}
        />
        <Route path="/data-desa/data-pendidikan" element={<DataPendidikan />} />
        <Route path="/data-desa/data-pekerjaan" element={<DataPekerjaan />} />

        <Route path="/kontak-desa" element={<Kontak />} />
        <Route path="/layanan-pengaduan" element={<Aduan />} />

        <Route path="/keuangan-dasa" element={<KeuanganDesa />} />
        <Route path="/status-idm" element={<Idm />} />
        <Route path="/sdgs-desa" element={<Sdgs />} />
      </Routes>
    </Router>
  );
}

export default App;
