import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { submitRSVP } from '../services/rsvpService';
import toast from 'react-hot-toast';

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isSubmitted) {
      timer = setTimeout(() => setIsSubmitted(false), 3000);
    }

    return () => clearTimeout(timer);
  }, [isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await submitRSVP(formData);

      setIsSubmitted(true);
      setFormData({ firstName: "", lastName: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);

    } catch (error) {
      console.error("Error submitting RSVP:", error);
      toast.error("Ocurrió un error. Intenta nuevamente.", {
        style: {
          borderRadius: '16px',
          background: '#dc2626',
          color: '#fff',
          fontWeight: 'bold',
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-b from-amber-50 to-sky-100">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-amber-700 mb-6"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
        >
          Confirma tu Asistencia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-lg md:text-xl text-sky-700 mb-12"
          style={{ fontFamily: 'Comic Neue, cursive' }}
        >
          ¡Queremos saber que estarás ahí!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-lg font-bold text-amber-700 mb-2"
                  style={{ fontFamily: 'Fredoka, sans-serif' }}
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-sky-400 focus:outline-none transition-colors text-lg"
                  style={{ fontFamily: 'Comic Neue, cursive' }}
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-lg font-bold text-amber-700 mb-2"
                  style={{ fontFamily: 'Fredoka, sans-serif' }}
                >
                  Apellido
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:border-sky-400 focus:outline-none transition-colors text-lg"
                  style={{ fontFamily: 'Comic Neue, cursive' }}
                  placeholder="Tu apellido"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                {isLoading ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <span>Confirmar Asistencia</span>
                    <Send size={24} />
                  </>
                )}
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="mb-6"
              >
                <CheckCircle className="mx-auto text-green-500" size={80} />
              </motion.div>
              <h3
                className="text-3xl font-bold text-sky-600 mb-4"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                ¡Confirmación Recibida!
              </h3>
              <p
                className="text-xl text-gray-700"
                style={{ fontFamily: 'Comic Neue, cursive' }}
              >
                ¡Nos vemos en la fiesta!
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
