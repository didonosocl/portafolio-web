'use client';

import React, { useState } from 'react';
import { Container, Section } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { PersonalInfo, ContactFormData } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactProps {
  personalInfo: PersonalInfo;
}

/**
 * Sección de Contacto con formulario funcional
 */
export const Contact: React.FC<ContactProps> = ({ personalInfo }) => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
    phone: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simular envío del formulario
      // Aquí puedes integrar con tu API de backend o servicio como Formspree, Netlify Forms, etc.
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        company: '',
        phone: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <Section id="contact" background="muted">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t('contact.subtitle')}
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {t('contact.info.title')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    📧
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{t('contact.info.email')}</p>
                    <a href={`mailto:${personalInfo.email}`} 
                       className="text-blue-600 dark:text-blue-400 hover:underline">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                {personalInfo.phone && (
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                      📱
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{t('contact.info.phone')}</p>
                      <a href={`tel:${personalInfo.phone}`} 
                         className="text-blue-600 dark:text-blue-400 hover:underline">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    📍
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{t('contact.info.location')}</p>
                    <p className="text-gray-600 dark:text-gray-300">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                {t('contact.info.social')}
              </h4>
              <div className="flex gap-4">
                {personalInfo.socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg 
                             flex items-center justify-center text-gray-600 
                             dark:text-gray-400 hover:bg-blue-600 hover:text-white
                             transition-colors duration-200"
                    aria-label={link.name}
                  >
                    <div className="w-5 h-5" dangerouslySetInnerHTML={{ __html: link.icon }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                {t('contact.info.responseTime')}
              </h4>
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{t('contact.info.responseMessage')}</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {t('contact.form.title')}
            </h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg">
                <p className="text-green-800 dark:text-green-200 font-medium">
                  {t('contact.success')}
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg">
                <p className="text-red-800 dark:text-red-200 font-medium">
                  {t('contact.error')}
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 
                             rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 
                             rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 
                             rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder={t('contact.form.companyPlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 
                             rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.subject')} *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 
                           rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder={t('contact.form.subjectPlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 
                           rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                ></textarea>
              </div>
              
              <Button
                type="submit"
                size="lg"
                loading={isSubmitting}
                disabled={!formData.name || !formData.email || !formData.subject || !formData.message}
                className="w-full"
              >
                {isSubmitting ? t('contact.sending') : t('contact.send')}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;