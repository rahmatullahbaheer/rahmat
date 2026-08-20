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
import { homePageKeywords } from "./lib/keywords";

export const metadata = {
  title: {
    absolute:
      "Rahmat Ullah — Full Stack Developer | MERN Stack & Next.js Developer",
  },
  description:
    "Rahmat Ullah — Full Stack Developer (MERN Stack) specializing in Next.js, React.js, Node.js, MongoDB, PostgreSQL, TypeScript, AI integrations & React Native. 2+ years building scalable web apps, SaaS platforms & real-time systems. Available for hire remotely.",
  keywords: homePageKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Rahmat Ullah — Full Stack Developer | MERN Stack & Next.js Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, Node.js, MongoDB, PostgreSQL, TypeScript & AI. Building scalable web applications, SaaS platforms & real-time systems worldwide. Available for hire.",
    url: "https://rahmatullah.dev",
    type: "website",
    siteName: "Rahmat Ullah — Full Stack Developer",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rahmat Ullah — Full Stack Developer | MERN Stack & Next.js",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@rahmatullah_dev",
    creator: "@rahmatullah_dev",
    title: "Rahmat Ullah — Full Stack Developer | MERN & Next.js",
    description:
      "Full Stack Developer — Next.js, React, Node.js, MongoDB, PostgreSQL, TypeScript, AI. Building scalable web apps. Available for hire.",
    images: ["/og-image.jpg"],
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
