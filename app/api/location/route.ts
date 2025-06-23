import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { city } = await request.json();
    
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`,
      {
        headers: {
          'User-Agent': 'HerIntuitionLab/1.0',
          'Accept': 'application/json',
        },
      }
    );
    
    const data = await response.json();
    
    if (data && data.length > 0) {
      return NextResponse.json({
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
      });
    }
    
    // Default to London
    return NextResponse.json({ lat: 51.5074, lng: -0.1278 });
  } catch (error) {
    console.error('Location API error:', error);
    return NextResponse.json({ lat: 51.5074, lng: -0.1278 });
  }
}