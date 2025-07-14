// src/components/ProjectCard.tsx

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export default function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 h-full transition-transform transform hover:-translate-y-2 hover:border-teal-400">
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
    </a>
  );
}