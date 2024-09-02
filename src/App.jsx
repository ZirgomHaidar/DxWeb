import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import StuckedSomewhere from "./components/StuckedSomewhere/StuckedSomewhere";
import Loading from "./components/Loading/Loading";
import Home from "./components/Home/Home";
import Team from "./components/Team/Team";
import Blog from "./components/Blog/Blog";
import Download from "./components/Download/Download";
import About from "./components/About/About";
import Help from "./components/Help/Help";
import DevicePage from "./components/DevicePage/DevicePage";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Download" element={<Download />} />
          <Route path="/About" element={<About />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/DevicePage" element={<DevicePage />} />
        </Routes>
        <StuckedSomewhere />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
