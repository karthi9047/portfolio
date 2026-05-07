import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-huge" style={{ mixBlendMode: 'difference' }}>
            UI/UX
            <br />
            <span style={{ color: 'var(--accent-color)', mixBlendMode: 'normal' }}>DESIGNER</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: '2rem', maxWidth: '500px' }}
        >
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.8 }}>
            I design intuitive and aesthetic digital experiences, combining user-centric research with pixel-perfect interface design to solve real problems.
          </p>
        </motion.div>

        {/* Decorative elements for blend modes */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.8, 0.5, 0.8],
            rotate: [0, 90, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))',
            filter: 'blur(60px)',
            zIndex: -1,
            mixBlendMode: 'screen'
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
