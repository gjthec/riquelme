
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-900 text-center space-y-4">
      <div className="flex justify-center gap-6 text-gray-400">
        <a href="#" className="hover:text-white transition-colors">Instagram</a>
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
      </div>
      <p className="text-[10px] text-gray-600 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Riquelme Emanuel. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
