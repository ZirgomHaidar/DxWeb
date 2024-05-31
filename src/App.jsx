import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";
import Blog from "./components/Blog/Blog";
import Download from "./components/Download/Download";

function App() {
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath !== "/portfolio/") {
      window.location.href = "/portfolio/";
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/Team" element={<Team />} />
        <Route path="/portfolio/Blog" element={<Blog />} />
        <Route path="/portfolio/Download" element={<Download />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
