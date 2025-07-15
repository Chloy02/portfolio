// src/components/Contact.tsx
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section className="bg-gray-900 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
        <p className="text-gray-400 mb-8">
          Got a project, a wild idea, or just want to talk about the universe (or code)? My inbox is always open.
        </p>
        <div className="flex justify-center items-center gap-6">
          {/* THIS IS THE LINE THAT HAS BEEN CHANGED */}
          <a href="mailto:Chloycosta@proton.me" className="text-gray-400 hover:text-amber-500 transition-colors" aria-label="Email">
            <HiOutlineMail size={30} />
          </a>
          <a href="https://github.com/Chloy02" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors" aria-label="GitHub">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/chloycosta" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={30} />
          </a>
          <a href="https://instagram.com/chloy_costa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors" aria-label="Instagram">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}