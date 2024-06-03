import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import StuckedSomewhere from "./components/StuckedSomewhere/StuckedSomewhere";
import Loading from "./components/Loading/Loading";

const Home = lazy(() => import("./components/Home/Home"));
const Team = lazy(() => import("./components/Team/Team"));
const Blog = lazy(() => import("./components/Blog/Blog"));
const Download = lazy(() => import("./components/Download/Download"));
const About = lazy(() => import("./components/About/About"));
const Help = lazy(() => import("./components/Help/Help"));
const DevicePage = lazy(() => import("./components/DevicePage/DevicePage"));

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
          <Route path="/DxWeb/" element={<Home />} />
          <Route path="/DxWeb/Team" element={<Team />} />
          <Route path="/DxWeb/Blog" element={<Blog />} />
          <Route path="/DxWeb/Download" element={<Download />} />
          <Route path="/DxWeb/About" element={<About />} />
          <Route path="/DxWeb/Help" element={<Help />} />
          <Route path="/DxWeb/DevicePage" element={<DevicePage />} />
        </Routes>
        <StuckedSomewhere />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
