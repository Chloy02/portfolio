// src/app/projects/[slug]/page.tsx

import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

// This function generates the page title dynamically
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `${project.title} | Chloy Costa`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Find the project data that matches the slug from the URL
  const project = projectsData.find((p) => p.slug === params.slug);

  // If no project is found, show a 404 page
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-4xl mx-auto">
        {/* Project Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
            {project.title}
          </h1>
          <div className="flex justify-center flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-gray-800 text-teal-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project Image */}
        <div className="mb-12">
          <Image
            src={project.image}
            alt={`Cover image for ${project.title}`}
            width={1200}
            height={675}
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Project Details */}
        <div 
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: project.details }} 
        />

        {/* Links */}
        <div className="flex justify-between items-center mt-16">
          <Link href="/#projects" className="text-amber-500 hover:text-amber-400 transition-colors">
            &larr; Back to All Projects
          </Link>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
          >
            View on GitHub
          </a>
        </div>
      </main>
    </div>
  );
}

// This function tells Next.js which project pages to build at build time
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}