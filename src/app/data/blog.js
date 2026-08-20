export const blogPosts = [
  {
    slug: "nextjs-app-router-complete-guide",
    title: "Next.js App Router: A Practical Guide to Server Components and Routing",
    excerpt:
      "Explore how the Next.js App Router changes the way you build React applications — from Server Components to nested layouts, data fetching, and dynamic routes.",
    content: `
## Introduction

The Next.js App Router represents a fundamental shift in how React applications are structured. After working with it across multiple production projects, I can confidently say it's one of the most impactful changes in modern web development.

In this guide, I'll walk through the core concepts with practical examples from real projects.

## What Are Server Components?

Server Components render on the server and send only HTML to the browser. This means:

- **Zero JavaScript** sent to the client for server-rendered UI
- Direct access to databases and file systems
- Sensitive data (API keys, DB connections) stays on the server

\`\`\`jsx
// This component runs only on the server
export default async function ProjectList() {
  // Directly fetch data — no useEffect, no API call from client
  const projects = await db.projects.findMany();
  
  return (
    <ul>
      {projects.map(p => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}
\`\`\`

## When to Use Client Components

Use \`"use client"\` when you need:
- Event listeners (onClick, onChange)
- React hooks (useState, useEffect)
- Browser APIs (localStorage, window)

\`\`\`jsx
"use client";
import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  // Form logic here
}
\`\`\`

## Nested Layouts

One of the most powerful App Router features is nested layouts. Each route segment can have its own layout that persists across navigation.

\`\`\`
app/
  layout.js          ← Root layout (Navbar, Footer)
  dashboard/
    layout.js        ← Dashboard sidebar
    page.js          ← Dashboard home
    analytics/
      page.js        ← Analytics (inherits dashboard sidebar)
\`\`\`

## Data Fetching Patterns

### Static Data
\`\`\`jsx
// Runs at build time
export const dynamic = 'force-static';
export default async function Page() {
  const data = await fetchData();
  return <Component data={data} />;
}
\`\`\`

### Dynamic Data
\`\`\`jsx
export default async function Page({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return <Article post={post} />;
}
\`\`\`

## generateMetadata for SEO

The App Router's \`generateMetadata\` function lets you generate unique metadata for every page — essential for SEO.

\`\`\`jsx
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  return {
    title: \`\${project.title} | Rahmat Ullah\`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      images: [project.image],
    },
  };
}
\`\`\`

## Conclusion

The App Router isn't just a new routing system — it's a new mental model for building React applications. By defaulting to Server Components, Next.js pushes us toward more performant, more secure applications with better SEO out of the box.

Start with Server Components as your default and reach for \`"use client"\` only when you genuinely need client-side interactivity.
    `,
    coverImage: "/blog/nextjs-app-router.jpg",
    author: "Rahmat Ullah",
    publishedAt: "2024-11-15",
    updatedAt: "2025-01-20",
    category: "Next.js",
    tags: ["Next.js", "React", "Server Components", "App Router", "SEO"],
    readingTime: "8 min read",
    featured: true,
  },
  {
    slug: "building-realtime-apps-socketio-nodejs",
    title: "Building Real-Time Applications with Socket.IO and Node.js",
    excerpt:
      "A practical guide to building real-time features — live chat, notifications, and live data updates — using Socket.IO with a Node.js backend and React frontend.",
    content: `
## Introduction

Real-time features are now table stakes for modern web applications. In projects like Oferta (marketplace) and the IoT irrigation system, I've implemented Socket.IO for everything from live chat to real-time sensor data. Here's what I've learned.

## Setting Up Socket.IO

### Server (Node.js / Express)

\`\`\`js
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: process.env.CLIENT_URL }
});

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
  });
  
  socket.on('send-message', ({ roomId, message }) => {
    io.to(roomId).emit('new-message', message);
  });
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
\`\`\`

### Client (React)

\`\`\`jsx
"use client";
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export function Chat({ roomId }) {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const s = io(process.env.NEXT_PUBLIC_API_URL);
    s.emit('join-room', roomId);
    
    s.on('new-message', (msg) => {
      setMessages(prev => [...prev, msg]);
    });
    
    setSocket(s);
    return () => s.disconnect();
  }, [roomId]);
  
  // ...render chat UI
}
\`\`\`

## Rooms and Namespaces

Rooms allow you to broadcast to specific groups of clients — perfect for private chat or per-product live streams.

\`\`\`js
// Server: broadcast to a specific room only
socket.to('room-123').emit('user-joined', { userId });

// Server: broadcast to everyone including sender
io.to('room-123').emit('announcement', { message });
\`\`\`

## Handling Reconnection

Always handle reconnection events for production reliability:

\`\`\`js
socket.on('reconnect', (attempt) => {
  console.log('Reconnected after', attempt, 'attempts');
  socket.emit('rejoin-rooms', userRooms);
});
\`\`\`

## Performance: Throttling Sensor Data

For the IoT irrigation project, sensors emit data every 100ms. Sending every update to the client is wasteful. Use throttling:

\`\`\`js
import { throttle } from 'lodash';

const emitSensorData = throttle((data) => {
  io.to('field-1').emit('sensor-update', data);
}, 1000); // Max once per second to clients
\`\`\`

## Conclusion

Socket.IO makes real-time features surprisingly approachable. The key insights from production use: always join rooms for targeted broadcasting, handle reconnection gracefully, and throttle high-frequency data to avoid overwhelming clients.
    `,
    coverImage: "/blog/socketio-nodejs.jpg",
    author: "Rahmat Ullah",
    publishedAt: "2024-10-08",
    updatedAt: "2024-12-01",
    category: "Backend",
    tags: ["Socket.IO", "Node.js", "Real-Time", "WebSockets", "React"],
    readingTime: "7 min read",
    featured: true,
  },
  {
    slug: "integrating-openai-nextjs",
    title: "Integrating OpenAI API in Next.js: Building AI-Powered Features",
    excerpt:
      "Learn how to securely integrate the OpenAI API into a Next.js application using API routes, streaming responses, and prompt engineering techniques from building CareerBooster AI.",
    content: `
## Introduction

Building CareerBooster AI gave me deep hands-on experience integrating OpenAI into a production Next.js application. In this article, I'll share the patterns that worked — and the mistakes to avoid.

## Setting Up OpenAI Securely

Never expose your OpenAI API key to the client. Route all requests through Next.js API routes (or Route Handlers in the App Router).

\`\`\`js
// app/api/generate-resume/route.js
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Server-only env var
});

export async function POST(request) {
  const { jobDescription, experience } = await request.json();
  
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: 'You are an expert resume writer. Generate ATS-optimized resume bullet points.',
      },
      {
        role: 'user',
        content: \`Job: \${jobDescription}\\nExperience: \${experience}\`,
      },
    ],
    max_tokens: 500,
  });
  
  return Response.json({
    content: completion.choices[0].message.content,
  });
}
\`\`\`

## Streaming Responses

For long-form content, streaming improves perceived performance dramatically:

\`\`\`js
// app/api/generate-cover-letter/route.js
export async function POST(request) {
  const { jobDescription } = await request.json();
  
  const stream = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: jobDescription }],
    stream: true,
  });
  
  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content || '';
        controller.enqueue(encoder.encode(text));
      }
      controller.close();
    },
  });
  
  return new Response(readable, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
\`\`\`

## Prompt Engineering Tips

Good prompts are the difference between generic AI output and genuinely useful content:

1. **Be specific about format**: "Return exactly 5 bullet points, each starting with a strong action verb"
2. **Provide context**: Include the job description and user's existing experience
3. **Set constraints**: "Keep each bullet under 150 characters for ATS compatibility"
4. **System role**: Define the AI's role clearly in the system message

## Rate Limiting and Cost Control

\`\`\`js
// Simple in-memory rate limit (use Redis in production)
const rateLimits = new Map();

export async function POST(request) {
  const userId = getUserId(request);
  const now = Date.now();
  const userLimit = rateLimits.get(userId);
  
  if (userLimit && now - userLimit.lastCall < 5000) {
    return Response.json({ error: 'Too many requests' }, { status: 429 });
  }
  
  rateLimits.set(userId, { lastCall: now });
  // proceed with OpenAI call
}
\`\`\`

## Conclusion

OpenAI integration in Next.js is straightforward, but production reliability requires: server-side API key protection, streaming for long content, robust prompt engineering, and rate limiting to control costs.
    `,
    coverImage: "/blog/openai-nextjs.jpg",
    author: "Rahmat Ullah",
    publishedAt: "2024-09-20",
    updatedAt: "2025-01-05",
    category: "AI Development",
    tags: ["OpenAI", "Next.js", "AI", "API", "Node.js"],
    readingTime: "9 min read",
    featured: false,
  },
  {
    slug: "nextjs-seo-guide-metadata-api",
    title: "Next.js SEO Guide: Mastering the Metadata API for Better Rankings",
    excerpt:
      "A comprehensive guide to Next.js SEO using the Metadata API — title templates, Open Graph, Twitter cards, JSON-LD structured data, sitemaps, and robots.txt.",
    content: `
## Introduction

Next.js has the best built-in SEO tooling of any React framework. After optimizing multiple production sites with the App Router's Metadata API, here's the complete playbook.

## Root Layout Metadata

The root layout sets baseline metadata and the title template:

\`\`\`js
// app/layout.js
export const metadata = {
  metadataBase: new URL('https://yoursite.com'),
  title: {
    default: 'Your Site',
    template: '%s | Your Site',
  },
  description: 'Your site description',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Your Site',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@yourhandle',
  },
};
\`\`\`

## Per-Page Metadata

Every page should have unique title and description:

\`\`\`js
// app/about/page.js
export const metadata = {
  title: 'About',  // Becomes "About | Your Site"
  description: 'Unique description for this specific page.',
  alternates: {
    canonical: '/about',
  },
};
\`\`\`

## Dynamic Metadata for Projects and Blog

\`\`\`js
// app/projects/[slug]/page.js
export async function generateMetadata({ params }) {
  const { slug } = await params; // params is a Promise in Next.js 16
  const project = getProjectBySlug(slug);
  
  if (!project) return { title: 'Project Not Found' };
  
  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: \`/projects/\${slug}\` },
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [{ url: project.image, width: 1200, height: 630 }],
    },
  };
}
\`\`\`

## JSON-LD Structured Data

JSON-LD is the recommended way to add structured data:

\`\`\`jsx
// In any Server Component
function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rahmat Ullah",
    "jobTitle": "Full Stack Developer",
    "url": "https://yoursite.com",
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
\`\`\`

## Sitemap

\`\`\`js
// app/sitemap.js
export default function sitemap() {
  return [
    { url: 'https://yoursite.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://yoursite.com/about', priority: 0.8 },
    // ... all pages
  ];
}
\`\`\`

## Robots.txt

\`\`\`js
// app/robots.js
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://yoursite.com/sitemap.xml',
  };
}
\`\`\`

## Key Takeaways

1. Every page needs a **unique title and description** — no copy-pasting
2. Use **canonical URLs** to prevent duplicate content
3. **metadataBase** is required for absolute OG image URLs
4. Await **params** in generateMetadata (it's a Promise in Next.js 16)
5. **JSON-LD** structured data helps Google understand your content
    `,
    coverImage: "/blog/nextjs-seo.jpg",
    author: "Rahmat Ullah",
    publishedAt: "2024-08-10",
    updatedAt: "2025-02-01",
    category: "SEO",
    tags: ["Next.js", "SEO", "Metadata", "Structured Data", "JSON-LD"],
    readingTime: "10 min read",
    featured: false,
  },
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug) || null;
}

export function getFeaturedBlogPosts() {
  return blogPosts.filter((p) => p.featured);
}

export function getAllBlogSlugs() {
  return blogPosts.map((p) => p.slug);
}

export function getAllBlogPosts() {
  return blogPosts;
}
