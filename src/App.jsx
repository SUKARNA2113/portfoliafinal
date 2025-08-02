import { motion } from "framer-motion";

export default function App() {
  const projects = [
    {
      title: "NISHAAN",
      role: "Director | Editor | Director of Photography",
      description: "A gripping short film exploring human emotions and conflict.",
      image: "/images/nishaan.jpg",
    },
    {
      title: "SAFAR (4-Part Short Film)",
      role: "Writer | Editor",
      description: "A 4-part journey capturing life and experiences.",
      image: "/images/safar.jpg",
    },
    {
      title: "VOID",
      role: "Director",
      description: "A thought-provoking short film exploring emptiness and self-discovery.",
      image: "/images/void.jpg",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <section className="text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold"
        >
          Sukarna Vikram
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl mt-4 text-gray-300"
        >
          Video Editor | Director | Photographer | Storyteller
        </motion.p>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400 text-lg">
          I am a filmmaker, video editor, and photographer passionate about crafting
          stories through visuals. My works include directing, editing, and shooting
          short films, along with event photography and professional videography.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
                <img src={p.image} alt={p.title} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-400">{p.role}</p>
                  <p className="text-gray-300 mt-2">{p.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gray-900 py-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-400">Let's create something amazing together!</p>
        <div className="mt-4 space-x-4">
          <a
            href="mailto:sukarnavikram@gmail.com"
            className="bg-white text-black px-4 py-2 rounded-lg"
          >
            Email Me
          </a>
          <a
            href="https://instagram.com/Sukku"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-700 text-white px-4 py-2 rounded-lg"
          >
            Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
