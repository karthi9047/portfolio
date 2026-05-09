import { motion } from 'framer-motion';
import karthikImg from '../assets/karthik.jpeg';

const About = () => {
  return (
    <section id="about" className="section" style={{ minHeight: '80vh', backgroundColor: '#111' }}>
      <div className="container">
        <div style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>ABOUT ME</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.8 }}>
              I am a passionate UI/UX Designer dedicated to creating seamless and engaging digital products. 
              I specialize in bridging the gap between user needs and business goals through deep research, 
              strategic wireframing, and interactive prototyping. I don't just design screens—I craft holistic user journeys.
            </p>
          </div>
          <div style={{ flex: '1 1 300px', minWidth: '280px', position: 'relative' }}>
            <motion.div
              whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
              style={{
                width: '100%',
                paddingBottom: '100%',
                backgroundColor: '#222',
                borderRadius: '50%',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <img
                src={karthikImg}
                alt="Portrait"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'luminosity', opacity: 0.8 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
