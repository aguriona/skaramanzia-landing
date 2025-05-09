import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  // Verificar si el usuario ya aceptó las cookies
  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Mostrar el banner después de un breve delay para mejor UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };
  
  const handleDecline = () => {
    // En una implementación real, esto podría deshabilitar cookies no esenciales
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/80 backdrop-blur-md border-t border-[#00f2ff]/30"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <h3 className="text-white text-lg font-semibold mb-2">Política de cookies</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Este sitio utiliza cookies para mejorar su experiencia de navegación. 
                  Al hacer clic en "Aceptar", consiente el uso de todas las cookies.
                </p>
                
                <div 
                  className="flex items-center text-[#00f2ff] text-sm cursor-pointer mb-2"
                  onClick={() => setShowDetails(!showDetails)}
                >
                  <span>Más información</span>
                  {showDetails ? (
                    <ChevronUp className="ml-1 w-4 h-4" />
                  ) : (
                    <ChevronDown className="ml-1 w-4 h-4" />
                  )}
                </div>
                
                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-white/5 p-3 rounded-lg text-sm text-gray-300 mb-3">
                        <h4 className="font-medium text-white mb-1">¿Qué cookies utilizamos?</h4>
                        <p className="mb-2">
                          <strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio.
                        </p>
                        <p className="mb-2">
                          <strong>Cookies analíticas:</strong> Nos ayudan a entender cómo interactúas con el sitio web.
                        </p>
                        <p className="mb-2">
                          <strong>Cookies de marketing:</strong> Utilizadas para rastrear a los visitantes en los sitios web.
                        </p>
                        <p>
                          Para más información, consulte nuestra política de privacidad completa.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="flex gap-3 items-center">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 border border-gray-500 rounded-md text-gray-300 hover:bg-white/5 text-sm transition-colors"
                >
                  Rechazar
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 bg-[#00f2ff]/20 border border-[#00f2ff] rounded-md text-white hover:bg-[#00f2ff]/30 text-sm transition-colors"
                >
                  Aceptar
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
