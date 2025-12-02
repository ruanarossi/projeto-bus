import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SobreNos from "./components/SobreNos";
import Destinos from "./components/Destinos";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/destinos" element={<Destinos />} />
      </Routes>
    </Router>
  );
}
