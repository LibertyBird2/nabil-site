'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormValues } from '@/lib/zod-schemas';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const t = useTranslations('contact');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      serviceType: 'legal_opinion',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate server submission
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log('Form Submitted successfully:', data);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-xl text-center space-y-4 animate-fade-in">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-serif text-xl font-bold text-emerald-900">Message Received</h3>
        <p className="text-sm text-emerald-700 max-w-md mx-auto leading-relaxed">
          {t('success')}
        </p>
        <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
      <h3 className="font-serif text-xl font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100">
        {t('formTitle')}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          id="name"
          label={t('name')}
          placeholder={t('namePlaceholder')}
          error={errors.name?.message}
          {...register('name')}
        />

        <Input
          id="email"
          type="email"
          label={t('email')}
          placeholder={t('emailPlaceholder')}
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          id="subject"
          label={t('subject')}
          placeholder={t('subjectPlaceholder')}
          error={errors.subject?.message}
          {...register('subject')}
        />

        <div className="w-full space-y-1.5">
          <label htmlFor="serviceType" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
            {t('serviceType')}
          </label>
          <select
            id="serviceType"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-slate-900 text-sm focus:bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 focus:outline-none transition-all"
            {...register('serviceType')}
          >
            <option value="legal_opinion">Formal Legal Opinion</option>
            <option value="arbitration_advisory">Arbitration Advisory & Expert Witness</option>
            <option value="executive_training">Executive Legal Workshop</option>
            <option value="academic_inquiry">Academic Research Consultation</option>
            <option value="media_press">Media & Press Interview</option>
          </select>
          {errors.serviceType && <p className="text-xs text-red-600 font-medium">{errors.serviceType.message}</p>}
        </div>
      </div>

      <Textarea
        id="message"
        label={t('message')}
        placeholder={t('messagePlaceholder')}
        rows={5}
        error={errors.message?.message}
        {...register('message')}
      />

      <div className="pt-2">
        <Button variant="gold" size="lg" type="submit" disabled={isSubmitting} className="w-full sm:w-auto min-w-[200px]">
          {isSubmitting ? (
            <span>{t('sending')}</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>{t('submit')}</span>
            </>
          )}
        </Button>
      </div>
    </form>
  );
};
