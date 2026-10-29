import { getCommunitiesByCity } from './communities'

export interface Location {
  id: string
  slug: string
  name: string
  state: string
  description: string
  highlights: string[]
  demographics?: string
  schools?: string
  amenities?: string
  keywords: string[]
}

export const locations: Location[] = [
  {
    id: 'henderson',
    slug: 'henderson',
    name: 'Henderson',
    state: 'Nevada',
    description: 'Henderson, Nevada\'s second-largest city, is celebrated for innovative planning, master-planned communities, and excellent public services. Located just 16 miles from Las Vegas, Henderson offers highly rated public and private schools, strong higher education opportunities, and year-round outdoor recreation in a stunning desert setting.',
    highlights: [
      'Highly rated public and private schools',
      'Master-planned communities with exceptional amenities',
      '16 miles from Las Vegas Strip',
      'Strong higher education opportunities',
      'Year-round outdoor recreation',
      'Excellent public services and infrastructure',
    ],
    demographics: 'Over 330,000 residents',
    schools: 'Clark County School District campuses and private school options',
    amenities: 'Golf courses, parks, recreation centers, shopping centers, and dining',
    keywords: ['Henderson NV', 'Henderson Nevada', 'Beazer Homes Henderson', 'new homes Henderson', 'Henderson real estate'],
  },
  {
    id: 'las-vegas',
    slug: 'las-vegas',
    name: 'Las Vegas',
    state: 'Nevada',
    description: 'Las Vegas, set in the Nevada desert, is known worldwide for its dining, entertainment, and iconic casinos. Beyond the Strip, the city provides residents with respected schools, an expansive park system, and endless recreation. With Harry Reid International Airport connecting to destinations around the globe, Las Vegas offers convenience, opportunity, and excitement making it a growing choice for families and professionals alike.',
    highlights: [
      'World-class dining and entertainment',
      'Respected school districts',
      'Expansive park system',
      'International airport access',
      'Diverse neighborhoods',
      'Strong job market',
    ],
    demographics: 'Over 670,000 residents',
    schools: 'Clark County School District and various private and charter school options',
    amenities: 'Parks, recreation centers, shopping, dining, entertainment venues, and cultural attractions',
    keywords: ['Las Vegas NV', 'Las Vegas Nevada', 'Beazer Homes Las Vegas', 'new construction Las Vegas', 'Las Vegas real estate'],
  },
  {
    id: 'boulder-city',
    slug: 'boulder-city',
    name: 'Boulder City',
    state: 'Nevada',
    description: 'Boulder City, just 30 minutes from Las Vegas, is one of Nevada\'s most charming and historic communities. Known as the gateway to Hoover Dam and Lake Mead, the city combines small-town hospitality with easy access to outdoor adventure. With highly regarded schools, welcoming neighborhoods, and a relaxed pace of life, Boulder City offers a refreshing alternative to the energy of the Las Vegas Valley.',
    highlights: [
      'Small-town charm and hospitality',
      'Gateway to Hoover Dam and Lake Mead',
      'Highly regarded schools',
      'Relaxed pace of life',
      'Easy access to outdoor recreation',
      '30 minutes from Las Vegas',
    ],
    demographics: 'Approximately 16,000 residents',
    schools: 'Boulder City Schools with highly regarded public education',
    amenities: 'Parks, trails, Lake Mead access, historic downtown, community events',
    keywords: ['Boulder City NV', 'Boulder City Nevada', 'Beazer Homes Boulder City', 'new homes Boulder City', 'Boulder City real estate'],
  },
  {
    id: 'mesquite',
    slug: 'mesquite',
    name: 'Mesquite',
    state: 'Nevada',
    description: 'Mesquite, Nevada, located 80 miles northeast of Las Vegas near the Arizona border, is a growing community known for its golf courses, scenic desert landscapes, and welcoming small-town feel. Residents enjoy a relaxed lifestyle with access to parks, trails, and recreation, making Mesquite an attractive choice for families, retirees, and anyone seeking a balance of comfort and adventure.',
    highlights: [
      'Premier golf course community',
      'Scenic desert landscapes',
      'Welcoming small-town atmosphere',
      'Relaxed lifestyle',
      'Affordable living',
      'Access to parks and trails',
    ],
    demographics: 'Approximately 20,000 residents',
    schools: 'Virgin Valley School District serving the community',
    amenities: 'Golf courses, parks, trails, recreation facilities, and community events',
    keywords: ['Mesquite NV', 'Mesquite Nevada', 'Beazer Homes Mesquite', 'new homes Mesquite', 'Mesquite real estate'],
  },
]

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug)
}

export function getCommunitiesForLocation(locationSlug: string) {
  const location = getLocationBySlug(locationSlug)
  if (!location) return []
  
  // Map location slugs to city names
  const cityMap: Record<string, string> = {
    'henderson': 'Henderson',
    'las-vegas': 'Las Vegas',
    'boulder-city': 'Boulder City',
    'mesquite': 'Mesquite',
  }
  
  const cityName = cityMap[locationSlug]
  if (!cityName) return []
  
  return getCommunitiesByCity(cityName)
}

