import StarryBackground from '@/components/StarryBackground';
import Container from '@/components/Container';
import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <StarryBackground />
      <main className="relative z-10 min-h-screen py-12">
        <Container>
          <Logo />
          <Navigation />
          
          <div className="text-center my-8">
            <Link 
              href="/interest-form" 
              className="underline-link"
            >
              I&apos;m Ready - Take me to the Interest Form
            </Link>
          </div>

          <h1 className="heading-primary mb-12">
            21 DAYS TO YOUR NEXT LEVEL<br />
            BEGINS HERE
          </h1>

          <div className="space-y-6 max-w-3xl mx-auto px-4">
            <p className="body-text">
              You&apos;ve heard your words hitting a brick wall. Imagine instead, your voice 
              commanding attention, finally cutting through the noise and being heard.
            </p>

            <p className="body-text">
              That quiet whisper of dreaming bigger? Envision waking up fueled by a purpose 
              so aligned it ignites your soul, your work a force unleashed.
            </p>

            <p className="body-text">
              That suffocating feeling of being trapped? Imagine yourself finally gaining real 
              momentum, moving towards a future where growth feels natural and 
              exhilarating.
            </p>

            <p className="body-text">
              That nagging doubt that dims your light? Imagine moving beyond the grip of 
              your inner critic, unleashing your brilliance with unapologetic confidence as 
              your dreams become your reality.
            </p>

            <p className="body-text">
              That cage of fear holding you hostage? Imagine feeling genuinely content, with 
              a deep-seated peace as your foundation, your needs being met with ease, and a 
              real inner strength that supports you.
            </p>

            <p className="body-text">
              That bitter taste of being ignored? See yourself commanding respect, your 
              contributions not just acknowledged, but celebrated and rewarded.
            </p>

            <p className="body-text">
              That moment you said, &ldquo;Enough&rdquo;? That was the spark. Are you ready to finally 
              live the powerful life that truly reflects who you are?
            </p>

            <p className="body-text mt-8">
              Welcome to the Pathways at Her Intuition Lab. Your arena for profound 
              transformation.
            </p>

            <p className="body-text">
              These 1:1 sessions are a direct, no-nonsense journey into your core, stripping 
              away what weakens you and unleashing your untamed potential.
            </p>

            <p className="body-text">
              Feel the raw power of your next level, fully realized. What does that demand 
              from you?
            </p>

            <p className="body-text">
              Discover the 5 Potent 1:1 Session Pathways engineered to get you there. It&apos;s time 
              to seize your authentic power and dominate your life.
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

          <Navigation />
          
          <Footer />
        </Container>
      </main>
    </>
  );
}