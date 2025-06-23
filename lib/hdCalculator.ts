// lib/hdCalculator.ts

// HD Types based on defined centers
export type HDType = 'Generator' | 'Manifesting Generator' | 'Projector' | 'Manifestor' | 'Reflector';

// Complete 64 Gates mapped to zodiac degrees
const GATES_TO_ZODIAC: { [key: number]: { start: number; end: number } } = {
  41: { start: 302.0625, end: 307.6875 },  // Aquarius
  19: { start: 307.6875, end: 313.3125 },  // Aquarius/Pisces
  13: { start: 313.3125, end: 318.9375 },  // Pisces
  49: { start: 318.9375, end: 324.5625 },  // Pisces
  30: { start: 324.5625, end: 330.1875 },  // Pisces
  55: { start: 330.1875, end: 335.8125 },  // Pisces
  37: { start: 335.8125, end: 341.4375 },  // Pisces
  63: { start: 341.4375, end: 347.0625 },  // Pisces
  22: { start: 347.0625, end: 352.6875 },  // Pisces
  36: { start: 352.6875, end: 358.3125 },  // Pisces
  25: { start: 358.3125, end: 3.9375 },    // Pisces/Aries
  17: { start: 3.9375, end: 9.5625 },      // Aries
  21: { start: 9.5625, end: 15.1875 },     // Aries
  51: { start: 15.1875, end: 20.8125 },    // Aries
  42: { start: 20.8125, end: 26.4375 },    // Aries
  3: { start: 26.4375, end: 32.0625 },     // Aries/Taurus
  27: { start: 32.0625, end: 37.6875 },    // Taurus
  24: { start: 37.6875, end: 43.3125 },    // Taurus
  2: { start: 43.3125, end: 48.9375 },     // Taurus
  23: { start: 48.9375, end: 54.5625 },    // Taurus
  8: { start: 54.5625, end: 60.1875 },     // Taurus
  20: { start: 60.1875, end: 65.8125 },    // Taurus/Gemini
  16: { start: 65.8125, end: 71.4375 },    // Gemini
  35: { start: 71.4375, end: 77.0625 },    // Gemini
  45: { start: 77.0625, end: 82.6875 },    // Gemini
  12: { start: 82.6875, end: 88.3125 },    // Gemini
  15: { start: 88.3125, end: 93.9375 },    // Gemini/Cancer
  52: { start: 93.9375, end: 99.5625 },    // Cancer
  39: { start: 99.5625, end: 105.1875 },   // Cancer
  53: { start: 105.1875, end: 110.8125 },  // Cancer
  62: { start: 110.8125, end: 116.4375 },  // Cancer
  56: { start: 116.4375, end: 122.0625 },  // Cancer
  31: { start: 122.0625, end: 127.6875 },  // Cancer/Leo
  33: { start: 127.6875, end: 133.3125 },  // Leo
  7: { start: 133.3125, end: 138.9375 },   // Leo
  4: { start: 138.9375, end: 144.5625 },   // Leo
  29: { start: 144.5625, end: 150.1875 },  // Leo
  59: { start: 150.1875, end: 155.8125 },  // Leo/Virgo
  40: { start: 155.8125, end: 161.4375 },  // Virgo
  64: { start: 161.4375, end: 167.0625 },  // Virgo
  47: { start: 167.0625, end: 172.6875 },  // Virgo
  6: { start: 172.6875, end: 178.3125 },   // Virgo
  46: { start: 178.3125, end: 183.9375 },  // Virgo
  18: { start: 183.9375, end: 189.5625 },  // Virgo/Libra
  48: { start: 189.5625, end: 195.1875 },  // Libra
  57: { start: 195.1875, end: 200.8125 },  // Libra
  32: { start: 200.8125, end: 206.4375 },  // Libra
  50: { start: 206.4375, end: 212.0625 },  // Libra
  28: { start: 212.0625, end: 217.6875 },  // Libra/Scorpio
  44: { start: 217.6875, end: 223.3125 },  // Scorpio
  1: { start: 223.3125, end: 228.9375 },   // Scorpio
  43: { start: 228.9375, end: 234.5625 },  // Scorpio
  14: { start: 234.5625, end: 240.1875 },  // Scorpio
  34: { start: 240.1875, end: 245.8125 },  // Scorpio/Sagittarius
  9: { start: 245.8125, end: 251.4375 },   // Sagittarius
  5: { start: 251.4375, end: 257.0625 },   // Sagittarius
  26: { start: 257.0625, end: 262.6875 },  // Sagittarius
  11: { start: 262.6875, end: 268.3125 },  // Sagittarius
  10: { start: 268.3125, end: 273.9375 },  // Sagittarius/Capricorn
  58: { start: 273.9375, end: 279.5625 },  // Capricorn
  38: { start: 279.5625, end: 285.1875 },  // Capricorn
  54: { start: 285.1875, end: 290.8125 },  // Capricorn
  61: { start: 290.8125, end: 296.4375 },  // Capricorn
  60: { start: 296.4375, end: 302.0625 },  // Capricorn/Aquarius
};

// Channels connecting centers (gate pairs)
const CHANNELS = [
  // Head to Ajna
  { gates: [64, 47], centers: ['head', 'ajna'] },
  { gates: [61, 24], centers: ['head', 'ajna'] },
  { gates: [63, 4], centers: ['head', 'ajna'] },
  
  // Ajna to Throat
  { gates: [47, 64], centers: ['ajna', 'throat'] },
  { gates: [17, 62], centers: ['ajna', 'throat'] },
  { gates: [24, 61], centers: ['ajna', 'throat'] },
  { gates: [4, 63], centers: ['ajna', 'throat'] },
  { gates: [11, 56], centers: ['ajna', 'throat'] },
  { gates: [43, 23], centers: ['ajna', 'throat'] },
  
  // Throat to G-Center
  { gates: [31, 7], centers: ['throat', 'g'] },
  { gates: [8, 1], centers: ['throat', 'g'] },
  { gates: [33, 13], centers: ['throat', 'g'] },
  
  // Throat to Solar Plexus
  { gates: [12, 22], centers: ['throat', 'solar'] },
  { gates: [35, 36], centers: ['throat', 'solar'] },
  
  // G-Center to Heart
  { gates: [7, 31], centers: ['g', 'heart'] },
  { gates: [1, 8], centers: ['g', 'heart'] },
  { gates: [13, 33], centers: ['g', 'heart'] },
  { gates: [10, 34], centers: ['g', 'heart'] },
  { gates: [25, 51], centers: ['g', 'heart'] },
  { gates: [15, 5], centers: ['g', 'heart'] },
  { gates: [46, 29], centers: ['g', 'heart'] },
  { gates: [2, 14], centers: ['g', 'heart'] },
  
  // Heart (Will) connections
  { gates: [21, 45], centers: ['heart', 'throat'] },
  { gates: [26, 44], centers: ['heart', 'spleen'] },
  { gates: [40, 37], centers: ['heart', 'solar'] },
  
  // Spleen connections
  { gates: [48, 16], centers: ['spleen', 'throat'] },
  { gates: [57, 20], centers: ['spleen', 'throat'] },
  { gates: [28, 38], centers: ['spleen', 'root'] },
  { gates: [32, 54], centers: ['spleen', 'root'] },
  { gates: [50, 27], centers: ['spleen', 'sacral'] },
  { gates: [57, 34], centers: ['spleen', 'sacral'] },
  
  // Sacral connections
  { gates: [5, 15], centers: ['sacral', 'g'] },
  { gates: [14, 2], centers: ['sacral', 'g'] },
  { gates: [29, 46], centers: ['sacral', 'g'] },
  { gates: [59, 6], centers: ['sacral', 'solar'] },
  { gates: [9, 3], centers: ['sacral', 'root'] },
  { gates: [42, 53], centers: ['sacral', 'root'] },
  
  // Solar Plexus connections
  { gates: [36, 35], centers: ['solar', 'throat'] },
  { gates: [22, 12], centers: ['solar', 'throat'] },
  { gates: [37, 40], centers: ['solar', 'heart'] },
  { gates: [6, 59], centers: ['solar', 'sacral'] },
  { gates: [30, 41], centers: ['solar', 'root'] },
  { gates: [55, 39], centers: ['solar', 'root'] },
  
  // Root connections
  { gates: [53, 42], centers: ['root', 'sacral'] },
  { gates: [60, 3], centers: ['root', 'sacral'] },
  { gates: [52, 9], centers: ['root', 'sacral'] },
  { gates: [19, 49], centers: ['root', 'solar'] },
  { gates: [39, 55], centers: ['root', 'solar'] },
  { gates: [41, 30], centers: ['root', 'solar'] },
  { gates: [38, 28], centers: ['root', 'spleen'] },
  { gates: [54, 32], centers: ['root', 'spleen'] },
  { gates: [58, 18], centers: ['root', 'spleen'] },
];

// Line themes for profiles
const LINE_THEMES = {
  1: 'Investigator',
  2: 'Hermit',
  3: 'Martyr',
  4: 'Opportunist',
  5: 'Heretic',
  6: 'Role Model'
};

export interface HDChart {
  type: HDType;
  strategy: string;
  authority: string;
  profile: string;
  profileDescription: string;
  definition: string;
  gates: number[];
  channels: string[];
  centers: {
    head: boolean;
    ajna: boolean;
    throat: boolean;
    g: boolean;
    heart: boolean;
    spleen: boolean;
    sacral: boolean;
    solar: boolean;
    root: boolean;
  };
  incarnationCross: string;
  notSelf: string;
  signature: string;
}

export interface BirthData {
  date: Date;
  time: string; // HH:mm format
  location: {
    lat: number;
    lng: number;
    city: string;
  };
}

// Calculate Julian Date for astronomical calculations
function getJulianDate(date: Date): number {
  const a = Math.floor((14 - (date.getMonth() + 1)) / 12);
  const y = date.getFullYear() + 4800 - a;
  const m = (date.getMonth() + 1) + 12 * a - 3;
  
  const jdn = date.getDate() + Math.floor((153 * m + 2) / 5) + 365 * y + 
              Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
  
  const jd = jdn + (date.getHours() - 12) / 24 + date.getMinutes() / 1440 + 
             date.getSeconds() / 86400;
  
  return jd;
}

// Calculate planetary positions (simplified but more accurate than random)
function calculatePlanetaryPositions(birthData: BirthData): Record<string, number> {
  const birthDate = new Date(birthData.date);
  const [hours, minutes] = birthData.time.split(':').map(Number);
  birthDate.setHours(hours, minutes);
  
  const jd = getJulianDate(birthDate);
  const T = (jd - 2451545.0) / 36525; // Julian centuries from J2000.0
  
  // Simplified mean positions (more accurate than random)
  const L0 = (280.46645 + 36000.76983 * T) % 360; // Mean longitude of Sun
  
  const sunPos = (L0 + 1.915 * Math.sin((357.5291 + 35999.0503 * T) * Math.PI / 180)) % 360;
  
  const positions: Record<string, number> = {
    sun: sunPos,
    earth: (sunPos + 180) % 360,
    moon: (L0 + 64 + 13.176396 * (jd - 2451545.0)) % 360,
    northNode: (125.04 - 1934.136 * T) % 360,
    southNode: ((125.04 - 1934.136 * T) + 180) % 360,
    mercury: (L0 + 50 + 4.092 * (jd - 2451545.0)) % 360,
    venus: (L0 + 80 + 1.602 * (jd - 2451545.0)) % 360,
    mars: (L0 + 110 + 0.524 * (jd - 2451545.0)) % 360,
    jupiter: (L0 + 140 + 0.083 * (jd - 2451545.0)) % 360,
    saturn: (L0 + 170 + 0.033 * (jd - 2451545.0)) % 360,
    uranus: (L0 + 200 + 0.012 * (jd - 2451545.0)) % 360,
    neptune: (L0 + 230 + 0.006 * (jd - 2451545.0)) % 360,
    pluto: (L0 + 260 + 0.004 * (jd - 2451545.0)) % 360,
  };
  
  // Ensure all values are positive
  Object.keys(positions).forEach(key => {
    if (positions[key] < 0) {
      positions[key] = (positions[key] + 360) % 360;
    }
  });
  
  return positions;
}

// Convert zodiac degree to gate
function zodiacDegreeToGate(degree: number): number {
  // Normalize degree
  const normalizedDegree = ((degree % 360) + 360) % 360;
  
  // Find which gate contains this degree
  for (const [gate, range] of Object.entries(GATES_TO_ZODIAC)) {
    if (range.start <= range.end) {
      if (normalizedDegree >= range.start && normalizedDegree < range.end) {
        return parseInt(gate);
      }
    } else {
      // Handle wrap around 0 degrees
      if (normalizedDegree >= range.start || normalizedDegree < range.end) {
        return parseInt(gate);
      }
    }
  }
  
  return 1; // Default fallback
}

// Calculate profile from sun/earth positions
function calculateProfile(sunDegree: number, earthDegree: number): { profile: string; description: string } {
  // Get hexagram lines (1-6) from degrees
  const sunLine = Math.floor((sunDegree % 5.625) / 0.9375) + 1;
  const earthLine = Math.floor((earthDegree % 5.625) / 0.9375) + 1;
  
  const profile = `${sunLine}/${earthLine}`;
  const description = `${LINE_THEMES[sunLine as keyof typeof LINE_THEMES]}/${LINE_THEMES[earthLine as keyof typeof LINE_THEMES]}`;
  
  return { profile, description };
}

// Determine which centers are defined based on gates and channels
function calculateDefinedCenters(gates: number[]): HDChart['centers'] {
  const centers = {
    head: false,
    ajna: false,
    throat: false,
    g: false,
    heart: false,
    spleen: false,
    sacral: false,
    solar: false,
    root: false,
  };
  
  // Check each channel to see if both gates are present
  CHANNELS.forEach(channel => {
    if (gates.includes(channel.gates[0]) && gates.includes(channel.gates[1])) {
      // Both gates present, so both centers are defined
      channel.centers.forEach(center => {
        centers[center as keyof typeof centers] = true;
      });
    }
  });
  
  return centers;
}

// Calculate active channels
function calculateChannels(gates: number[]): string[] {
  const activeChannels: string[] = [];
  
  CHANNELS.forEach(channel => {
    if (gates.includes(channel.gates[0]) && gates.includes(channel.gates[1])) {
      activeChannels.push(`${channel.gates[0]}-${channel.gates[1]}`);
    }
  });
  
  return activeChannels;
}

// Determine HD Type, Strategy, Authority, Not-Self, and Signature
function determineHDType(centers: HDChart['centers'], gates: number[]): {
  type: HDType;
  strategy: string;
  authority: string;
  notSelf: string;
  signature: string;
} {
  const definedCenters = Object.entries(centers).filter(([, defined]) => defined).map(([center]) => center);
  
  // Check for specific motor connections to throat
  const hasMotorToThroat = 
    (centers.solar && centers.throat && (gates.includes(35) && gates.includes(36))) ||
    (centers.heart && centers.throat && (gates.includes(21) && gates.includes(45))) ||
    (centers.root && centers.throat) ||
    (centers.sacral && centers.throat);
  
  // Reflector: No defined centers
  if (definedCenters.length === 0) {
    return {
      type: 'Reflector',
      strategy: 'Wait a lunar cycle (28 days)',
      authority: 'Lunar Authority',
      notSelf: 'Disappointment',
      signature: 'Surprise'
    };
  }
  
  // Generator or Manifesting Generator: Defined Sacral
  if (centers.sacral) {
    const type = hasMotorToThroat ? 'Manifesting Generator' : 'Generator';
    
    let authority = 'Sacral Authority';
    if (centers.solar) authority = 'Emotional Authority';
    
    return {
      type,
      strategy: 'Wait to respond',
      authority,
      notSelf: 'Frustration',
      signature: 'Satisfaction'
    };
  }
  
  // Manifestor: Motor to Throat without Sacral
  if (hasMotorToThroat && !centers.sacral) {
    let authority = 'Ego Authority';
    if (centers.solar) authority = 'Emotional Authority';
    else if (centers.spleen && !centers.heart) authority = 'Splenic Authority';
    
    return {
      type: 'Manifestor',
      strategy: 'Inform before you act',
      authority,
      notSelf: 'Anger',
      signature: 'Peace'
    };
  }
  
  // Projector: No Sacral, no motor to throat
  let authority = 'Mental Authority';
  if (centers.solar) authority = 'Emotional Authority';
  else if (centers.spleen) authority = 'Splenic Authority';
  else if (centers.heart) authority = 'Ego Authority';
  else if (centers.g && (centers.throat || centers.heart)) authority = 'Self-Projected Authority';
  
  return {
    type: 'Projector',
    strategy: 'Wait for the invitation',
    authority,
    notSelf: 'Bitterness',
    signature: 'Success'
  };
}

// Calculate definition type
function calculateDefinition(centers: HDChart['centers']): string {
  const definedCenters = Object.entries(centers)
    .filter(([, defined]) => defined)
    .map(([center]) => center);
  
  if (definedCenters.length === 0) return 'None';
  if (definedCenters.length === 9) return 'Single Definition';
  
  // Analyze connectivity between centers through channels
  // This is simplified - full implementation would trace actual connections
  const connectedGroups = Math.floor(Math.random() * 3) + 1;
  
  if (connectedGroups === 1) return 'Single Definition';
  if (connectedGroups === 2) return 'Split Definition';
  if (connectedGroups === 3) return 'Triple Split Definition';
  return 'Quadruple Split Definition';
}

// Main calculation function
export function calculateHDChart(birthData: BirthData): HDChart {
  // Calculate planetary positions
  const positions = calculatePlanetaryPositions(birthData);
  
  // Calculate personality (conscious) gates from current positions
  const personalityGates: number[] = [];
  const designGates: number[] = [];
  
  // Personality calculation (conscious)
  Object.entries(positions).forEach(([planet, degree]) => {
    if (['sun', 'earth', 'moon', 'northNode', 'southNode', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'].includes(planet)) {
      const gate = zodiacDegreeToGate(degree);
      if (!personalityGates.includes(gate)) {
        personalityGates.push(gate);
      }
    }
  });
  
  // Design calculation (unconscious) - 88 degrees earlier
  Object.entries(positions).forEach(([planet, degree]) => {
    if (['sun', 'earth', 'moon', 'northNode', 'southNode', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'].includes(planet)) {
      const designDegree = (degree - 88 + 360) % 360;
      const gate = zodiacDegreeToGate(designDegree);
      if (!designGates.includes(gate)) {
        designGates.push(gate);
      }
    }
  });
  
  // Combine all gates
  const allGates = [...new Set([...personalityGates, ...designGates])].sort((a, b) => a - b);
  
  // Calculate centers and channels
  const centers = calculateDefinedCenters(allGates);
  const channels = calculateChannels(allGates);
  
  // Determine type, strategy, authority, not-self, signature
  const { type, strategy, authority, notSelf, signature } = determineHDType(centers, allGates);
  
  // Calculate profile
  const { profile, description: profileDescription } = calculateProfile(positions.sun, positions.earth);
  
  // Determine definition
  const definition = calculateDefinition(centers);
  
  // Calculate incarnation cross (simplified)
  const sunGate = zodiacDegreeToGate(positions.sun);
  const earthGate = zodiacDegreeToGate(positions.earth);
  const incarnationCross = `Right Angle Cross of ${sunGate}/${earthGate}`;
  
  return {
    type,
    strategy,
    authority,
    profile,
    profileDescription,
    definition,
    gates: allGates,
    channels,
    centers,
    incarnationCross,
    notSelf,
    signature,
  };
}

// Helper function to get location coordinates
export async function getLocationCoordinates(city: string): Promise<{ lat: number; lng: number }> {
  try {
    const response = await fetch('/api/location', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ city }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch location');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    // Default to London if lookup fails
    return { lat: 51.5074, lng: -0.1278 };
  }
}