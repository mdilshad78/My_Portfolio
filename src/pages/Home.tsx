// src/pages/Home.tsx
import { useTypewriter } from 'react-simple-typewriter';
import { useState } from 'react';
import main from '../assets/images/herobg.jpg';

export default function Home() {
  const [val] = useState<string>('Mern Stack Developer, Web Developer, Full Stack Developer');
  const [text] = useTypewriter({
    words: val.split(', '),
    loop: true,
    typeSpeed: 170,
    delaySpeed: 300,
  });

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-black text-white"
    >
      <img
        src={main}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="max-w-4xl text-left" data-aos="zoom-in">
          <h2 className="text-5xl font-bold mb-4">Mohammad Dilshad</h2>
          <p className="text-xl">
            I'm <span className="text-blue-400">{text}</span>
            <span className="typed-cursor">|</span>
          </p>
        </div>
      </div>
    </section>
  );
}
