import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
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
