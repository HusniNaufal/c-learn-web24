import React from "react";

const Kepala = () => {
  return (
    <header className="border-b">
      <div className="max-w-5xl mx-auto py-4 flex items-center justify-between px-4">
        <h1 className="font-bold text-2xl">Medium</h1>
        <div className="flex space-x-4 items-center">
          <nav className="space-x-3 text-xs">
            <a href="/" className="hidden md:inline-block">Our Story</a>
            <a href="/" className="hidden md:inline-block">Membership</a>
            <a href="/" className="hidden md:inline-block">Write</a>
            <a href="/" className="hidden md:inline-block">Sign In</a>
          </nav>
          <button className="bg-black text-white text-xs py-2 px-4 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Kepala;
