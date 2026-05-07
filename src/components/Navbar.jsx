import { motion } from 'framer-motion';

const Navbar = () => {
  const handleScroll = (e, target) => {
    e.preventDefault();

    if (target === 'top') {
      if (window.lenis) window.lenis.scrollTo(0, { duration: 1.5 });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(target);
    if (element) {
      const maxScroll = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight;
      const targetY = element.getBoundingClientRect().top + window.scrollY - 80; // 80px offset for the navbar
      const y = Math.min(targetY, maxScroll);

      if (window.lenis) {
        window.lenis.scrollTo(y, { duration: 1.5 });
      } else {
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="navbar"
    >
      <div className="navbar-container">
        <a href="#" onClick={(e) => handleScroll(e, 'top')} className="navbar-logo">
          KARTHIK PORTFOLIO
        </a>
        <div className="navbar-links">
          <a href="#projects" onClick={(e) => handleScroll(e, '#projects')}>Projects</a>
          <a href="#about" onClick={(e) => handleScroll(e, '#about')}>About</a>
          <a href="#skills" onClick={(e) => handleScroll(e, '#skills')}>Skills</a>
          <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
