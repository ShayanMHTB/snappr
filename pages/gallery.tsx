import Hero from "../components/Hero";
import Instgram from "../components/Instagram";
import Footer from "../components/Footer";

export default function Gallery() {
  return (
    <>
      <Hero
        heading="My Gallery"
        message="Here is a collection of my favorite images."
      />
      <Instgram />
      <Footer />
    </>
  );
}
