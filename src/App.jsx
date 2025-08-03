import React, { useState } from "react";
import { motion } from "framer-motion";

// ✅ Custom Card, CardContent, and Button components
const Card = ({ children, className }) => (
  <div className={`rounded-xl shadow-lg p-4 ${className}`}>{children}</div>
);

const CardContent = ({ children }) => <div>{children}</div>;

const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
  >
    {children}
  </button>
);

const films = [
  {
    title: "NISHAN",
    tagline:
      "a story born from deep love, passion and relentless hardwork , Nishan follows Megha as she mourns the loss of the famous poet Joshi, her brother, but life takes an unexpected turn, compelling her to step out for her brother's dignity – unveiling hidden threads of his past.",
    role: "Director, Editor & Cinematographer",
    images: ["/images/nishan1.jpg", "/images/nishan2.jpg", "/images/nishan3.jpg", "/images/nishan4.jpg"]
  },
  {
    title: "VOID",
    tagline:
      "A story that dives into the shadows we hide, the emotions we silence, and the moments we overlook. Void is not just a film—it’s a reflection of the battles many fight behind closed doors. The film follows a teenager silently grappling with depression, carrying a hollow smile and a heart that feels disconnected from joy. Therapy, healing, and hope seem distant—until a single moment of realisation changes everything. Void explores how courage isn’t always loud—sometimes, it’s simply choosing to face your own mind… and believing you can come out of it.",
    role: "Director, Editor & Cinematographer",
    images: ["/images/void1.png", "/images/void2.png", "/images/void3.png", "/images/void4.png"]
  },
  {
    title: "SAFAR",
    tagline:
      "We present our not-so-short film, SAFAR. As the title says, working a 9-to-5 can feel like a never-ending loop sometimes. But here’s the thing: it’s the little moments that make it all worth it. Like that first sip of coffee in the morning or the random joke that cracks you up in the middle of a busy day. Those are the moments we live for. SAFAR is a journey divided into four chapters – DAWN, BREATH, SPRINT, and DRIFT, each telling its own story. It reflects the reality of employees who are always working, travelling, and living a life that feels like a constant “safar” in the metro.",
    role: "Director, Editor & Cinematographer",
    images: ["/images/safar1.jpg", "/images/safar2.jpg", "/images/safar3.jpg", "/images/safar4.jpg"]
  }
];

function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center">
      <motion.img
        key={index}
        src={images[index]}
        alt="film"
        className="rounded-xl object-cover w-full h-64 mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
      <div className="flex gap-3">
        <Button onClick={prevImage}>⬅ Prev</Button>
        <Button onClick={nextImage}>Next ➡</Button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <nav className="fixed top-0 left-0 w-full bg-black/80 flex justify-between px-8 py-4 z-50">
        <h1 className="text-xl font-bold">SUKARNA VIKRAM</h1>
        <ul className="flex gap-6">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="relative h-screen flex justify-center items-center text-center">
        <video autoPlay muted loop className="absolute w-full h-full object-cover -z-10">
          <source src="https://cdn.coverr.co/videos/coverr-a-film-project-9337/1080p.mp4" type="video/mp4" />
        </video>
        <div className="bg-black/50 p-6 rounded-lg">
          <h1 className="text-4xl font-bold">Sukarna Vikram</h1>
          <p className="text-lg">Video Editor • Director • Photographer</p>
        </div>
      </section>

      <section id="projects" className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-8">My Projects</h2>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {films.map((film, index) => (
            <Card key={index} className="rounded-2xl shadow-lg p-4 bg-white/5">
              <CardContent>
                <h2 className="text-2xl font-bold mb-2">{film.title}</h2>
                <p className="text-gray-300 mb-3">{film.tagline}</p>
                <p className="font-semibold mb-3">🎥 My Role – {film.role}</p>
                <ImageSlider images={film.images} />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer id="contact" className="text-center py-10 bg-white/5">
        <h2 className="text-xl font-semibold">Contact Me</h2>
        <p>Email: <a href="mailto:sukarnavikram@gmail.com" className="text-blue-400">sukarnavikram@gmail.com</a></p>
        <a href="https://www.instagram.com/sukarna._.2113?utm_source=ig_web_button_share_sheet&igsh=eHQ3bWh6OGtoOHZo" target="_blank" className="bg-white text-black px-4 py-2 mt-3 inline-block rounded">Instagram</a>
      </footer>
    </div>
  );
}
