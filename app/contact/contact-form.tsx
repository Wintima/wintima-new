'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, CheckCircle, Send } from 'lucide-react';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;
type SubmitStatus = 'idle' | 'success' | 'error';

interface ContactFormProps {
  contactEmail: string;
}

const cooldownMs = 10000;
const formEndpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

export function ContactForm({ contactEmail }: ContactFormProps) {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [cooldownUntil, setCooldownUntil] = useState(0);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  });

  useEffect(() => {
    return () => {
      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }
    };
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    if (Date.now() < cooldownUntil) {
      setSubmitStatus('error');
      return;
    }

    setSubmitStatus('idle');

    try {
      if (formEndpoint) {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Contact form submission failed');
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setSubmitStatus('success');
      setCooldownUntil(Date.now() + cooldownMs);

      resetTimer.current = setTimeout(() => {
        reset();
        setSubmitStatus('idle');
      }, 3000);
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <Card className="border-wintima-maroon/10 rounded-lg shadow-sm">
      <CardContent className="p-6 sm:p-8">
        <div aria-live="polite">
          {submitStatus === 'success' && (
            <div className="mb-6 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-700" aria-hidden="true" />
              <p className="text-sm font-medium text-green-800">
                Thank you! We&apos;ll get back to you soon.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-700" aria-hidden="true" />
              <p className="text-sm font-medium text-red-800">
                Something went wrong. Please try emailing us directly at{' '}
                <a href={`mailto:${contactEmail}`} className="underline">
                  {contactEmail}
                </a>
              </p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          <div>
            <label htmlFor="name" className="text-wintima-charcoal mb-2 block text-sm font-medium">
              Name <span aria-hidden="true">*</span>
            </label>
            <Input
              id="name"
              autoComplete="name"
              aria-required="true"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              disabled={isSubmitting}
              className="min-h-11"
              {...register('name')}
            />
            {errors.name && (
              <p id="name-error" className="mt-2 text-sm text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="text-wintima-charcoal mb-2 block text-sm font-medium">
              Email <span aria-hidden="true">*</span>
            </label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              disabled={isSubmitting}
              className="min-h-11"
              {...register('email')}
            />
            {errors.email && (
              <p id="email-error" className="mt-2 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="subject"
              className="text-wintima-charcoal mb-2 block text-sm font-medium"
            >
              Subject <span aria-hidden="true">*</span>
            </label>
            <Input
              id="subject"
              aria-required="true"
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              disabled={isSubmitting}
              className="min-h-11"
              {...register('subject')}
            />
            {errors.subject && (
              <p id="subject-error" className="mt-2 text-sm text-red-600">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-wintima-charcoal mb-2 block text-sm font-medium"
            >
              Message <span aria-hidden="true">*</span>
            </label>
            <Textarea
              id="message"
              aria-required="true"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              disabled={isSubmitting}
              className="min-h-32"
              {...register('message')}
            />
            {errors.message && (
              <p id="message-error" className="mt-2 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-wintima-maroon hover:bg-wintima-maroon/90 min-h-11 w-full text-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-8"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Sending
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Message
              </span>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
