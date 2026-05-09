import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import mobileUiImg from '../assets/mobile-ui.png';

const projectsData = [
  {
    id: 1,
    title: 'Decision Tree',
    category: 'UX Research',
    description: 'Research and analysis of a decision tree for a mobile application.',
    image: 'https://www.cfoselections.com/hubfs/when%20to%20use%20a%20decision%20tree%20for%20business%20planning.png',
    span: 'large',
    link: 'https://www.figma.com/board/HO3310jGrVEOEooaw2OpFV/UX?node-id=0-188&t=izyQrWyRvCBhRso0-0'
  },
  {
    id: 2,
    title: 'FASHION APP',
    category: 'Mobile UX/UI',
    description: 'End-to-end product design from user personas to high-fidelity prototyping, creating an intuitive daily habit tracker.',
    image: mobileUiImg,
    span: 'medium',
    link: 'https://www.figma.com/proto/3i2q3s6ldc7QqaIfG58ot3/Ui-fashoin?node-id=93-52&p=f&t=Ytc2bxsJ4G8Zr7P6-0&scaling=min-zoom&content-scaling=fixed&page-id=67%3A1652&starting-point-node-id=93%3A52&show-proto-sidebar=1'
  },
  {
    id: 3,
    title: 'E-COMMERCE CHECKOUT',
    category: 'CRO & Usability',
    description: 'Identifying friction points through usability testing and redesigning the checkout flow.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format&fit=crop',
    span: 'small',
    link: 'https://www.figma.com/design/ZP8Xisjw4sUJYOc9B2uvRa/Shoppe---eCommerce-Clothing-Fashion-Store-Multi-Purpose-UI-Mobile-App-Design--Community-?node-id=0-1&t=1lUy0I34zZnzEVrx-0'
  },
  {
    id: 4,
    title: 'SAAS DESIGN SYSTEM',
    category: 'Design Systems',
    description: 'Building a scalable and accessible component library in Figma for a B2B platform.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    span: 'small',
    link: 'https://www.figma.com/design/Cn4LIKlP0BRa8UrExLd72X/Apple-IOS-16-UI-Kit--Community-?node-id=0-1&t=Lxy8ydwcR670Vs0w-0'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section" style={{ minHeight: '100vh', padding: '100px 0' }}>
      <div className="container">
        <h2 style={{ fontSize: 'clamp(2rem, 8vw, 2.5rem)', marginBottom: '1rem' }}>PROJECTS</h2>
        <p style={{ opacity: 0.5, maxWidth: '600px', marginBottom: '3rem', fontSize: '1.2rem' }}>
          A collection of digital products and experiences built with focus on modern aesthetics and usability.
        </p>
        
        <div className="bento-grid">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id} 
              className={`bento-item bento-${project.span}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              data-cursor="hover"
              onClick={() => window.open(project.link || '#', '_blank')}
              style={{ cursor: 'pointer' }}
            >
              <div className="bento-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div>
                  <div className="bento-category">{project.category}</div>
                  <h3 className="bento-title">{project.title}</h3>
                </div>
                {project.span === 'large' && (
                  <p className="bento-description">{project.description}</p>
                )}
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.8, paddingTop: '20px' }}>
                  View Project <ArrowUpRight size={16} />
                </div>
              </div>
              
              <div className="bento-image">
                <img src={project.image} alt={project.title} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
