// src/components/ProjectCard.tsx
import Link from 'next/link';

type ProjectCardProps = {
  slug: string; // We need the slug to build the link
  title: string;
  description: string;
  tags: string[];
};

export default function ProjectCard({ slug, title, description, tags }: ProjectCardProps) {
  return (
    // The entire card is now a link to the detailed project page
    <Link href={`/projects/${slug}`}>
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 h-full transition-transform transform hover:-translate-y-2 hover:border-teal-400 cursor-pointer">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-800 text-teal-400 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}