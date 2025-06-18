import StarryBackground from '@/components/StarryBackground';
import Container from '@/components/Container';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <StarryBackground />
      <main className="relative z-10 min-h-screen py-12">
        <Container>
          {/* NO TOP NAVIGATION OR LOGO */}
          
          <h1 className="contact-heading mb-12">
            CONTACT
          </h1>

          <div className="max-w-3xl mx-auto px-4 text-center space-y-8">
            <p className="contact-body-text">
              If you&apos;re feeling the nudge towards any one of the 5 Pathways, I invite you 
              to indicate your interest via the form below, and I&apos;ll be in touch within 48 
              hours.
            </p>

            <div className="my-8">
              <Link 
                href="/interest-form" 
                className="underline-link"
              >
                I&apos;m Ready - Take me to the Interest Form
              </Link>
            </div>

            <p className="contact-body-text">
              Some of us love the idea of growing and doing mindset work together. 
              If Group Coaching sessions are your jam, I host these pathways as 
              workshops as well. If you&apos;re interested and see how they could elevate your 
              relationship dynamics at work, family, marriage or friendships, gather your 
              friends, team, spouse, date and drop me an email, and I&apos;ll be in touch.
            </p>
          </div>

          <div className="flex justify-center gap-8 mt-12 mb-12">
            <a 
              href="https://www.instagram.com/her_intuitionlab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            
            <a 
              href="mailto:herintuitionlab@gmail.com" 
              className="text-cream hover:text-white transition-colors"
              aria-label="Email"
            >
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>

          {/* Navigation only at bottom */}
          <Navigation />
          
          <Footer />
        </Container>
      </main>
    </>
  );
}