import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiBriefcase,
  HiCalendar,
  HiLocationMarker,
  HiAcademicCap,
} from "react-icons/hi";

const experiences = [
  {
    id: 1,
    title: "Flutter Development Intern",
    company: "Team Up Company",
    location: "IT Tower, Karimnagar",
    period: "Dec 2025 – March 2026",
    description:
      "Designed and implemented Flutter UI screens for a Health Diary application. Collaborated on application development, user-friendly health tracking features, and UI implementation.",
    skills: ["Flutter", "UI/UX", "App Design", "Team Collaboration"],
    current: false,
  },
];

const educationList = [
  {
    id: 1,
    degree: "Bachelor of Technology (B. Tech) - Computer Science Engineering",
    institution: "Sree Chaitanya College of Engineering, Karimnagar",
    period: "Graduated July 2026",
    score: "CGPA: 8.24",
    highlight: true,
  },
  {
    id: 2,
    degree: "Telangana State Board of Intermediate Education",
    institution: "Trinity Junior College, Karimnagar",
    period: "Apr 2022",
    score: "CGPA: 8.9",
    highlight: false,
  },
  {
    id: 3,
    degree: "Telangana Secondary School Certificate (SSC)",
    institution: "Gowtham Model School, Karimnagar",
    period: "May 2020",
    score: "CGPA: 10.0",
    highlight: false,
  },
];

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative">
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
              Experience
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-outfit font-bold mt-3 text-white"
            >
              Work <span className="gradient-text">Experience</span>
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ delay: index * 0.2 + 0.3 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-secondary-500 to-transparent" />

                {/* Timeline Dot */}
                <motion.div
                  className={`absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full ${
                    exp.current
                      ? "bg-primary-500 ring-4 ring-primary-500/20"
                      : "bg-dark-600 border-2 border-primary-500"
                  }`}
                  animate={exp.current ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Content Card */}
                <div className="gradient-border card-hover">
                  <div className="p-6">
                    {/* Current Badge */}
                    {exp.current && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-xs font-medium mb-4">
                        <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse" />
                        Currently Working
                      </span>
                    )}

                    {/* Title & Company */}
                    <h3 className="text-xl font-outfit font-semibold text-white mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-4">
                      <span className="flex items-center gap-1">
                        <HiBriefcase className="text-primary-400" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiLocationMarker className="text-secondary-400" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiCalendar className="text-accent-400" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-dark-700 text-slate-300 border border-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <div className="flex items-center justify-center gap-2 mb-8">
              <HiAcademicCap className="text-3xl text-primary-400" />
              <h3 className="text-2xl font-outfit font-semibold text-center text-white">
                Education
              </h3>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {educationList.map((edu) => (
                <div
                  key={edu.id}
                  className="gradient-border card-hover"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-slate-400 text-sm mt-1">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="md:text-right flex md:flex-col justify-between items-start md:items-end gap-1">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            edu.highlight
                              ? "bg-primary-500/20 text-primary-300 border border-primary-500/30"
                              : "bg-dark-700 text-secondary-400 border border-slate-700"
                          }`}
                        >
                          {edu.score}
                        </span>
                        <p className="text-xs text-slate-500 mt-1">{edu.period}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
