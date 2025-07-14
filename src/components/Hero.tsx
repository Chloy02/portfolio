// src/components/Hero.tsx

export default function Hero() {
  return (
    // Container for the whole hero section
    // 'min-h-screen' makes it take up the full height of the screen
    // 'flex' and other classes center the content vertically and horizontally
    <div className="min-h-screen flex flex-col justify-center items-center text-center text-white bg-black">
      
      {/* Main Heading */}
      {/* 'text-5xl' is the base font size, 'md:text-7xl' makes it larger on medium-sized screens and up */}
      {/* 'font-extrabold' makes the font very bold */}
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
        
        {/* This is the magic for the gradient text effect */}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Your Name
        </span>
      </h1>

      {/* Subheading */}
      {/* 'mt-4' adds margin to the top */}
      {/* 'text-xl' and 'md:text-2xl' make it responsive */}
      <p className="mt-4 text-xl md:text-2xl text-gray-300">
        Creative Developer & Musician
      </p>

      {/* A subtle decorative divider */}
      {/* 'w-24' is width, 'h-1' is height, 'bg-gradient-to-r...' creates the colored line */}
      <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
    </div>
  );
}