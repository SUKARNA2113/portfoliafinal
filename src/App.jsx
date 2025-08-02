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
        <div className="flex flex-wrap justify-center gap-6">
          <div className="relative w-72 rounded-lg overflow-hidden group bg-white/5">
            <img src="https://picsum.photos/400/300?random=1" alt="NISHAAN" className="relative z-10" />
            <div className="relative z-10 p-4">
              <h3 className="text-xl font-semibold">NISHAAN</h3>
              <p className="text-gray-300">Director | Editor | DOP</p>
            </div>
          </div>

          <div className="relative w-72 rounded-lg overflow-hidden group bg-white/5">
            <img src="https://picsum.photos/400/300?random=2" alt="SAFAR" className="relative z-10" />
            <div className="relative z-10 p-4">
              <h3 className="text-xl font-semibold">SAFAR</h3>
              <p className="text-gray-300">Writer | Editor</p>
            </div>
          </div>

          <div className="relative w-72 rounded-lg overflow-hidden group bg-white/5">
            <img src="https://picsum.photos/400/300?random=3" alt="VOID" className="relative z-10" />
            <div className="relative z-10 p-4">
              <h3 className="text-xl font-semibold">VOID</h3>
              <p className="text-gray-300">Director</p>
            </div>
          </div>
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
