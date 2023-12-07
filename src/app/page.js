import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Reviews from "./components/Reviews";
import Demo from "./components/Demo";
import Navbar from "./components/Navbar";

export default function Page() {
  return (
    <>
      <Hero />
      <Navbar />
      <Demo />
      <Stats />
      <Reviews />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
