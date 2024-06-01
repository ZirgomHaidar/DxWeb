import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";
import Blog from "./components/Blog/Blog";
import Download from "./components/Download/Download";
import StuckedSomewhere from "./components/StuckedSomewhere/StuckedSomewhere";

function App() {
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath !== "/DxWeb/") {
      window.location.href = "/DxWeb/";
    }
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/DxWeb/" element={<Home />} />
        <Route path="/DxWeb/Team" element={<Team />} />
        <Route path="/DxWeb/Blog" element={<Blog />} />
        <Route path="/DxWeb/Download" element={<Download />} />
      </Routes>
      <StuckedSomewhere />
      <Footer />
    </>
  );
}

export default App;
