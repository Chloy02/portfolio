// src/components/About.tsx

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Figma",
  "Python",
];

export default function About() {
  return (
    // Section container with padding
    <section className="bg-black text-white py-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Bio */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            A Bit About Me
          </h2>
          <p className="text-gray-400 leading-relaxed">
            I'm a developer who loves bringing ideas to life with code and a musician who finds rhythm in logic. My passion lies at the intersection of beautiful design and robust functionality. Whether I'm building a complex web application or composing a new melody, I'm driven by the desire to create memorable experiences.
          </p>
          <p className="text-gray-400 leading-relaxed mt-4">
            When I'm not coding or making music, you can find me exploring new technologies or getting lost in a good sci-fi novel.
          </p>
        </div>

        {/* Right Column: Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-6">My Skillset</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="bg-gray-800 text-teal-400 border border-gray-700 rounded-full px-4 py-2 text-sm font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}