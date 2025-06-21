'use client';

import { useState } from 'react';
import StarryBackground from '@/components/StarryBackground';
import Container from '@/components/Container';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function InterestFormPage() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    instagram: '',
    whatCalled: '',
    areaOfLife: '',
    areaOfLifeOther: '',
    supportNeeded: [] as string[],
    supportNeededOther: '',
    deeperDesire: '',
    patterns: '',
    sessionPreference: '',
    sessionPreferenceOther: '',
    futureVision: '',
    investmentReady: '',
    timeline: '',
    additionalInfo: ''
  });

  const [showOtherFields, setShowOtherFields] = useState({
    areaOfLife: false,
    supportNeeded: false,
    sessionPreference: false
  });

  const supportOptions = [
    'Rebuilding confidence after a setback (Layoffs, Divorce, Health Scare)',
    'Overcoming guilt around rest & self-care',
    'Navigating friction and feeling valued at work or with loved ones',
    'Boosting focus & aligned action',
    'Releasing resentment from feeling unappreciated',
    'Recovering from burnout/stuckness',
    'Gaining clarity and strategy for a pivot',
    'Other'
  ];

  const sessionOptions = [
    'Clarity Deep Dive: Uncover Your True North',
    'Unblocked & Aligned: Release Resistance, Find Your Flow',
    'Momentum Deep Dive: Take Consistent Action, Effortlessly',
    'Confidence Audit: Rewrite Your Inner Story',
    'Pivot Consult: Chart Your Next Career Chapter',
    'Other'
  ];

  const handleCheckboxChange = (option: string) => {
    if (option === 'Other') {
      setShowOtherFields(prev => ({ ...prev, supportNeeded: !prev.supportNeeded }));
    }
    setFormData(prev => ({
      ...prev,
      supportNeeded: prev.supportNeeded.includes(option)
        ? prev.supportNeeded.filter(item => item !== option)
        : [...prev.supportNeeded, option]
    }));
  };

  const handleRadioChange = (field: string, value: string) => {
    if (field === 'areaOfLife' && value === 'Other') {
      setShowOtherFields(prev => ({ ...prev, areaOfLife: true }));
    } else if (field === 'areaOfLife') {
      setShowOtherFields(prev => ({ ...prev, areaOfLife: false }));
    }

    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSessionChange = (value: string) => {
    if (value === 'Other') {
      setShowOtherFields(prev => ({ ...prev, sessionPreference: true }));
    } else {
      setShowOtherFields(prev => ({ ...prev, sessionPreference: false }));
    }
    setFormData(prev => ({ ...prev, sessionPreference: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <StarryBackground />
      <main className="relative z-10 min-h-screen py-12">
        <Container>
          {/* NO TOP NAVIGATION OR LOGO */}
          
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            {/* Welcome Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-cream/10 rounded-full mb-6">
                <span className="text-4xl">🗝</span>
              </div>
              <h1 className="form-heading mb-6">Welcome</h1>
              <h2 className="text-lg sm:text-xl text-cream mb-8 font-roboto">🌿 You&apos;re here for a reason.</h2>
              
              <div className="text-left space-y-4 form-body-text mb-8">
                <p>Maybe you&apos;re outgrowing this season - of accepting the path of least resistance, the path that made your family proud.</p>
                <p>Or - you&apos;re at the edge of something new, and your intuition is getting louder.</p>
                <p>In our calls, we don&apos;t just unpack your challenges that are keeping you stuck.</p>
                <p className="font-semibold">We transmute them.</p>
                <p>Here&apos;s what you can expect after our calls:</p>
                <ul className="space-y-2 mt-4">
                  <li>✨ You&apos;ll trust yourself more than you trust the noise</li>
                  <li>✨ You&apos;ll leave with a grounded &ldquo;yes&rdquo; to the life you actually want</li>
                  <li>✨ You&apos;ll master boundaries that expand your life, not shrink it</li>
                </ul>

                <p className="mt-6"> If you&apos;ve read this far and are feeling the nudge, take this form as an invitation - to share where you are &amp; where you want to be.</p>

                <p>It really isn&apos;t about having the &ldquo;right&rdquo; words - it&apos;s about showing up as you are.</p>

                <p>I&apos;ll be in touch within 48 hours after you submit the application.</p>

                <div className="mt-6">
                    <p>To your continued growth,</p>
                    <p className="font-bold text-lg mt-2" style={{ color: '#F2C188'}}>HIRANYA</p>
                     <p className="text-sm">Founder, <em>Her Intuition Lab</em></p>
                    <p className="text-sm italic mt-2">&apos;You are your own technology. Trust your signal.&apos;</p>
                </div>

              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="form-section">
                <label className="form-label">
                  Email *
                  <input
                    type="email"
                    required
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </label>
              </div>

              <div className="form-section">
                <label className="form-label">
                  Full Name *
                  <input
                    type="text"
                    required
                    className="form-input"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </label>
              </div>

              <div className="form-section">
                <label className="form-label">
                  Instagram Handle / LinkedIn *
                  <input
                    type="text"
                    required
                    className="form-input"
                    value={formData.instagram}
                    onChange={(e) => setFormData({...formData, instagram: e.target.value})}
                  />
                </label>
              </div>

              <div className="form-section">
                <label className="form-label">
                  What called you to reach out at this moment in your life? *
                  <span className="text-sm text-white/70 block mt-1" style={{ fontStyle: 'italic' }}>
                    (What thoughts are rising that you&apos;re ready to confront?)
                  </span>
                  <textarea
                    required
                    className="form-textarea"
                    rows={4}
                    value={formData.whatCalled}
                    onChange={(e) => setFormData({...formData, whatCalled: e.target.value})}
                  />
                </label>
              </div>

              <div className="form-section">
                <label className="form-label">
                  What&apos;s an area of life you&apos;re craving more freedom, fun or ease in? *
                  <div className="mt-3 space-y-2">
                    {['Health', 'Relationships', 'Career/Business', 'Other'].map(option => (
                      <label key={option} className="flex items-center">
                        <input
                          type="radio"
                          name="areaOfLife"
                          value={option}
                          className="form-radio"
                          onChange={(e) => handleRadioChange('areaOfLife', e.target.value)}
                        />
                        <span className="ml-2">{option}</span>
                      </label>
                    ))}
                    {showOtherFields.areaOfLife && (
                      <input
                        type="text"
                        placeholder="Please specify..."
                        className="form-input mt-2"
                        value={formData.areaOfLifeOther}
                        onChange={(e) => setFormData({...formData, areaOfLifeOther: e.target.value})}
                      />
                    )}
                  </div>
                </label>
              </div>

              <div className="form-section">
                <label className="form-label ">
                  What would you like support in navigating at the moment? *
                  <div className="mt-3 space-y-2">
                    {supportOptions.map(option => (
                      <label key={option} className="flex items-start">
                        <input
                          type="checkbox"
                          className="form-checkbox mt-1"
                          checked={formData.supportNeeded.includes(option)}
                          onChange={() => handleCheckboxChange(option)}
                        />
                        <span className="ml-2">{option}</span>
                      </label>
                    ))}
                    {showOtherFields.supportNeeded && (
                      <input
                        type="text"
                        placeholder="Please specify..."
                        className="form-input mt-2"
                        value={formData.supportNeededOther}
                        onChange={(e) => setFormData({...formData, supportNeededOther: e.target.value})}
                      />
                    )}
                  </div>
                </label>
              </div>

              <div className="form-section">
                <label className="form-label">
                  Based on what you are currently navigating - what&apos;s the deeper desire underneath it? *
                  <span className="text-sm text-white/70 block mt-1" style={{ fontStyle: 'italic' }}>
                    (E.g. &ldquo;I want to be recognised for my impact at work instead of being passed on for promotions.&rdquo; &ldquo;I want to have a robust relationship with my spouse instead of getting triggered.&rdquo;)
                  </span>
                  <textarea
                    required
                    className="form-textarea"
                    rows={4}
                    value={formData.deeperDesire}
                    onChange={(e) => setFormData({...formData, deeperDesire: e.target.value})}
                  />
                </label>
              </div>

                {/* Add this AFTER the "deeper desire" section and BEFORE the "session preference" section */}

<div className="form-section">
  <label className="form-label">
    What patterns or beliefs are you ready to rewrite? *
    <span className="text-sm text-white/70 block mt-1" style={{fontStyle:'italic'}}>
      (Describe your &apos;I&apos;m done tolerating this&apos; moment)
    </span>
    <textarea
      required
      className="form-textarea"
      rows={4}
      value={formData.patterns}
      onChange={(e) => setFormData({...formData, patterns: e.target.value})}
    />
  </label>
</div>

              <div className="form-section">
                <label className="form-label">
                  Which session feels like the best way to support you? * 
                  <span className="text-sm text-white/70 block mt-1 mb-4">
                   For more details on these sessions, check out{' '}
                   <Link href="https://drive.google.com/file/d/1Jk_5m63jJp28zvmLZd8WDQwVQ3-tdd49/view?usp=drive_link" target="_blank"
                    rel="noopener noreferrer" className="underline text-cream hover:text-white">
                   Her Intuition Lab : 1:1 Session Pathways
                   </Link>
                  </span>
                      
                      <div className="space-y-3">
      {sessionOptions.map(option => (
        <label key={option} className="flex items-start cursor-pointer">
          <input
            type="checkbox"
            name="sessionPreference"
            value={option}
            className="form-checkbox mt-1"
            checked={formData.sessionPreference === option}
            onChange={(e) => handleSessionChange(e.target.value)}
          />
          <span className="ml-3 text-white  ">{option}</span>
        </label>
      ))}

                  {showOtherFields.sessionPreference && (
                    <input
                      type="text"
                      placeholder="Please specify..."
                      className="form-input mt-2"
                      value={formData.sessionPreferenceOther}
                      onChange={(e) => setFormData({...formData, sessionPreferenceOther: e.target.value})}
                    />
                  )}
                  </div>
                </label>
              </div>

              <div className="form-section">
  <label className="form-label">
    What do you see yourself feeling after successfully navigating this journey? *
    <span className="text-sm text-white/70 block mt-1 " style={{fontStyle:'italic'}}>
      (Feel free to share in depth, the more context the better I can support)
    </span>
    <textarea
      required
      className="form-textarea"
      rows={4}
      value={formData.futureVision}
      onChange={(e) => setFormData({...formData, futureVision: e.target.value})}
    />
  </label>
</div>

              <div className="form-section">
                <label className="form-label">
                  Are you able to invest time, energy, and resources into becoming the version of you that already lives that life? *
                  <div className="mt-3 space-y-2">
                    {['Yes - I\'m so ready', 'Not yet - but I\'m close', 'I\'d love to explore this in conversation'].map(option => (
                      <label key={option} className="flex items-center">
                        <input
                          type="radio"
                          name="investmentReady"
                          value={option}
                          className="form-radio"
                          onChange={(e) => setFormData({...formData, investmentReady: e.target.value})}
                        />
                        <span className="ml-2">{option}</span>
                      </label>
                    ))}
                  </div>
                </label>
              </div>

              <div className="form-section">
                <label className="form-label">
                  When would you love to begin? *
                  <span className="text-sm text-white/70 block mt-1" style={{ fontStyle: 'italic' }}>
                    (Even if it&apos;s a future vision — name it.)
                  </span>
                  <input
                    type="text"
                    required
                    className="form-input"
                    value={formData.timeline}
                    onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  />
                </label>
              </div>

              <div className="form-section">
                <label className="form-label">
                  🌸 Anything else you&apos;d love me to know or want to ask? *
                  <span className="text-sm text-white/70 block mt-1" style={{ fontStyle: 'italic' }}>
                    (Dreams, edges, visions — you can bring all of them here.)
                  </span>
                  <textarea
                    required
                    className="form-textarea"
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                  />
                </label>
              </div>

              <div className="text-center mt-12">
                <button
                  type="submit"
                  className="bg-cream text-burgundy px-8 py-3 rounded-full font-medium hover:bg-cream/90 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>

            <div className="text-center mt-12 p-6 md:p-8 bg-white/5 rounded-lg mx-4 md:mx-0">
              <h3 className="text-xl text-cream mb-4 font-roboto">🤍 Next Steps</h3>
              <p className="form-body-text">
                Thank you! I read every word - and will respond within 48 hours with next steps and an 
                invitation to a free Alignment Call.
              </p>
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