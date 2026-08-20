import "./globals.css";
import { personSchema, websiteSchema } from "./lib/structured-data";
import { allSiteKeywords } from "./lib/keywords";

export const metadata = {
  metadataBase: new URL("https://rahmatullah.dev"),
  title: {
    default: "Rahmat Ullah — Full Stack Developer | MERN Stack & Next.js Developer",
    template: "%s | Rahmat Ullah — Full Stack Developer",
  },
  description:
    "Rahmat Ullah is a Full Stack Developer (MERN Stack) specializing in Next.js, React.js, Node.js, MongoDB, PostgreSQL, TypeScript, and AI integrations. 2+ years building scalable web applications, SaaS platforms, real-time systems, and cross-platform mobile apps with React Native. Available for hire worldwide — remote-friendly.",
  keywords: allSiteKeywords,
  authors: [{ name: "Rahmat Ullah", url: "https://rahmatullah.dev" }],
  creator: "Rahmat Ullah",
  publisher: "Rahmat Ullah",
  applicationName: "Rahmat Ullah Portfolio",
  referrer: "origin-when-cross-origin",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Rahmat Ullah — Full Stack Developer",
    title: "Rahmat Ullah — Full Stack Developer | MERN Stack & Next.js Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, Node.js, MongoDB, PostgreSQL. Building scalable web applications, AI-powered features, real-time systems, and mobile apps. Available for hire remotely.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rahmat Ullah — Full Stack Developer specializing in Next.js, React and Node.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rahmatullah_dev",
    creator: "@rahmatullah_dev",
    title: "Rahmat Ullah — Full Stack Developer | MERN Stack & Next.js",
    description:
      "Full Stack Developer — Next.js, React, Node.js, MongoDB, PostgreSQL. Building scalable web apps & AI-powered systems. Available for hire.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "GOOGLE_SITE_VERIFICATION_CODE_HERE",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const person = personSchema();
  const website = websiteSchema();

  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
      </head>
      <body className="min-h-screen bg-[#0a0e1a] text-white">
        {children}
      </body>
    </html>
  );
}
