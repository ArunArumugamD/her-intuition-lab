// components/HDChart.tsx
'use client';

import { HDChart } from '@/lib/hdCalculator';

interface HDChartProps {
  chart: HDChart;
  name?: string;
}

export default function HDChartVisual({ chart, name }: HDChartProps) {
  // Define center positions for the bodygraph
  const centerPositions = {
    head: { x: 200, y: 50, label: 'HEAD' },
    ajna: { x: 200, y: 130, label: 'AJNA' },
    throat: { x: 200, y: 210, label: 'THROAT' },
    g: { x: 200, y: 290, label: 'G CENTER' },
    heart: { x: 110, y: 290, label: 'HEART' },
    spleen: { x: 110, y: 370, label: 'SPLEEN' },
    sacral: { x: 200, y: 370, label: 'SACRAL' },
    solar: { x: 290, y: 370, label: 'SOLAR' },
    root: { x: 200, y: 450, label: 'ROOT' },
  };

  // Define connections between centers (channels)
  const channels = [
    { from: 'head', to: 'ajna', gates: [64, 47] },
    { from: 'ajna', to: 'throat', gates: [17, 62] },
    { from: 'throat', to: 'g', gates: [31, 7] },
    { from: 'g', to: 'sacral', gates: [15, 5] },
    { from: 'heart', to: 'g', gates: [21, 51] },
    { from: 'spleen', to: 'sacral', gates: [50, 27] },
    { from: 'sacral', to: 'root', gates: [53, 60] },
    { from: 'solar', to: 'root', gates: [41, 30] },
  ];

  return (
    <div className="bg-burgundy/20 backdrop-blur-sm border border-cream/30 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl max-w-7xl mx-auto" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      {name && (
        <h3 className="text-2xl md:text-3xl font-semibold text-cream text-center mb-6 md:mb-8" style={{ fontFamily: "'Quicksand', sans-serif" }}>
          {name}&apos;s Human Design Chart
        </h3>
      )}
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 items-start">
        {/* Bodygraph SVG */}
        <div className="flex justify-center xl:justify-end">
          <div className="w-full max-w-[320px] md:max-w-[420px] lg:max-w-[480px]">
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 400 500" 
              className="w-full h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
            {/* Draw channels */}
            {channels.map((channel, idx) => {
              const from = centerPositions[channel.from as keyof typeof centerPositions];
              const to = centerPositions[channel.to as keyof typeof centerPositions];
              const isActive = chart.channels && chart.channels.some(ch => 
                ch === `${channel.gates[0]}-${channel.gates[1]}` || 
                ch === `${channel.gates[1]}-${channel.gates[0]}`
              );
              
              return (
                <line
                  key={idx}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={isActive ? '#F2C188' : 'rgba(255, 255, 255, 0.2)'}
                  strokeWidth={isActive ? '3' : '2'}
                />
              );
            })}
            
            {/* Draw centers */}
            {Object.entries(centerPositions).map(([center, pos]) => {
              const isDefined = chart.centers[center as keyof typeof chart.centers];
              
              return (
                <g key={center}>
                  {/* Center shape */}
                  {center === 'head' || center === 'ajna' ? (
                    <polygon
                      points={`${pos.x},${pos.y - 28} ${pos.x + 28},${pos.y + 14} ${pos.x - 28},${pos.y + 14}`}
                      fill={isDefined ? '#F2C188' : 'rgba(255, 255, 255, 0.1)'}
                      stroke={isDefined ? '#F2C188' : 'rgba(255, 255, 255, 0.3)'}
                      strokeWidth="2"
                    />
                  ) : center === 'g' ? (
                    <rect
                      x={pos.x - 28}
                      y={pos.y - 28}
                      width="56"
                      height="56"
                      transform={`rotate(45 ${pos.x} ${pos.y})`}
                      fill={isDefined ? '#F2C188' : 'rgba(255, 255, 255, 0.1)'}
                      stroke={isDefined ? '#F2C188' : 'rgba(255, 255, 255, 0.3)'}
                      strokeWidth="2"
                    />
                  ) : (
                    <rect
                      x={pos.x - 32}
                      y={pos.y - 28}
                      width="64"
                      height="56"
                      fill={isDefined ? '#F2C188' : 'rgba(255, 255, 255, 0.1)'}
                      stroke={isDefined ? '#F2C188' : 'rgba(255, 255, 255, 0.3)'}
                      strokeWidth="2"
                    />
                  )}
                  
                  {/* Center label */}
                  <text
                    x={pos.x}
                    y={pos.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={isDefined ? '#591A31' : 'rgba(255, 255, 255, 0.7)'}
                    fontSize="11"
                    fontWeight="bold"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {pos.label}
                  </text>
                </g>
              );
            })}
          </svg>
          </div>
        </div>
        
        {/* Chart Details */}
        <div className="space-y-3 md:space-y-4 xl:pl-8">
          <div className="bg-white/5 rounded-lg p-4 md:p-5">
            <h4 className="text-cream font-semibold mb-2 text-base md:text-lg" style={{ fontFamily: "'Quicksand', sans-serif" }}>Type</h4>
            <p className="text-xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>{chart.type}</p>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4 md:p-5">
            <h4 className="text-cream font-semibold mb-2 text-base md:text-lg" style={{ fontFamily: "'Quicksand', sans-serif" }}>Strategy</h4>
            <p className="text-lg md:text-xl text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>{chart.strategy}</p>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4 md:p-5">
            <h4 className="text-cream font-semibold mb-2 text-base md:text-lg" style={{ fontFamily: "'Quicksand', sans-serif" }}>Authority</h4>
            <p className="text-lg md:text-xl text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>{chart.authority}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="bg-white/5 rounded-lg p-4 md:p-5">
              <h4 className="text-cream font-semibold mb-2 text-base md:text-lg" style={{ fontFamily: "'Quicksand', sans-serif" }}>Profile</h4>
              <p className="text-lg md:text-xl text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>{chart.profile}</p>
              {chart.profileDescription && (
                <div className="text-xs text-white/70 mt-1" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                  {chart.profileDescription.split('/').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index === 0 && <span className="mx-1">/</span>}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            <div className="bg-white/5 rounded-lg p-4 md:p-5">
              <h4 className="text-cream font-semibold mb-2 text-base md:text-lg" style={{ fontFamily: "'Quicksand', sans-serif" }}>Definition</h4>
              <p className="text-lg md:text-xl text-white whitespace-nowrap overflow-hidden text-ellipsis md:whitespace-normal" style={{ fontFamily: "'Quicksand', sans-serif" }}>{chart.definition}</p>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4 md:p-5">
            <h4 className="text-cream font-semibold mb-2 text-base md:text-lg" style={{ fontFamily: "'Quicksand', sans-serif" }}>Active Gates</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {chart.gates.map(gate => (
                <span
                  key={gate}
                  className="bg-cream/20 text-cream px-2 py-1 rounded text-sm md:text-base"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {gate}
                </span>
              ))}
            </div>
          </div>
          
          {chart.channels && chart.channels.length > 0 && (
            <div className="bg-white/5 rounded-lg p-4 md:p-5">
              <h4 className="text-cream font-semibold mb-2 text-base md:text-lg" style={{ fontFamily: "'Quicksand', sans-serif" }}>Active Channels</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {chart.channels.map(channel => (
                  <span
                    key={channel}
                    className="bg-cream/20 text-cream px-2 py-1 rounded text-sm md:text-base"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {channel}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {chart.notSelf && (
            <div className="bg-white/5 rounded-lg p-4 md:p-5">
              <h4 className="text-cream font-semibold mb-2 text-base md:text-lg" style={{ fontFamily: "'Quicksand', sans-serif" }}>Not-Self Theme</h4>
              <p className="text-lg md:text-xl text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>{chart.notSelf}</p>
            </div>
          )}
          
          {chart.signature && (
            <div className="bg-white/5 rounded-lg p-4 md:p-5">
              <h4 className="text-cream font-semibold mb-2 text-base md:text-lg" style={{ fontFamily: "'Quicksand', sans-serif" }}>Signature</h4>
              <p className="text-lg md:text-xl text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>{chart.signature}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}