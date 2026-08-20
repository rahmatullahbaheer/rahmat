import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechExpertise from "./components/home/TechExpertise";
import HomeExperience from "./components/home/HomeExperience";
import FeaturedProjects from "./components/home/FeaturedProjects";
import DevExpertise from "./components/home/DevExpertise";
import HomeBlog from "./components/home/HomeBlog";
import ContactCTA from "./components/home/ContactCTA";
import Footer from "./components/Footer";

export const metadata = {
  title: {
    absolute: "Rahmat Ullah — Full Stack Developer | MERN Stack & Next.js Developer",
  },
  description:
    "Rahmat Ullah is a Full Stack Developer specializing in Next.js, React, Node.js, MongoDB, and PostgreSQL. Building scalable web applications, AI-powered features, and real-time systems for businesses worldwide.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rahmat Ullah — Full Stack Developer | MERN Stack & Next.js Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, Node.js, MongoDB, and PostgreSQL. Building scalable web applications and real-time systems.",
    url: "https://rahmatullah.dev",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <TechExpertise />
        <HomeExperience />
        <FeaturedProjects />
        <DevExpertise />
        <HomeBlog />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
