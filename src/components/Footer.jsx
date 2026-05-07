import { Mail, MessageCircle, Phone } from 'lucide-react';

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const DribbbleIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72"></path>
    <path d="M20.36 8.36c-3.72 4.35-8.94 5.83-16.01 5.2"></path>
    <path d="M8.16 21.04c3.33-4.34 8.39-5.83 15.46-5.2"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer id="footer" style={{ padding: '60px 0 40px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px' }}>
          <a href="mailto:karthikbe9047@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', color: 'white' }}>
            <Mail size={24} /> Email
          </a>
          <a href="https://wa.me/919047524509" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', color: 'white' }}>
            <MessageCircle size={24} /> Whatsapp
          </a>
          <a href="tel:+919047524509" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', color: 'white' }}>
            <Phone size={24} /> Call me
          </a>
          <a href="https://www.instagram.com/kd_boy_karthix" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', color: 'white' }}>
            <InstagramIcon size={24} /> Instagram
          </a>
          <a href="https://dribbble.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', color: 'white' }}>
            <DribbbleIcon size={24} /> Dribbble
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '30px', marginTop: '30px', width: '100%', opacity: 0.5 }}>
          <span>© 2026 UX/UI Designer</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
