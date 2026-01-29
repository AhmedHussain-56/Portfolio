import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiCode, HiLightningBolt, HiAcademicCap } from "react-icons/hi";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: HiCode, value: "10+", label: "Projects Built" },
    { icon: HiLightningBolt, value: "3+", label: "Technologies" },
    { icon: HiAcademicCap, value: "8.08", label: "CGPA" },
  ];

  return (
    <section id="about" className="section-padding relative">
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
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-outfit font-bold mt-3 text-white"
            >
              Who I <span className="gradient-text">Am</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="gradient-border p-8 relative overflow-hidden">
                {/* Abstract Visual */}
                <div className="aspect-square rounded-xl bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center relative overflow-hidden">
                  {/* Animated Circles */}
                  <motion.div
                    className="absolute w-48 h-48 border-2 border-primary-500/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute w-64 h-64 border-2 border-secondary-500/20 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute w-80 h-80 border-2 border-accent-500/10 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Center Icon */}
                  <div className="relative z-10 text-center">
                    <motion.div
                      className="text-8xl font-outfit font-bold gradient-text"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      AH
                    </motion.div>
                    <p className="text-slate-400 mt-2">Developer</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 glass rounded-xl p-4 glow-purple"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 0.5 }}
              >
                <p className="text-3xl font-bold gradient-text">4+</p>
                <p className="text-xs text-slate-400">Years Learning</p>
              </motion.div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-outfit font-semibold mb-4 text-white">
                Building the Future with Code
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                I'm a final-year B.Tech CSE student at Sree Chaitanya College of
                Engineering, Karimnagar, with a passion for building innovative
                solutions. I specialize in Flutter development and have a keen
                interest in AI & Machine Learning.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                With experience in mobile and web application development, I
                focus on creating clean, performant, and user-friendly
                experiences. I'm constantly learning new technologies and enjoy
                solving complex problems through code.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="glass rounded-xl p-4 text-center card-hover"
                  >
                    <stat.icon className="text-2xl text-primary-400 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
