/**
 * SEO utility functions for Rahmat Ullah's portfolio.
 * Centralizes metadata generation for consistency across all pages.
 */

const SITE_URL = "https://rahmatullah.dev";
const SITE_NAME = "Rahmat Ullah — Full Stack Developer";
const DEFAULT_OG_IMAGE = "/og-image.jpg";
const TWITTER_HANDLE = "@rahmatullah_dev";

/**
 * Creates a complete metadata object for a page.
 * @param {string} title - Page title (will be formatted with template)
 * @param {string} description - Unique meta description for the page
 * @param {string} path - URL path (e.g., "/about")
 * @param {object} options - Additional options
 */
export function createPageMetadata(title, description, path, options = {}) {
  const url = `${SITE_URL}${path}`;
  const ogImage = options.ogImage || DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: options.ogTitle || `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: options.ogImageAlt || title,
        },
      ],
      locale: "en_US",
      type: options.ogType || "website",
      ...(options.openGraph || {}),
    },
    twitter: {
      card: "summary_large_image",
      title: options.ogTitle || `${title} | ${SITE_NAME}`,
      description,
      creator: TWITTER_HANDLE,
      images: [ogImage],
    },
    robots: {
      index: options.noindex ? false : true,
      follow: options.noindex ? false : true,
      googleBot: {
        index: options.noindex ? false : true,
        follow: options.noindex ? false : true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export { SITE_URL, SITE_NAME, TWITTER_HANDLE, DEFAULT_OG_IMAGE };
