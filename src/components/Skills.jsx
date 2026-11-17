import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiPython,
  SiC,
  SiPandas,
  SiNumpy,
  SiDjango,
  SiStreamlit,
  SiGithub,
  SiMysql,
  SiSqlite,
} from "react-icons/si";
import {
  FaDatabase,
  FaFileExcel,
  FaChartLine,
  FaChartPie,
  FaSearch,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TbChartBar } from "react-icons/tb";
import { HiSparkles } from "react-icons/hi";

const skillCategories = [
  {
    title: "Programming Languages",
    color: "from-primary-500 to-primary-600",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: FaDatabase },
      { name: "C", icon: SiC },
    ],
  },
  {
    title: "Data Analytics & EDA",
    color: "from-secondary-500 to-secondary-600",
    skills: [
      { name: "Data Cleaning", icon: HiSparkles },
      { name: "Exploratory Data Analysis (EDA)", icon: FaChartLine },
      { name: "Data Interpretation", icon: FaSearch },
    ],
  },
  {
    title: "Data Visualization",
    color: "from-amber-500 to-orange-600",
    skills: [
      { name: "Power BI", icon: TbChartBar },
      { name: "Microsoft Excel", icon: FaFileExcel },
      { name: "Matplotlib", icon: FaChartPie },
    ],
  },
  {
    title: "Python Data Libraries",
    color: "from-emerald-500 to-teal-600",
    skills: [
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Matplotlib", icon: FaChartPie },
    ],
  },
  {
    title: "Databases & Querying",
    color: "from-blue-500 to-cyan-600",
    skills: [
      { name: "SQL", icon: FaDatabase },
      { name: "SQLite", icon: SiSqlite },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Frameworks & Tools",
    color: "from-purple-500 to-pink-600",
    skills: [
      { name: "Streamlit", icon: SiStreamlit },
      { name: "Django", icon: SiDjango },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VscVscode },
    ],
  },
];

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="section-padding relative">
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
              My Skills
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-outfit font-bold mt-3 text-white"
            >
              Tech <span className="gradient-text">Stack</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 mt-4 max-w-2xl mx-auto"
            >
              Analytical methodologies, querying languages, and visualization tools I use to uncover data insights
            </motion.p>
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="gradient-border p-6 card-hover"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}
                  />
                  <h3 className="text-xl font-outfit font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="glass rounded-xl px-4 py-3 flex items-center gap-2 glass-hover cursor-default"
                    >
                      <skill.icon className="text-xl text-primary-400" />
                      <span className="text-sm font-medium text-slate-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6 }}
            className="mt-12 glass rounded-2xl p-8 text-center"
          >
            <h4 className="text-lg font-outfit font-semibold text-white mb-4">
              Also Experienced With
            </h4>
            <div className="flex flex-wrap justify-center gap-4 text-slate-400">
              {[
                "NLP",
                "Machine Learning",
                "Computer Vision",
                "REST APIs",
                "SQLite",
                "Firebase",
                "Windows",
                "Ubuntu",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-slate-700 text-sm hover:border-primary-500 hover:text-primary-400 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
