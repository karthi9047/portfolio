import { motion } from 'framer-motion';
import { PenTool, Layout, MonitorSmartphone, Layers, Users, MousePointerClick, Globe, Box, Smartphone, Component } from 'lucide-react';

const CanvaIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <text x="12" y="16" fontSize="12" fontWeight="700" textAnchor="middle" fill="currentColor" stroke="none">C</text>
  </svg>
);

const PhotoshopIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="4" />
    <text x="12" y="16" fontSize="10" fontWeight="700" textAnchor="middle" fill="currentColor" stroke="none">Ps</text>
  </svg>
);

const IllustratorIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="4" />
    <text x="12" y="16" fontSize="10" fontWeight="700" textAnchor="middle" fill="currentColor" stroke="none">Ai</text>
  </svg>
);

const skills = [
  { name: "Figma", icon: <PenTool size={18} /> },
  { name: "UI/UX Design", icon: <Layout size={18} /> },
  { name: "Canva", icon: <CanvaIcon size={18} /> },
  { name: "Photoshop", icon: <PhotoshopIcon size={18} /> },
  { name: "Illustrator", icon: <IllustratorIcon size={18} /> },
  { name: "Wireframing", icon: <MonitorSmartphone size={18} /> },
  { name: "Prototyping", icon: <Layers size={18} /> },
  { name: "User Research", icon: <Users size={18} /> },
  { name: "Interaction Design", icon: <MousePointerClick size={18} /> },
  { name: "Web Design", icon: <Globe size={18} /> },
  { name: "Framer", icon: <Box size={18} /> },
  { name: "Responsive Design", icon: <Smartphone size={18} /> },
  { name: "Design Systems", icon: <Component size={18} /> }
];

const Skills = () => {
  return (
    <section id="skills" className="section" style={{ minHeight: '60vh' }}>
      <div className="container">
        <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 800, lineHeight: 1, marginBottom: '60px' }}>SKILLS</h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)', cursor: 'pointer' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, scale: { duration: 0.2 } }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '15px 30px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50px',
                fontSize: '1.2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#fff'
              }}
            >
              {skill.icon}
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
