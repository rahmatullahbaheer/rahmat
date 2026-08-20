const SITE_URL = "https://rahmatullah.dev";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rahmat Ullah",
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, Node.js, MongoDB, and PostgreSQL. Building scalable web applications and AI-powered solutions.",
    url: SITE_URL,
    email: "baheer224@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rawalpindi",
      addressCountry: "PK",
    },
    knowsAbout: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "TypeScript",
      "JavaScript",
      "React Native",
      "Socket.IO",
      "REST API Development",
      "Full Stack Development",
      "MERN Stack",
    ],
    sameAs: [
      "https://github.com/rahmatullah",
      "https://linkedin.com/in/rahmatullah",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rahmat Ullah — Full Stack Developer",
    url: SITE_URL,
    description:
      "Portfolio and personal brand website of Rahmat Ullah, Full Stack Developer specializing in MERN stack and Next.js.",
    author: {
      "@type": "Person",
      name: "Rahmat Ullah",
    },
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function blogPostingSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.coverImage}`,
    author: {
      "@type": "Person",
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Rahmat Ullah",
      url: SITE_URL,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    keywords: post.tags?.join(", "),
  };
}

export function creativeWorkSchema(project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.overview,
    author: {
      "@type": "Person",
      name: "Rahmat Ullah",
      url: SITE_URL,
    },
    url: `${SITE_URL}/projects/${project.slug}`,
    keywords: project.technologies?.join(", "),
  };
}
