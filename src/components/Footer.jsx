import { motion } from "framer-motion";
import { HiHeart } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-dark-800 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="text-3xl font-outfit font-bold gradient-text inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Ahmed Hussain
            </motion.a>
            <p className="text-slate-400 mt-2 text-sm">
              Flutter Developer | AI & ML Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            <motion.a
              href="https://github.com/AhmedHussain-56"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-dark-700 transition-colors"
            >
              <FaGithub className="text-lg" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ahmed-hussain-34378b239"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-dark-700 transition-colors"
            >
              <FaLinkedin className="text-lg" />
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-slate-500 text-sm">
            © {currentYear} Ahmed Hussain. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Made with <HiHeart className="text-accent-500" /> using React &
            Tailwind
          </p>
        </div>
      </div>

      {/* Gradient Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500" />
    </footer>
  );
}

export default Footer;
