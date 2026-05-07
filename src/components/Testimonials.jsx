import { motion } from 'framer-motion';

const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Product Manager at IIE',
    text: 'Working with them completely transformed our product. The user research was incredibly deep, and the resulting UI was not only beautiful but increased our conversion rate by 40%.'
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Founder of IIE',
    text: 'A rare mix of strategic UX thinking and brilliant visual design. They took our complex requirements and distilled them into an elegant, intuitive mobile experience.'
  },
  {
    id: 3,
    name: 'Emily Rivera',
    role: 'Creative Director',
    text: 'The design system they built for us is a masterpiece. It scales perfectly across all our platforms and has saved our engineering team hundreds of hours.'
  }
];

const Testimonials = () => {
  return (
    <section className="section" style={{ minHeight: '80vh' }}>
      <div className="container">
        <h2 style={{ fontSize: 'clamp(2.2rem, 8vw, 5rem)', fontWeight: 800, lineHeight: 1, marginBottom: '60px', wordBreak: 'break-word' }}>CLIENT <br /> FEEDBACK</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '30px' }}>
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, scale: { duration: 0.2 } }}
              style={{
                padding: '40px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.9, marginBottom: '30px', fontStyle: 'italic' }}>
                "{testimonial.text}"
              </p>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '5px' }}>{testimonial.name}</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.5 }}>{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
