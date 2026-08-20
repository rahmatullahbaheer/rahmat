import "./globals.css";
import { personSchema, websiteSchema } from "./lib/structured-data";

export const metadata = {
  metadataBase: new URL("https://rahmatullah.dev"),
  title: {
    default: "Rahmat Ullah — Full Stack Developer | MERN Stack & Next.js",
    template: "%s | Rahmat Ullah",
  },
  description:
    "Full Stack Developer specializing in Next.js, React, Node.js, MongoDB, and PostgreSQL. Building scalable web applications, AI-powered features, and real-time systems.",
  keywords: [
    "Rahmat Ullah",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer Pakistan",
    "TypeScript Developer",
    "MongoDB",
    "PostgreSQL",
  ],
  authors: [{ name: "Rahmat Ullah", url: "https://rahmatullah.dev" }],
  creator: "Rahmat Ullah",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Rahmat Ullah — Full Stack Developer",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rahmat Ullah — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@rahmatullah_dev",
  },
  verification: {
    google: "GOOGLE_SITE_VERIFICATION_CODE_HERE",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
