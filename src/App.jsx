import { Route, Routes } from "react-router-dom";
import { Suspense, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";
import Blog from "./components/Blog/Blog";
import Download from "./components/Download/Download";
import StuckedSomewhere from "./components/StuckedSomewhere/StuckedSomewhere";
import About from "./components/About/About";
import Help from "./components/Help/Help";

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
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          <Route path="/DxWeb/" element={<Home />} />
          <Route path="/DxWeb/Team" element={<Team />} />
          <Route path="/DxWeb/Blog" element={<Blog />} />
          <Route path="/DxWeb/Download" element={<Download />} />
          <Route path="/DxWeb/About" element={<About />} />
          <Route path="/DxWeb/Help" element={<Help />} />
        </Routes>
      </Suspense>
      <StuckedSomewhere />
      <Footer />
    </>
  );
}

export default App;
