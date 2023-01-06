import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function contact() {
  return (
    <div>
      <Hero 
        heading="Contact" 
        message="Submit the form below for more work and quotes."
      />
      <Contact />
      <Footer />
    </div>
  );
}
