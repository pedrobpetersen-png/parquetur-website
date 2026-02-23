export interface Park {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  location: {
    city: string;
    state: string;
    coordinates: { lat: number; lng: number };
  };
  images: string[];
  highlights: string[];
  ticketPrices: {
    adult: number;
    child: number;
    senior: number;
  };
  openingHours: string;
  featured?: boolean;
}

export const parks: Park[] = [
  {
    id: '1',
    slug: 'chapada-dos-veadeiros',
    name: 'Parque Nacional Chapada dos Veadeiros',
    description: 'park1Desc',
    longDescription: 'Parque Nacional Chapada dos Veadeiros is a UNESCO World Heritage Site located in the heart of the Brazilian Cerrado. With over 240,000 hectares of protected land, the park features spectacular waterfalls, crystal-clear natural pools, and rock formations over 1.8 billion years old. The diverse ecosystem hosts unique flora and fauna, making it a paradise for nature lovers and adventure seekers.',
    location: {
      city: 'Alto Paraíso de Goiás',
      state: 'Goiás',
      coordinates: { lat: -14.1315, lng: -47.5189 }
    },
    images: [
      '/images/parks/chapada-dos-veadeiros/hero.jpg',
      '/images/parks/chapada-dos-veadeiros/waterfall.jpg',
      '/images/parks/chapada-dos-veadeiros/canyon.jpg',
      '/images/parks/chapada-dos-veadeiros/trail.jpg'
    ],
    highlights: [
      'UNESCO World Heritage Site',
      'Ancient rock formations (1.8 billion years)',
      'Spectacular waterfalls and natural pools',
      'Rich Cerrado biodiversity',
      'Hiking trails for all levels'
    ],
    ticketPrices: {
      adult: 45.00,
      child: 22.50,
      senior: 22.50
    },
    openingHours: 'Tuesday to Sunday: 8:00 AM - 6:00 PM',
    featured: true
  },
  {
    id: '2',
    slug: 'ibitipoca',
    name: 'Parque Estadual do Ibitipoca',
    description: 'park2Desc',
    longDescription: 'Parque Estadual do Ibitipoca offers one of the most enchanting landscapes in Minas Gerais. Known for its quartzite caves, stunning waterfalls like Cachoeira dos Macacos, and the famous Janela do Céu viewpoint, the park attracts visitors seeking both adventure and tranquility. The unique rock formations and diverse trails make it a perfect destination for hiking and nature photography.',
    location: {
      city: 'Lima Duarte',
      state: 'Minas Gerais',
      coordinates: { lat: -21.7070, lng: -43.8977 }
    },
    images: [
      '/images/parks/ibitipoca/hero.jpg',
      '/images/parks/ibitipoca/cachoeira.jpg',
      '/images/parks/ibitipoca/ponte.jpg',
      '/images/parks/ibitipoca/poco.jpg'
    ],
    highlights: [
      'Janela do Céu viewpoint',
      'Cachoeira dos Macacos waterfall',
      'Quartzite caves and grottoes',
      'Ponte de Pedra natural bridge',
      'Mountain peak trails'
    ],
    ticketPrices: {
      adult: 40.00,
      child: 20.00,
      senior: 20.00
    },
    openingHours: 'Daily: 8:00 AM - 5:00 PM',
    featured: true
  },
  {
    id: '3',
    slug: 'itacolomi',
    name: 'Parque Estadual Itacolomi',
    description: 'park3Desc',
    longDescription: 'Parque Estadual Itacolomi preserves a crucial fragment of Atlantic Forest in the region of Ouro Preto. The park is dominated by the iconic Pico do Itacolomi, a mountain that served as a navigation reference during Brazil\'s gold rush era. Visitors can explore historic trails, observe diverse wildlife, and enjoy panoramic views of the surrounding mountains and colonial towns.',
    location: {
      city: 'Ouro Preto',
      state: 'Minas Gerais',
      coordinates: { lat: -20.4286, lng: -43.4825 }
    },
    images: [
      '/images/parks/itacolomi/hero.jpg',
      '/images/parks/itacolomi/peak.jpg',
      '/images/parks/itacolomi/forest.jpg',
      '/images/parks/itacolomi/trail.jpg'
    ],
    highlights: [
      'Pico do Itacolomi peak (1,772m)',
      'Atlantic Forest biodiversity',
      'Historic gold rush trails',
      'Panoramic mountain views',
      'Colonial heritage sites'
    ],
    ticketPrices: {
      adult: 35.00,
      child: 17.50,
      senior: 17.50
    },
    openingHours: 'Wednesday to Sunday: 8:00 AM - 5:00 PM',
    featured: false
  },
  {
    id: '4',
    slug: 'itatiaia',
    name: 'Parque Nacional Itatiaia',
    description: 'park4Desc',
    longDescription: 'Parque Nacional Itatiaia, established in 1937 as Brazil\'s first national park, offers a unique blend of Atlantic Forest and high-altitude grasslands. The park is divided into two distinct areas: the lower part features lush forests and numerous waterfalls, while the upper part showcases alpine-like landscapes with rocky peaks, including Pico das Agulhas Negras. Rich in biodiversity, Itatiaia is home to rare species and offers trails for all experience levels.',
    location: {
      city: 'Itatiaia',
      state: 'Rio de Janeiro',
      coordinates: { lat: -22.4514, lng: -44.6197 }
    },
    images: [
      '/images/parks/itatiaia/hero.jpg',
      '/images/parks/itatiaia/agulhas-negras.jpg',
      '/images/parks/itatiaia/waterfall.jpg',
      '/images/parks/itatiaia/plateau.jpg'
    ],
    highlights: [
      'Brazil\'s first national park (1937)',
      'Pico das Agulhas Negras (2,791m)',
      'Alpine-like high-altitude landscapes',
      'Atlantic Forest waterfalls',
      'Diverse wildlife including endemic species'
    ],
    ticketPrices: {
      adult: 50.00,
      child: 25.00,
      senior: 25.00
    },
    openingHours: 'Daily: 8:00 AM - 5:00 PM',
    featured: true
  },
  {
    id: '5',
    slug: 'chapada-dos-guimaraes',
    name: 'Parque Nacional Chapada dos Guimarães',
    description: 'park5Desc',
    longDescription: 'Parque Nacional Chapada dos Guimarães protects an area of exceptional natural beauty in Mato Grosso. The park features impressive sandstone formations, deep canyons, and spectacular waterfalls including the 86-meter Véu de Noiva. The plateau offers stunning viewpoints overlooking the surrounding lowlands, and the region is rich in archaeological sites with ancient rock paintings.',
    location: {
      city: 'Chapada dos Guimarães',
      state: 'Mato Grosso',
      coordinates: { lat: -15.4614, lng: -55.8318 }
    },
    images: [
      '/images/parks/chapada-dos-guimaraes/hero.jpg',
      '/images/parks/chapada-dos-guimaraes/veu-noiva.jpg',
      '/images/parks/chapada-dos-guimaraes/canyon.jpg',
      '/images/parks/chapada-dos-guimaraes/viewpoint.jpg'
    ],
    highlights: [
      'Véu de Noiva waterfall (86m)',
      'Dramatic sandstone canyons',
      'Ancient rock paintings',
      'Panoramic plateau viewpoints',
      'Unique Cerrado ecosystem'
    ],
    ticketPrices: {
      adult: 40.00,
      child: 20.00,
      senior: 20.00
    },
    openingHours: 'Daily: 8:00 AM - 5:00 PM',
    featured: false
  },
  {
    id: '6',
    slug: 'caminhos-do-mar',
    name: 'Parque Estadual Caminhos do Mar',
    description: 'park6Desc',
    longDescription: 'Parque Estadual Caminhos do Mar preserves the historic routes that connected the São Paulo plateau to the coast. The park features remnants of colonial-era engineering, including sections of the old Caminho do Mar road. Visitors can explore Atlantic Forest trails, discover waterfalls, and learn about the region\'s important role in Brazilian history while enjoying activities like camping and kayaking.',
    location: {
      city: 'São Bernardo do Campo',
      state: 'São Paulo',
      coordinates: { lat: -23.8528, lng: -46.3178 }
    },
    images: [
      '/images/parks/caminhos-do-mar/hero.jpg',
      '/images/parks/caminhos-do-mar/trail.jpg',
      '/images/parks/caminhos-do-mar/camping.jpg',
      '/images/parks/caminhos-do-mar/kayak.jpg'
    ],
    highlights: [
      'Historic colonial-era trails',
      'Atlantic Forest ecosystem',
      'Camping facilities',
      'Kayaking opportunities',
      'Cultural heritage sites'
    ],
    ticketPrices: {
      adult: 35.00,
      child: 17.50,
      senior: 17.50
    },
    openingHours: 'Daily: 8:00 AM - 6:00 PM',
    featured: false
  }
];

export function getParkBySlug(slug: string): Park | undefined {
  return parks.find((park) => park.slug === slug);
}

export function getFeaturedParks(): Park[] {
  return parks.filter((park) => park.featured);
}
