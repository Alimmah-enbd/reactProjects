import About from "./About";
import Age from "./Age";
import Devices from "./Devices";
import Download from "./Download";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "../Navbar";

function Allhome() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Devices />
      <Age />
      <Download />
      <Footer/>
    </>
  );
}

export default Allhome;
