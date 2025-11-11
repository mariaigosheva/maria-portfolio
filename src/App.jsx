import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon, Mail, Github, Linkedin, FileText } from "lucide-react";

const projects = [
  {
    title: "Quote Generator",
    desc: "Elegant quote generator using HTML, CSS & JavaScript.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    link: "https://mariaigosheva.github.io/quote-generator/",
  },
  {
    title: "Portfolio Website",
    desc: "Portfolio showcasing projects built with React, Tailwind CSS, Framer Motion, HTML, CSS, and JavaScript.",
    img: "/images/portfolio.jpg", 
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    link: "https://mariaigosheva.github.io/maria-portfolio/",
  },
  {
    title: "Miss Mants",
    desc: "Official website showcasing music, shows, and bookings.",
    img: "/images/miss-mants.jpg",
    tech: ["HTML5", "CSS3", "JavaScript", "Formspree", "SoundCloud API"],
    link: "https://www.missmants.com"
  },
];

export default function App() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === "dark" ? "light" : "dark");

  return (
    <div className={`min-h-screen transition-colors duration-500 
      ${theme === "dark" ? "bg-slate-900 text-slate-200" : "bg-white text-slate-950"}`}>
      
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 text-xl font-semibold text-indigo-700 dark:text-indigo-400">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-lg flex items-center justify-center text-white">M</div>
            <span className="hidden sm:inline">Maria Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {["projects", "contact"].map(section => (
              <a key={section} href={`#${section}`} className="relative group capitalize text-indigo-700 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">
                {section}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 dark:bg-indigo-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-300"
            >
              Resume <FileText className="w-4 h-4" />
            </a>

            <button onClick={toggleTheme} className="p-2 rounded-md bg-indigo-100 dark:bg-indigo-700">
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={toggleTheme} className="p-2 rounded-md bg-indigo-100 dark:bg-indigo-700">
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={() => setOpen(!open)} className="p-2 rounded-md bg-indigo-100 dark:bg-indigo-700">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="md:hidden bg-white dark:bg-slate-800 shadow-lg mt-[70px]">
          <div className="px-6 py-4 flex flex-col gap-3 text-indigo-700 dark:text-indigo-400">
            {["projects", "contact", "resume"].map(section => (
              <a key={section} href={`#${section}`} onClick={() => setOpen(false)} className="relative group capitalize hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">
                {section}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 dark:bg-indigo-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pt-32 py-16">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm uppercase tracking-widest text-indigo-700 dark:text-indigo-400">Hi, I'm Maria</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-indigo-700 dark:text-indigo-400">
              I build beautiful, accessible digital experiences.
            </h1>
            <p className="mt-6">
              I’m a junior frontend developer passionate about crafting engaging web experiences and improving my skills every day.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#projects" className="px-5 py-3 rounded-md bg-indigo-600 dark:bg-indigo-500 text-white font-medium shadow hover:bg-indigo-700 dark:hover:bg-indigo-400 transition">See projects</a>
              <a href="mailto:maria.igosheva@gmail.com" className="px-5 py-3 rounded-md border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-700 transition">Get in touch</a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-indigo-600 dark:text-indigo-400">
              <a href="https://github.com/mariaigosheva"><Github className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/maria-igoseva"><Linkedin className="w-5 h-5" /></a>
              <a href="mailto:maria.igosheva@gmail.com"><Mail className="w-5 h-5" /></a>
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1400" alt="Hero" className="w-full object-cover h-72 md:h-96" />
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-32">
          <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-10">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                onClick={(e) => {
                  if (project.title === "Portfolio Website") {
                    e.preventDefault(); // prevent page reload
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group block rounded-xl overflow-hidden shadow-lg bg-white dark:bg-slate-800 hover:shadow-2xl transition-shadow"
              >
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="mb-3">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-medium bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100 px-2 py-1 rounded">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-32">
          <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-10">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <form className="flex flex-col gap-4 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg" action="mailto:maria.igosheva@gmail.com" method="POST" encType="text/plain">
              <input type="text" name="name" placeholder="Your Name" className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400" required />
              <input type="email" name="email" placeholder="Your Email" className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400" required />
              <textarea name="message" rows="5" placeholder="Your Message" className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400" required></textarea>
              <button type="submit" className="px-6 py-3 rounded-md bg-indigo-600 dark:bg-indigo-500 text-white font-medium shadow hover:bg-indigo-700 dark:hover:bg-indigo-400 transition">Send Message</button>
            </form>
            <div className="flex flex-col justify-center gap-6">
              <p>I’ll get back to you as soon as possible!</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 bg-slate-100 dark:bg-slate-900 py-8 text-center">
          <p>© {new Date().getFullYear()} Maria Igoseva. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6 text-indigo-600 dark:text-indigo-400">
            <a href="https://github.com/mariaigosheva"><Github className="w-5 h-5 mx-auto" /></a>
            <a href="https://www.linkedin.com/in/maria-igoseva"><Linkedin className="w-5 h-5 mx-auto" /></a>
            <a href="mailto:maria.igosheva@gmail.com"><Mail className="w-5 h-5 mx-auto" /></a>
          </div>
        </footer>
      </main>
    </div>
  );
}
