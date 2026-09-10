import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters.' }),
  serviceType: z.enum([
    'legal_opinion',
    'arbitration_advisory',
    'expert_witness',
    'executive_training',
    'academic_inquiry',
    'media_press'
  ]),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
