// src/components/Hero.tsx

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="absolute z-10 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-20">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
            Chloy Costa
          </span>
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
          Physics Grad Turned Code Alchemist. <br />
          Building Galaxies in Python, Android & Stardust.
        </p>

        <div className="mt-8 w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full" />
      </div>
    </div>
  );
}