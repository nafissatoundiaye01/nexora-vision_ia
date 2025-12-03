'use client';

import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Envoi en cours...' });

    try {
      // Configuration EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Configuration EmailJS manquante. Veuillez vérifier le fichier .env.local');
      }

      // Récupérer tous les emails depuis les variables d'environnement
      const mainEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || '';
      const ccEmailsString = process.env.NEXT_PUBLIC_CONTACT_CC || '';

      if (!mainEmail) {
        throw new Error('Email principal non configuré');
      }

      // Paramètres du template avec CC
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: mainEmail,
        cc_emails: ccEmailsString // Emails en copie séparés par des virgules
      };

      // Envoi d'UN SEUL email avec les CC
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setFormStatus({
          type: 'success',
          message: 'Merci pour votre message ! La team NEXORA vous répondra sous peu. 🚀'
        });

        // Réinitialiser le formulaire
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        // Masquer le message de succès après 5 secondes
        setTimeout(() => {
          setFormStatus({ type: 'idle', message: '' });
        }, 5000);
      } else {
        throw new Error('L\'email n\'a pas pu être envoyé');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setFormStatus({
        type: 'error',
        message: 'Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter directement par email.'
      });

      // Masquer le message d'erreur après 7 secondes
      setTimeout(() => {
        setFormStatus({ type: 'idle', message: '' });
      }, 7000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Envoyez-nous un Message</h3>

      {/* Message de statut */}
      {formStatus.message && (
        <div className={`mb-6 p-4 rounded-lg ${
          formStatus.type === 'success' ? 'bg-green-100 border border-green-300 text-green-800' :
          formStatus.type === 'error' ? 'bg-red-100 border border-red-300 text-red-800' :
          'bg-blue-100 border border-blue-300 text-blue-800'
        }`}>
          <div className="flex items-center space-x-2">
            {formStatus.type === 'success' && (
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            )}
            {formStatus.type === 'error' && (
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            )}
            {formStatus.type === 'loading' && (
              <svg className="animate-spin w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            <p className="font-medium">{formStatus.message}</p>
          </div>
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nom complet"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={formStatus.type === 'loading'}
            className="w-full px-4 py-3 rounded-lg border text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition disabled:bg-slate-100 disabled:cursor-not-allowed"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={formStatus.type === 'loading'}
            className="w-full px-4 py-3 rounded-lg border text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition disabled:bg-slate-100 disabled:cursor-not-allowed"
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Sujet"
          value={formData.subject}
          onChange={handleChange}
          required
          disabled={formStatus.type === 'loading'}
          className="w-full px-4 py-3 rounded-lg border text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition disabled:bg-slate-100 disabled:cursor-not-allowed"
        />
        <textarea
          name="message"
          placeholder="Votre message..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          disabled={formStatus.type === 'loading'}
          className="w-full px-4 py-3 rounded-lg border text-slate-900 border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none disabled:bg-slate-100 disabled:cursor-not-allowed"
        ></textarea>
        <button
          type="submit"
          disabled={formStatus.type === 'loading'}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {formStatus.type === 'loading' ? 'Envoi en cours...' : 'Envoyer le Message'}
        </button>
      </form>
    </div>
  );
}
