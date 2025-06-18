import StarryBackground from '@/components/StarryBackground';
import Container from '@/components/Container';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <StarryBackground />
      <main className="relative z-10 min-h-screen py-12">
        <Container>
          {/* NO TOP NAVIGATION - Only Logo/Nav at top removed */}
          
          <h1 className="about-heading mb-12">
            ABOUT
          </h1>

          {/* Profile Image */}
          <div className="flex justify-center mb-12">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-cream/20">
              <Image
                src="/images/hiranya-profile.jpg" // Add your profile image
                alt="Hiranya"
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-4 text-center space-y-8">
            <p className="about-body-text">
              Hi, I&apos;m Hiranya. Mindset work opened doors for me in ways I never thought 
              possible – from fintech to legal tech as a product manager, landing tech 
              roles as an academic with no prior experience, and attracting incredible 
              relationships and opportunities.
            </p>

            <p className="about-body-text">
              But really, Her Intuition Lab is about serving you and the deep 
              transformation you&apos;ll experience as you break free from what&apos;s holding you 
              back. That&apos;s what truly excites me.
            </p>

            <p className="about-body-text">
              Ready to explore what&apos;s possible for you? The easiest way is to share a bit 
              about yourself via the Form below, so I can see how best to support your 
              journey. I&apos;m here when you&apos;re ready.
            </p>
          </div>

          <div className="text-center mt-10 mb-12">
            <Link 
              href="/interest-form" 
              className="underline-link"
            >
              I&apos;m Ready - Take me to the Interest Form
            </Link>
          </div>

          {/* Navigation only at bottom */}
          <Navigation />
          
          <Footer />
        </Container>
      </main>
    </>
  );
}