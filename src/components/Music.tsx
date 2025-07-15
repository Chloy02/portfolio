// src/components/Music.tsx
import Image from "next/image";

export default function Music() {
  return (
    <section className="bg-gray-900 text-white py-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Once Played a Fest, Now I Play With Datasets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          <div className="md:col-span-1">
            <Image
              src="/chloy-performance.jpg"
              alt="Chloy Costa performing with a guitar"
              width={500}
              height={500}
              className="rounded-lg shadow-lg shadow-amber-500/20 object-cover aspect-square"
            />
          </div>

          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-3">Music & Ministry</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading choirs, organizing state-level Battle of the Bands, and performing for the university—music has always been my parallel passion. It&apos;s the other half of my creative core, a space for raw expression and connection. While I don&apos;t have tracks on Spotify yet, you can catch the vibe on my Instagram.
            </p>
            <a 
              href="https://instagram.com/chloy_costa"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
            >
              Follow My Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}