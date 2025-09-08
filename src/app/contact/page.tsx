"use client";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "../../components/AnimatedSection";
import { EmailIcon, LinkedInIcon, GitHubIcon } from "../../components/icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const formRef = useRef<HTMLFormElement>(null);

  // Inicializar EmailJS
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey && publicKey !== "your_public_key") {
      emailjs.init(publicKey);
      console.log("EmailJS inicializado correctamente");
    } else {
      console.warn("EmailJS Public Key no configurada. El formulario no funcionará.");
    }
  }, []);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es requerido";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar formulario antes de enviar
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    setSubmitStatus("idle");
    setErrors({});

    try {
      // Configuración de EmailJS desde variables de entorno
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Verificar que las credenciales estén configuradas
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Credenciales de EmailJS no configuradas. Verifica las variables de entorno.");
      }

      console.log("Enviando email con:", {
        serviceId,
        templateId,
        publicKey: `${publicKey.substring(0, 8)}...`
      });

      // Agregar fecha actual al formulario
      const formDataWithDate = new FormData(formRef.current!);
      formDataWithDate.append('date', new Date().toLocaleString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Argentina/Buenos_Aires'
      }));

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          date: new Date().toLocaleString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'America/Argentina/Buenos_Aires'
          })
        },
        publicKey
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Limpiar el formulario después del éxito
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      console.error("Error details:", {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'No configurado',
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'No configurado',
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.substring(0, 8)}...` : 'No configurado'
      });
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-16 pb-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Contacto
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Me encantaría escucharlo! 
            Estoy disponible para colaboraciones y oportunidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Información de contacto */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-white">Información de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <EmailIcon size={24} className="text-blue-400" />
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a 
                      href="mailto:sncarp2003@gmail.com" 
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      sncarp2003@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-gray-300 text-sm">Ubicación</p>
                    <p className="text-white">San Miguel de Tucumán, Argentina</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <LinkedInIcon size={24} className="text-blue-400" />
                  <div>
                    <p className="text-gray-300 text-sm">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/santinavarro-dev/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      santinavarro-dev
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <GitHubIcon size={24} className="text-blue-400" />
                  <div>
                    <p className="text-gray-300 text-sm">GitHub</p>
                    <a 
                      href="https://github.com/santinava06" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      santinava06
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-white">Disponibilidad</h3>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-gray-300">Disponible para proyectos freelance</span>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="animate-slide-in-right">
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-white">Envíame un mensaje</h3>
              
              {/* Status Messages */}
              {submitStatus === "success" && (
                <AnimatedSection animation="fade-in" className="mb-6 p-4 bg-green-500/20 border border-green-500/30 text-green-300 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">✅</span>
                    <div>
                      <p className="font-semibold">¡Mensaje enviado exitosamente!</p>
                      <p className="text-sm text-green-200">Te responderé en las próximas 24 horas.</p>
                    </div>
                  </div>
                </AnimatedSection>
              )}
              
              {submitStatus === "error" && (
                <AnimatedSection animation="fade-in" className="mb-6 p-4 bg-red-500/20 border border-red-500/30 text-red-300 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <span className="text-red-400">❌</span>
                    <div>
                      <p className="font-semibold">Error al enviar el mensaje</p>
                      <p className="text-sm text-red-200">Por favor, inténtalo de nuevo o contáctame directamente por email.</p>
                    </div>
                  </div>
                </AnimatedSection>
              )}

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.name ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="Tu nombre"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.email ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.subject ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="¿En qué puedo ayudarte?"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                      errors.message ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 disabled:hover:scale-100 flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando mensaje...
                    </>
                  ) : (
                    <>
                      <span className="mr-2">📧</span>
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 