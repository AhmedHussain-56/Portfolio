import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiAcademicCap, HiBadgeCheck, HiLightningBolt } from "react-icons/hi";
import { FaGamepad, FaChartBar, FaDatabase } from "react-icons/fa";

const certifications = [
  {
    id: 1,
    title: "MyCaptain Game Development Course",
    issuer: "MyCaptain",
    date: "September 2020",
    description:
      "Built projects including first prototype, 3D models, and final playable game under guided mentorship.",
    icon: FaGamepad,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "IBM SkillsBuild Internship - Data Analytics (CSRBOX)",
    issuer: "IBM",
    date: "November 2023",
    description:
      "Completed structured training in data analytics concepts and applied learning modules.",
    icon: FaChartBar,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    date: "October 2025",
    description:
      "Performed data cleaning, exploratory analysis, and forensic-style investigation on datasets.",
    icon: FaDatabase,
    color: "from-green-500 to-teal-500",
  },
];

const strengths = [
  {
    title: "App Development",
    description:
      "Built functional mobile & web apps using Flutter, Django, and modern UI practices.",
  },
  {
    title: "Problem-Solving",
    description:
      "Strong at analyzing problems and writing efficient, optimized code.",
  },
  {
    title: "Technical Adaptability",
    description:
      "Quick learner, comfortable with new tools, frameworks, and technologies.",
  },
  {
    title: "Team Collaboration",
    description:
      "Communicates clearly and works effectively in team environments.",
  },
];

function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative">
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
              Achievements
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-outfit font-bold mt-3 text-white"
            >
              Certifications & <span className="gradient-text">Strengths</span>
            </motion.h2>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: index * 0.15 + 0.2 }}
                className="group gradient-border card-hover"
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <cert.icon className="text-xl text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-outfit font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary-400 mb-2">{cert.issuer}</p>
                  <p className="text-xs text-slate-500 mb-4">{cert.date}</p>
                  <p className="text-sm text-slate-400 flex-grow">
                    {cert.description}
                  </p>

                  {/* Badge */}
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-700/50">
                    <HiBadgeCheck className="text-green-400" />
                    <span className="text-xs text-slate-400">
                      Verified Certificate
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-outfit font-semibold text-center text-white mb-8 flex items-center justify-center gap-2">
              <HiLightningBolt className="text-primary-400" />
              Core Strengths
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass rounded-xl p-5 text-center"
                >
                  <h4 className="font-semibold text-white mb-2">
                    {strength.title}
                  </h4>
                  <p className="text-sm text-slate-400">
                    {strength.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;
