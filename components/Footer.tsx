import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, BarChart2 } from 'lucide-react';

const Footer: React.FC = () => {
  const socialIcons = [
    { Icon: Facebook, label: 'Facebook' },
    { Icon: Twitter, label: 'Twitter' },
    { Icon: Instagram, label: 'Instagram' },
    { Icon: Linkedin, label: 'Linkedin' }
  ];

  return (
    <footer className="bg-dark text-white pt-24 pb-12 border-t border-white/10">
      <div className="layout-container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-secondary p-1.5 rounded-lg">
                <BarChart2 className="text-dark w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">ClearPath</span>
            </div>
            <p className="text-blue-100 mb-8 max-w-sm text-base leading-relaxed">
              Helping you navigate the complex world of credit repair with transparency.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social, i) => {
                const Icon = social.Icon;
                return (
                  <a 
                    key={`social-${i}`} 
                    href="#" 
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-dark transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-blue-100/70">
              <li><a href="#" className="hover:text-secondary transition-colors block py-1">About Us</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors block py-1">Services</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors block py-1">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Legal</h4>
            <ul className="space-y-4 text-blue-100/70">
              <li><a href="#" className="hover:text-secondary transition-colors block py-1">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors block py-1">Terms of Service</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors block py-1">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100/40">
          <p>Copyright © 2025 – All Right Reserved</p>
          <p>Designed by khalid aboufaleh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;