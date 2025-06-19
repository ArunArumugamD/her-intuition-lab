import StarryBackground from '@/components/StarryBackground';
import Container from '@/components/Container';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

const sessions = [
  {
    id: 1,
    title: "CLARITY DEEP DIVE",
    tagline: "Uncover your true north",
    subtitle: "[SINGLE SESSION, TWO 90 MIN SESSIONS, $300]",
    description: "At a crossroads or in transition? This intensive session helps you cut through the noise to pinpoint your core desires, define your authentic goals, audit your mindset, and map a clear, actionable path forward – steps you can implement immediately.",
    icon: "✨"
  },
  {
    id: 2,
    title: "UNBLOCKED & ALIGNED",
    tagline: "Release resistance, find your flow",
    subtitle: "[SINGLE SESSION, 60 MIN, $300]",
    description: "Ideal for releasing guilt, shame, anger, sadness, or repeating patterns. We gently release deep resistance and create space for flow. Includes a personalized EFT audio recording and a 21-day follow-up.",
    icon: "🔓"
  },
  {
    id: 3,
    title: "MOMENTUM DEEP DIVE",
    tagline: "Ignite consistent action",
    subtitle: "[SINGLE SESSION, 90 MIN, $200]",
    description: "Struggling to sustain momentum on new projects? This focused session combines mindset tools with tailored strategies and lifestyle tweaks to build lasting momentum towards your goals. A favorite for new creators and solopreneurs.",
    icon: "🚀"
  },
  {
    id: 4,
    title: "CONFIDENCE AUDIT",
    tagline: "Rewrite your inner story",
    subtitle: "[SINGLE SESSION, 90 MIN, $200]",
    description: "You know your direction, but self-doubt is holding you back, whispering to settle. That comfort zone feels like the edge. In this session, we'll address those limiting beliefs in your career, relationships, or health. We'll audit the narratives dimming your shine and reprogram solid empowering beliefs to reignite your confidence.",
    icon: "💫"
  },
  {
    id: 5,
    title: "PIVOT CONSULT",
    tagline: "Chart your next career chapter",
    subtitle: "[SINGLE SESSION, 60 MIN, $300]",
    description: "Navigating a career change? This strategic consultation provides clarity and direction for your next professional chapter. We'll review your résumé, professional identity and I'll share my top creative strategies to help you confidently navigate your pivot.",
    icon: "🎯"
  }
];

export default function SessionsPage() {
  return (
    <>
      <StarryBackground />
      <main className="relative z-10 min-h-screen py-12">
        <Container>
          {/* NO TOP NAVIGATION OR LOGO */}
          
          <h1 className="sessions-heading mb-8">
            1:1 SESSION PATHWAYS
          </h1>

          {/* Subtext with mobile margins */}
          <p className="sessions-subtext text-center mb-12 px-8 md:px-0">
            11% OF YOUR INVESTMENT DIRECTLY SUPPORTS FREE COACHING 
            INITIATIVES FOR UNDERPRIVILEGED TEENS, FOSTERING GROWTH 
            BEYOND OUR LAB
          </p>

          <div className="space-y-8 max-w-4xl mx-auto px-4">
            {sessions.map((session, index) => (
              <div 
                key={session.id}
                className="session-card"
              >
                {/* Flex container with mobile center alignment */}
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-cream/10 rounded-lg flex items-center justify-center text-3xl">
                      {session.icon}
                    </div>
                  </div>
                  
                  {/* Content - centered on mobile, left-aligned on desktop */}
                  <div className="flex-grow text-center md:text-left">
                    <h2 className="session-subtitle mb-1 pl-0 md:pl-[0.325rem]">
                      {index + 1}. {session.title}
                    </h2>
                    <p className="session-tagline mb-2 pl-0 md:pl-[0.325rem]">
                      {session.tagline}
                    </p>
                    <p className="session-details mb-3">
                      {session.subtitle}
                    </p>
                    <p className="sessions-body-text">
                      {session.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom text with mobile margins */}
          <div className="text-center mt-12 space-y-4 px-4 md:px-0">
            <p className="sessions-body-text mx-4 md:mx-0">
              Still unsure? DM me on Instagram or email herintuitionlab@gmail.com.
            </p>
            <p className="sessions-body-text mx-4 md:mx-0">
              Know your path? Tell me about yourself via the Interest Form and I&apos;ll be in touch.
            </p>
            <div className="mt-8">
              <Link 
                href="/interest-form" 
                className="underline-link"
              >
                I&apos;m Ready - Take me to the Interest Form
              </Link>
            </div>
          </div>

          {/* Navigation only at bottom */}
          <div className="mt-12">
            <Navigation />
          </div>
          
          <Footer />
        </Container>
      </main>
    </>
  );
}