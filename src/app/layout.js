import "./globals.css";

export const metadata = {
  title: "Rahmat Ullah | Full Stack Developer (MERN Stack)",
  description:
    "Full Stack Developer (MERN) with 2+ years of experience building scalable web applications using MongoDB, Express.js, React.js, Node.js, and Next.js.",
  keywords:
    "Rahmat Ullah, Full Stack Developer, MERN Stack, React, Node.js, Next.js, Web Developer Pakistan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
