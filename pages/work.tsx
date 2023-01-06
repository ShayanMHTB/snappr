import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

export default function work() {
  return (
    <>
      <Hero 
        heading="My Work" 
        message="This is some of my recent work traveling the world."
      />
      <Portfolio />
      <Footer />
    </>
  );
}
