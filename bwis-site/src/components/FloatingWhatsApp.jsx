import React from 'react';

const FloatingWhatsApp = () => {
  const phoneNumber = '94715500900'; // without leading +
  const message = encodeURIComponent('Hello! I would like to know more about BWIS Nittambuwa.');
  const href = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a href={href} className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <img src="/images/Whatsapp.png" alt="WhatsApp" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </a>
  );
};

export default FloatingWhatsApp;
