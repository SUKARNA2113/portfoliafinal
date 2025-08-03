import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
        <Button variant="outline" onClick={prevImage}>
          ⬅ Prev
        </Button>
        <Button variant="outline" onClick={nextImage}>
          Next ➡
        </Button>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {films.map((film, index) => (
        <Card key={index} className="rounded-2xl shadow-lg p-4">
          <CardContent>
            <h2 className="text-2xl font-bold mb-2">{film.title}</h2>
            <p className="text-gray-700 mb-3">{film.tagline}</p>
            <p className="font-semibold mb-3">🎥 My Role – {film.role}</p>

            <ImageSlider images={film.images} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
