import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPrivacyText, setShowPrivacyText] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedTerms) {
      setErrorMessage('Debes aceptar el acuerdo de confidencialidad para continuar.');
      setSubmitSuccess(false);
      return;
    }
    
    if (!formRef.current) return;
    
    try {
      setIsSubmitting(true);
      setErrorMessage('');
      
      // INSTRUCCIONES: Coloca tus claves reales de EmailJS aquí
      // 1. Ve a https://dashboard.emailjs.com/admin
      // 2. Crea un servicio de email conectado a skaramanziatech@gmail.com
      // 3. Crea una plantilla de email con las variables: {{name}}, {{email}}, {{subject}}, {{message}}
      // 4. Copia los IDs y reemplázalos aquí:
      
      await emailjs.sendForm(
        'service_hnig9cc', // Ejemplo: 'service_abc123'
        'template_ifbdk5v', // Ejemplo: 'template_xyz789'
        formRef.current,
        'QiMzqkCxqMFl1k2pH'  // Ejemplo: 'Abc123DEF456ghi789JKL'
      );
      
      setSubmitSuccess(true);
      formRef.current.reset();
      setAcceptedTerms(false);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitSuccess(false);
      setErrorMessage('Ha ocurrido un error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
      
      // Resetear el estado después de 5 segundos
      setTimeout(() => {
        setSubmitSuccess(null);
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <motion.form
      ref={formRef}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <FormInput
        label="Nombre"
        name="name"
        type="text"
        placeholder="Tu nombre"
        required
      />
      
      <FormInput
        label="Email"
        name="email"
        type="email"
        placeholder="tu@email.com"
        required
      />
      
      <FormInput
        label="Asunto"
        name="subject"
        type="text"
        placeholder="¿Sobre qué quieres hablar?"
        required
      />
      
      <FormTextarea
        label="Mensaje"
        name="message"
        placeholder="Cuéntanos más sobre tu proyecto..."
        required
      />
      
      {/* Campo oculto para el email destino */}
      <input type="hidden" name="to_email" value="skaramanziatech@gmail.com" />
      
      {/* Acuerdo de confidencialidad */}
      <div className="flex items-start gap-3">
        <input 
          type="checkbox" 
          id="confidentiality"
          className="mt-1"
          checked={acceptedTerms}
          onChange={(e) => setAcceptedTerms(e.target.checked)}
        />
        <div className="text-gray-300 text-sm">
          <div className="flex items-center gap-1 cursor-pointer" 
               onClick={() => setShowPrivacyText(!showPrivacyText)}>
            <label htmlFor="confidentiality" className="cursor-pointer">
              Acepto el acuerdo de confidencialidad y la política de privacidad.
            </label>
            {showPrivacyText ? (
              <ChevronUp className="w-4 h-4 text-[#00f2ff]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#00f2ff]" />
            )}
          </div>
          
          {showPrivacyText && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2 p-3 bg-white/5 rounded-lg">
              <p>Su información será tratada con el máximo cuidado y no será compartida 
              con terceros sin su consentimiento previo.</p>
              <p className="mt-2">Al enviar este formulario, usted acepta que podemos utilizar 
              su información de contacto para responder a sus consultas y proporcionarle 
              información relevante sobre nuestros servicios.</p>
              <p className="mt-2">Puede solicitar la eliminación de sus datos en cualquier momento 
              contactándonos directamente.</p>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Mensaje de error o éxito */}
      {submitSuccess !== null && (
        <div className={`flex items-center gap-2 p-3 rounded-lg ${
          submitSuccess ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'
        }`}>
          {submitSuccess ? (
            <>
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>¡Mensaje enviado correctamente! Te contactaremos pronto.</span>
            </>
          ) : (
            <>
              <AlertCircle className="w-5 h-5 text-red-400" />
              <span>{errorMessage || 'Ha ocurrido un error al enviar el mensaje.'}</span>
            </>
          )}
        </div>
      )}
      
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={!isSubmitting ? { scale: 1.02 } : undefined}
        whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
        className={`w-full px-8 py-4 rounded-lg text-black font-semibold flex items-center justify-center gap-2 transition-all ${isSubmitting 
          ? 'bg-gray-500/50 cursor-not-allowed' 
          : 'bg-gradient-to-r from-[#00f2ff] to-[#00f2ff]/80 hover:from-[#00f2ff]/90 hover:to-[#00f2ff]/70 shadow-[0_0_20px_rgba(0,242,255,0.3)]'}`}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        <Send className="w-4 h-4" />
      </motion.button>
    </motion.form>
  );
};