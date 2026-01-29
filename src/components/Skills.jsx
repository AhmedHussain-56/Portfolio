import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiFlutter,
  SiDart,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiDjango,
  SiStreamlit,
  SiGithub,
  SiFigma,
  SiAndroidstudio,
  SiC,
  SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

const skillCategories = [
  {
    title: "Languages",
    color: "from-primary-500 to-primary-600",
    skills: [
      { name: "C", icon: SiC },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "Dart", icon: SiDart },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    title: "Frameworks",
    color: "from-secondary-500 to-secondary-600",
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Django", icon: SiDjango },
      { name: "Streamlit", icon: SiStreamlit },
      { name: "React", icon: TbBrandReactNative },
    ],
  },
  {
    title: "Web Technologies",
    color: "from-accent-500 to-accent-600",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    title: "Tools & Databases",
    color: "from-green-500 to-emerald-600",
    skills: [
      { name: "Android Studio", icon: SiAndroidstudio },
      { name: "Git/GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
      { name: "SQL", icon: SiMysql },
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
              Technologies and tools I use to bring ideas to life
            </motion.p>
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8"
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
