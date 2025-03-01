import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutOutsourcing from "./components/AboutOutsourcing";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";
import FaqSection from "./components/FaqSection";
import FooterWithContact from "./components/FooterWithContact";

<link rel="icon" href="/favicon.ico" sizes="any" />;

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <AboutOutsourcing />
      <FaqSection />
      <FooterWithContact />
    </div>
  );
}
