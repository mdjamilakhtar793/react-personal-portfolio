import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Experiance from "./components/Experiance";
import Header, { HeaderPixel } from "./components/Header";
import Home from "./components/Home";
import Servises from "./components/Servises";
import Testimonial from "./components/Testimonial";
import Works from "./components/Works";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [raseo, setRaseo] = useState(window.innerWidth / window.innerHeight);

  useEffect(() => {
    const updateSize = () => {
      setRaseo(window.innerWidth / window.innerHeight);
    };
    window.addEventListener("UpdateRaseo", updateSize);
    return () => {
      window.removeEventListener("UpdateRaseo", updateSize);
    };
  }, [raseo]);
  return (
    <>
      <HeaderPixel menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Works />
      <Experiance />
      <Servises />
      <Testimonial />
      <Contact />
      <Toaster />
      <Footer />
    </>
  );
}

export default App;
