import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

export const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email',
      details: 'skaramanziatech@gmail.com',
      link: 'mailto:skaramanziatech@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      details: 'Argentina',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      title: 'Instagram',
      details: '@skaramanz.ia',
      link: 'https://instagram.com/skaramanz.ia'
    },
    {
      icon: Facebook,
      title: 'Facebook',
      details: 'Skaramanzia',
      link: 'https://www.facebook.com/profile.php?id=61575761200618'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      details: 'Skaramanzia',
      link: 'https://www.linkedin.com/in/skaramanzia/'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {contactDetails.map((detail, index) => (
        <ContactItem key={`contact-${index}`} item={detail} delay={index * 0.1} />
      ))}
      
      <div className="pt-4">
        <h3 className="text-lg font-semibold text-white mb-4">Síguenos en redes sociales</h3>
        <div className="space-y-4">
          {socialLinks.map((social, index) => (
            <ContactItem key={`social-${index}`} item={social} delay={(index + 2) * 0.1} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

interface ContactItemProps {
  item: {
    icon: React.ComponentType;
    title: string;
    details: string;
    link: string;
  };
  delay: number;
}

const ContactItem: React.FC<ContactItemProps> = ({ item, delay }) => {
  const Icon = item.icon;
  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
    >
      <div className="p-2 rounded-lg bg-[#00f2ff]/10">
        <Icon className="w-6 h-6 text-[#00f2ff]" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
        <p className="text-white/70">{item.details}</p>
      </div>
    </motion.a>
  );
};