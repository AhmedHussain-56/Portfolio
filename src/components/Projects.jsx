import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiExternalLink, HiCode } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Object Movement Detection & Hand Gesture Recognition",
    description:
      "A system to detect object movement and count fingers in real-time using frame differencing techniques. Utilized image processing algorithms for motion identification and hand gesture analysis.",
    tags: ["Python", "OpenCV", "Computer Vision", "Image Processing"],
    gradient: "from-primary-500 to-secondary-500",
    icon: "🤖",
    github:
      "https://github.com/AhmedHussain-56/Object-Movement-Detection-and-Hand-and-Finger-Counting-Using-Frame-Differencing",
    demo: "https://ahmedhussain-56-object-movement-detection-and-hand-a-app-utfiue.streamlit.app/",
  },
  {
    id: 2,
    title: "NLP to SQL Query Conversion",
    description:
      "A web-based tool that converts natural language questions into accurate SQL queries using transformer-based NLP models. Features a user-friendly interface for database querying.",
    tags: ["Python", "Transformers", "NLP", "Streamlit", "Django", "SQLite"],
    gradient: "from-secondary-500 to-accent-500",
    icon: "🗃️",
    github:
      "https://github.com/AhmedHussain-56/NLP-to-SQL-Query-Conversion-Using-Transformer-Models",
    demo: "https://nlp-to-sql-query.onrender.com/",
  },
  {
    id: 3,
    title: "EduTrack ERP - Low-Cost Web Application",
    description:
      "A cost-effective ERP system for small educational institutions with modules for admissions, fees, and student records. Integrated with Google Sheets and Apps Script for real-time automation.",
    tags: ["Google Sheets", "Apps Script", "JavaScript", "Web App"],
    gradient: "from-accent-500 to-primary-500",
    icon: "📚",
    github: "https://github.com/AhmedHussain-56/EDUTACK-ERP-System",
    demo: "https://edutack-erp-system.vercel.app/",
  },
];

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-primary-400 text-sm font-medium uppercase tracking-widest"
            >
              My Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-outfit font-bold mt-3 text-white"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 mt-4 max-w-2xl mx-auto"
            >
              A selection of projects that showcase my skills and passion for
              building impactful solutions
            </motion.p>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group relative"
              >
                <div className="gradient-border h-full card-hover">
                  <div className="p-6 h-full flex flex-col">
                    {/* Project Icon */}
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {project.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-outfit font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-dark-700 text-slate-300 border border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                      >
                        <FaGithub className="text-lg" />
                        Code
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 text-sm text-slate-400 hover:text-primary-400 transition-colors"
                        >
                          <HiExternalLink className="text-lg" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Glow Effect on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500 -z-10`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/AhmedHussain-56"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              View All Projects on GitHub
              <HiExternalLink />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
