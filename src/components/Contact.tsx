// src/components/Contact.tsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-16">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
        <p className="text-gray-400 mb-8">
          Got a project, a wild idea, or just want to talk about the universe (or code)? My inbox is always open.
        </p>
        <div className="flex justify-center items-center gap-6">
          <a href="mailto:Chloycostac@gmail.com" className="text-gray-400 hover:text-amber-500 transition-colors">
            <HiOutlineMail size={30} />
          </a>
          <a href="https://github.com/Chloy02" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/chloycosta" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}