// src/components/Hero.tsx

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center text-white bg-black">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
          Chloy Costa
        </span>
      </h1>

      {/* Using the tagline from your awesome GitHub README */}
      <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
        Physics Grad Turned Code Alchemist. <br />
        Building Galaxies in Python, Android & Stardust.
      </p>

      <div className="mt-8 w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full" />
    </div>
  );
}