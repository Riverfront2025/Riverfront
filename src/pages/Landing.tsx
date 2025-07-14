import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ListProperty from "../components/ListProperty";
import Nav from "../components/Nav";
import PropertyServices from "../components/Property";

function Landing() {
  return (
    <div>
      <Nav />
      <Hero />
      <PropertyServices />
      <ListProperty />
      <Footer />
    </div>
  );
}

export default Landing;
