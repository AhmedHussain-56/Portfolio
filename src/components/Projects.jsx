import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiExternalLink, HiCode } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Alzheimer’s Disease Prediction using IoMT & Deep Learning",
    description:
      "Designed and developed an IoMT-enabled deep learning system using ResNet-101 (transfer learning) and U-Net for MRI-based Alzheimer’s classification. Achieved ~89% accuracy and built a scalable web platform for real-time prediction, model training, and performance analytics.",
    tags: ["Python", "ResNet-101", "U-Net", "IoMT", "Deep Learning", "Flask", "OpenCV"],
    gradient: "from-emerald-500 to-secondary-500",
    icon: "🧠",
    github: "https://github.com/AhmedHussain-56/Alzheimer-Disease-Prediction",
    demo: "https://alzheimer-disease-prediction-xm6y.onrender.com",
    featured: true,
    highlight: "~89% Accuracy • IoMT",
  },
  {
    id: 2,
    title: "Multi-Modal Misinformation & Deepfake Detection System",
    description:
      "A unified multi-modal AI system combining EfficientNet-B3 for frame-by-frame image & video deepfake detection and a BERT Transformer for fake news text classification. Uses MTCNN face extraction and achieved 91.07% accuracy on hybrid datasets (Celeb-DF & GANs) with a 3-tab Streamlit UI.",
    tags: ["PyTorch", "EfficientNet-B3", "BERT Transformer", "MTCNN", "OpenCV", "Streamlit", "Python"],
    gradient: "from-rose-500 to-indigo-500",
    icon: "🛡️",
    github: "https://github.com/AhmedHussain-56/Deepfake_Detection_System",
    demo: null,
    featured: false,
    highlight: "91.07% Accuracy • Multi-Modal",
  },
  {
    id: 3,
    title: "Natural Language to SQL Query Conversion using AI Transformer Models",
    description:
      "A web-based tool that converts natural language questions into accurate SQL queries using transformer-based NLP models. Focused on integrating model predictions with a user-friendly interface for database querying.",
    tags: ["Python", "Transformer Models", "NLP", "Streamlit", "Django", "SQLite"],
    gradient: "from-secondary-500 to-accent-500",
    icon: "🗃️",
    github:
      "https://github.com/AhmedHussain-56/NLP-to-SQL-Query-Conversion-Using-Transformer-Models",
    demo: "https://nlp-to-sql-query.onrender.com/",
    featured: false,
    highlight: "NLP Transformer",
  },
  {
    id: 4,
    title: "Object Movement Detection and Hand and Finger Counting Using Frame Differencing",
    description:
      "Developed a system to detect object movement and count fingers in real-time using frame differencing techniques. Utilized image processing algorithms to identify motion and perform hand gesture analysis.",
    tags: ["Python", "OpenCV", "Computer Vision", "Image Processing"],
    gradient: "from-primary-500 to-secondary-500",
    icon: "🤖",
    github:
      "https://github.com/AhmedHussain-56/Object-Movement-Detection-and-Hand-and-Finger-Counting-Using-Frame-Differencing",
    demo: "https://ahmedhussain-56-object-movement-detection-and-hand-a-app-utfiue.streamlit.app/",
    featured: false,
    highlight: "Real-time Vision",
  },
  {
    id: 5,
    title: "EduTrack ERP - Low-Cost Web Application",
    description:
      "A cost-effective ERP system for small educational institutions with modules for admissions, fees, and student records. Integrated with Google Sheets and Apps Script for real-time automation.",
    tags: ["Google Sheets", "Apps Script", "JavaScript", "Web App"],
    gradient: "from-accent-500 to-primary-500",
    icon: "📚",
    github: "https://github.com/AhmedHussain-56/EDUTACK-ERP-System",
    demo: "https://edutack-erp-system.vercel.app/",
    featured: false,
    highlight: "Full-Stack Automation",
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
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className={`group relative ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="gradient-border h-full card-hover">
                  <div className="p-6 md:p-8 h-full flex flex-col justify-between">
                    <div>
                      {/* Top Row: Icon + Highlight Badge */}
                      <div className="flex items-center justify-between mb-5 gap-3">
                        <motion.div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {project.icon}
                        </motion.div>

                        {project.highlight && (
                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-dark-700/80 text-secondary-300 border border-secondary-500/30 tracking-wide">
                            {project.highlight}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-outfit font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full bg-dark-700 text-slate-300 border border-slate-700/80 hover:border-slate-500 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-5 pt-4 border-t border-slate-700/50">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                          >
                            <FaGithub className="text-lg" />
                            Repository
                          </motion.a>
                        )}
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors font-medium"
                          >
                            <HiExternalLink className="text-lg" />
                            Live Demo
                          </motion.a>
                        )}
                      </div>
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
