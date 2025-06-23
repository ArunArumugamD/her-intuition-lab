// components/HDGenerator.tsx
'use client';

import { useState } from 'react';
import { calculateHDChart, getLocationCoordinates, BirthData, HDChart } from '@/lib/hdCalculator';
import HDChartVisual from './HDChart';

export default function HDGenerator() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    location: ''
  });
  const [chart, setChart] = useState<HDChart | null>(null);
  const [showChart, setShowChart] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Get coordinates for the location
      const coordinates = await getLocationCoordinates(formData.location);
      
      const birthData: BirthData = {
        date: new Date(formData.date),
        time: formData.time,
        location: {
          ...coordinates,
          city: formData.location
        }
      };

      const hdChart = calculateHDChart(birthData);
      setChart(hdChart);
      setShowChart(true);
    } catch (error) {
      console.error('Error calculating chart:', error);
      alert('Error calculating chart. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', date: '', time: '', location: '' });
    setChart(null);
    setShowChart(false);
    setIsOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 my-12">
      {/* CTA Button */}
      {!isOpen && (
        <div className="text-center">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-transparent border-2 border-cream text-white px-6 md:px-8 py-3 md:py-4 rounded-[45px]  font-semibold text-base md:text-lg hover: transition-all transform hover:scale-105 outline-none focus:outline-none" style={{ fontFamily: "'Quicksand', sans-serif",
              MozAppearance: 'none',
              appearance: 'none' }}
          >
            ✨ Generate Your Free Human Design Chart ✨
          </button>
          <p className="text-white/70 text-sm mt-3"style={{ fontFamily: "'Quicksand', sans-serif" }} >
            Discover your unique energetic blueprint in seconds
          </p>
        </div>
      )}

      {/* Generator Form */}
      {isOpen && !showChart && (
        <div className="bg-burgundy/30 backdrop-blur-sm border border-cream/30 rounded-2xl p-6 md:p-8 shadow-2xl animate-fadeIn" >
          <h3 className="text-xl md:text-2xl font-medium text-cream text-center mb-6" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            Generate Your Human Design Chart
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-cream font-medium mb-2" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-cream/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cream"
                placeholder="Enter your name"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              />
            </div>

            <div>
              <label className="block text-cream font-medium mb-2" style={{ fontFamily: "'Quicksand', sans-serif" }} >
                Birth Date
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-cream/30 rounded-lg text-white focus:outline-none focus:border-cream"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              />
            </div>

            <div>
              <label className="block text-cream font-medium mb-2" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                Birth Time (as exact as possible)
              </label>
              <input
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-cream/30 rounded-lg text-white focus:outline-none focus:border-cream"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              />
            </div>

            <div>
              <label className="block text-cream font-medium mb-2" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                Birth Location (City, Country)
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-cream/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cream"
                placeholder="e.g., London, UK"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-8 py-3 bg-transparent border-2 border-cream text-cream rounded-[45px]  font-semibold hover:bg-cream/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed outline-none focus:outline-none"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                {loading ? 'Calculating...' : 'Generate My Chart'}
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full md:w-auto px-6 py-3 border border-cream/30 rounded-[45px] text-cream hover:bg-cream/10 transition-colors outline-none focus:outline-none" 
              >
                Cancel
              </button>
            </div>
          </form>

          <p className="text-center text-white/60 text-sm mt-6" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            Your birth data is used only for chart calculation and is not stored.
          </p>
        </div>
      )}

      {/* Chart Display */}
      {showChart && chart && (
        <div className="animate-fadeIn">
          <HDChartVisual chart={chart} name={formData.name} />
          
          <div className="text-center mt-8 space-y-4 px-4">
            <p className="text-white/80" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              Want to understand what this means for your life?
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={resetForm}
                className="px-6 py-3 bg-transparent border border-cream text-cream rounded-[45px] font-semibold text-sm md:text-base hover:bg-cream/10 transition-colors" style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Generate Another Chart
              </button>
              <a
                href="/interest-form"
                className="px-6 py-3 bg-transparent border border-cream text-white rounded-[45px] font-semibold text-sm md:text-base hover:bg-cream/10 transition-colors " style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Book a Session to Learn More
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}