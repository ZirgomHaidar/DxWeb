import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/Team" element={<Team />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
