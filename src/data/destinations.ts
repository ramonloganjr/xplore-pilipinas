export interface Destination {
  id: number;
  name: string;
  position: { lat: number; lng: number };
  category: 'BEACHES' | 'NATURE' | 'HISTORY' | 'ADVENTURE';
  image: string;
  description: string;
  wikiUrl: string;
  // Unique features
  bestTime: { months: string; icon: '☀️' | '🌤️' | '🌧️' };
  localDish: { name: string; price: string };
  goldenHour?: { sunrise: string; sunset: string; spot: string };
  budget: { min: number; max: number };
  festival?: { name: string; date: string };
}

const BASE_URL = import.meta.env.BASE_URL;

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Calle Crisologo",
    position: { lat: 17.5749, lng: 120.3872 },
    category: "HISTORY",
    image: `${BASE_URL}images/calle_crisologo.png`,
    description: "Step back in time on this 16th-century Spanish colonial street.",
    wikiUrl: "https://en.wikipedia.org/wiki/Calle_Crisologo",
    bestTime: { months: "Nov-Feb", icon: "☀️" },
    localDish: { name: "Empanada Ilocano", price: "₱50" },
    goldenHour: { sunrise: "5:45 AM", sunset: "6:00 PM", spot: "Plaza Salcedo" },
    budget: { min: 1500, max: 4000 },
    festival: { name: "Viva Vigan Festival", date: "May 1-7" }
  },
  {
    id: 2,
    name: "Banaue Rice Terraces",
    position: { lat: 16.9173, lng: 121.0593 },
    category: "NATURE",
    image: `${BASE_URL}images/banaue_terraces.png`,
    description: "The 'Eighth Wonder of the World', carved into the mountains.",
    wikiUrl: "https://en.wikipedia.org/wiki/Banaue_Rice_Terraces",
    bestTime: { months: "Mar-May", icon: "☀️" },
    localDish: { name: "Pinikpikan", price: "₱150" },
    goldenHour: { sunrise: "5:30 AM", sunset: "6:15 PM", spot: "Batad Viewpoint" },
    budget: { min: 2000, max: 5000 },
    festival: { name: "Imbayah Festival", date: "April 24-28" }
  },
  {
    id: 3,
    name: "Intramuros",
    position: { lat: 14.5891, lng: 120.9733 },
    category: "HISTORY",
    image: `${BASE_URL}images/intramuros.png`,
    description: "Discover the dungeons and cathedrals of Manila's Walled City.",
    wikiUrl: "https://en.wikipedia.org/wiki/Intramuros",
    bestTime: { months: "Dec-Feb", icon: "🌤️" },
    localDish: { name: "Halo-Halo", price: "₱80" },
    goldenHour: { sunrise: "5:50 AM", sunset: "6:05 PM", spot: "Fort Santiago" },
    budget: { min: 2500, max: 8000 }
  },
  {
    id: 4,
    name: "Mayon Volcano",
    position: { lat: 13.2548, lng: 123.6850 },
    category: "NATURE",
    image: `${BASE_URL}images/mayon_volcano.png`,
    description: "The world's most perfect volcanic cone, best viewed via ATV.",
    wikiUrl: "https://en.wikipedia.org/wiki/Mayon_Volcano",
    bestTime: { months: "Mar-May", icon: "☀️" },
    localDish: { name: "Bicol Express", price: "₱120" },
    goldenHour: { sunrise: "5:25 AM", sunset: "6:00 PM", spot: "Cagsawa Ruins" },
    budget: { min: 1800, max: 4500 }
  },
  {
    id: 5,
    name: "Underground River",
    position: { lat: 10.1926, lng: 118.9266 },
    category: "NATURE",
    image: `${BASE_URL}images/underground_river.png`,
    description: "Paddle through a massive limestone cave system in Palawan.",
    wikiUrl: "https://en.wikipedia.org/wiki/Puerto_Princesa_Subterranean_River_National_Park",
    bestTime: { months: "Dec-May", icon: "☀️" },
    localDish: { name: "Tamilok", price: "₱100" },
    budget: { min: 3000, max: 7000 }
  },
  {
    id: 6,
    name: "El Nido Lagoons",
    position: { lat: 11.1955, lng: 119.4124 },
    category: "BEACHES",
    image: `${BASE_URL}images/el_nido.png`,
    description: "Limestone cliffs guarding crystal-clear turquoise lagoons.",
    wikiUrl: "https://en.wikipedia.org/wiki/El_Nido,_Palawan",
    bestTime: { months: "Dec-Mar", icon: "☀️" },
    localDish: { name: "Fresh Crab", price: "₱350" },
    goldenHour: { sunrise: "5:40 AM", sunset: "6:10 PM", spot: "Las Cabanas Beach" },
    budget: { min: 4000, max: 12000 }
  },
  {
    id: 7,
    name: "Boracay White Beach",
    position: { lat: 11.9674, lng: 121.9248 },
    category: "BEACHES",
    image: `${BASE_URL}images/boracay.png`,
    description: "Award-winning powdery white sand and epic sunset views.",
    wikiUrl: "https://en.wikipedia.org/wiki/White_Beach_(Boracay)",
    bestTime: { months: "Nov-May", icon: "☀️" },
    localDish: { name: "Calamansi Muffin", price: "₱75" },
    goldenHour: { sunrise: "5:50 AM", sunset: "6:20 PM", spot: "Station 1" },
    budget: { min: 3500, max: 15000 },
    festival: { name: "Ati-Atihan", date: "Jan 12-18" }
  },
  {
    id: 8,
    name: "Magellan's Cross",
    position: { lat: 10.2936, lng: 123.9018 },
    category: "HISTORY",
    image: `${BASE_URL}images/magellans_cross.png`,
    description: "A significant historical landmark marking the birth of Christianity.",
    wikiUrl: "https://en.wikipedia.org/wiki/Magellan%27s_Cross",
    bestTime: { months: "Jan-May", icon: "🌤️" },
    localDish: { name: "Lechon Cebu", price: "₱250" },
    budget: { min: 2000, max: 6000 },
    festival: { name: "Sinulog Festival", date: "Jan 19" }
  },
  {
    id: 9,
    name: "Chocolate Hills",
    position: { lat: 9.8297, lng: 124.1398 },
    category: "NATURE",
    image: `${BASE_URL}images/chocolate_hills.png`,
    description: "Over 1,200 geological hills that turn chocolate brown in dry season.",
    wikiUrl: "https://en.wikipedia.org/wiki/Chocolate_Hills",
    bestTime: { months: "Feb-May", icon: "☀️" },
    localDish: { name: "Kalamay", price: "₱60" },
    goldenHour: { sunrise: "5:35 AM", sunset: "6:05 PM", spot: "Carmen Viewpoint" },
    budget: { min: 1500, max: 4000 },
    festival: { name: "Sandugo Festival", date: "July 1-31" }
  },
  {
    id: 10,
    name: "Cloud 9 Siargao",
    position: { lat: 9.8143, lng: 126.1736 },
    category: "ADVENTURE",
    image: `${BASE_URL}images/siargao.png`,
    description: "Ride the famous thick, hollow tubes of the Surfing Capital.",
    wikiUrl: "https://en.wikipedia.org/wiki/Cloud_9_(surfing)",
    bestTime: { months: "Sep-Nov", icon: "🌤️" },
    localDish: { name: "Kinilaw", price: "₱180" },
    goldenHour: { sunrise: "5:20 AM", sunset: "5:50 PM", spot: "Cloud 9 Tower" },
    budget: { min: 2500, max: 8000 },
    festival: { name: "Surfing Cup", date: "September" }
  },
  {
    id: 11,
    name: "Mt. Maculot",
    position: { lat: 13.9528, lng: 121.0458 },
    category: "ADVENTURE",
    image: `${BASE_URL}images/mt_maculot.png`,
    description: "Conquer the Rockies summit with breathtaking views of Taal Lake.",
    wikiUrl: "https://en.wikipedia.org/wiki/Mount_Maculot",
    bestTime: { months: "Nov-May", icon: "☀️" },
    localDish: { name: "Bulalo", price: "₱250" },
    goldenHour: { sunrise: "5:30 AM", sunset: "6:00 PM", spot: "Rockies Peak" },
    budget: { min: 500, max: 2000 }
  },
  {
    id: 12,
    name: "Davao City",
    position: { lat: 7.0731, lng: 125.6128 },
    category: "NATURE",
    image: `${BASE_URL}images/davao_city.png`,
    description: "Home of the Philippine Eagle and gateway to Mt. Apo.",
    wikiUrl: "https://en.wikipedia.org/wiki/Davao_City",
    bestTime: { months: "Mar-May", icon: "☀️" },
    localDish: { name: "Durian", price: "₱150" },
    goldenHour: { sunrise: "5:15 AM", sunset: "5:45 PM", spot: "Eden Nature Park" },
    budget: { min: 2000, max: 6000 },
    festival: { name: "Kadayawan Festival", date: "August 17-22" }
  },
  {
    id: 13,
    name: "Coron, Palawan",
    position: { lat: 11.9986, lng: 120.2043 },
    category: "BEACHES",
    image: `${BASE_URL}images/coron.png`,
    description: "Explore pristine lagoons and WWII shipwreck dive sites.",
    wikiUrl: "https://en.wikipedia.org/wiki/Coron,_Palawan",
    bestTime: { months: "Dec-May", icon: "☀️" },
    localDish: { name: "Crocodile Sisig", price: "₱200" },
    goldenHour: { sunrise: "5:45 AM", sunset: "6:15 PM", spot: "Kayangan Lake" },
    budget: { min: 3500, max: 10000 }
  },
  {
    id: 14,
    name: "Taal Volcano",
    position: { lat: 14.0113, lng: 120.9983 },
    category: "NATURE",
    image: `${BASE_URL}images/taal_volcano.png`,
    description: "The world's smallest active volcano within a lake within a volcano.",
    wikiUrl: "https://en.wikipedia.org/wiki/Taal_Volcano",
    bestTime: { months: "Nov-May", icon: "🌤️" },
    localDish: { name: "Kapeng Barako", price: "₱60" },
    goldenHour: { sunrise: "5:35 AM", sunset: "6:00 PM", spot: "Tagaytay Ridge" },
    budget: { min: 1000, max: 3000 }
  },
  {
    id: 15,
    name: "Camiguin Island",
    position: { lat: 9.1733, lng: 124.7294 },
    category: "BEACHES",
    image: `${BASE_URL}images/camiguin.png`,
    description: "The island born of fire with hot springs and a sunken cemetery.",
    wikiUrl: "https://en.wikipedia.org/wiki/Camiguin",
    bestTime: { months: "Mar-Jun", icon: "☀️" },
    localDish: { name: "Pastel", price: "₱35" },
    goldenHour: { sunrise: "5:20 AM", sunset: "5:50 PM", spot: "White Island" },
    budget: { min: 1500, max: 4000 },
    festival: { name: "Lanzones Festival", date: "October 28" }
  },
  {
    id: 16,
    name: "Sagada",
    position: { lat: 17.0833, lng: 120.9000 },
    category: "ADVENTURE",
    image: `${BASE_URL}images/sagada.png`,
    description: "Discover hanging coffins, caves, and misty mountain culture.",
    wikiUrl: "https://en.wikipedia.org/wiki/Sagada",
    bestTime: { months: "Nov-Feb", icon: "🌤️" },
    localDish: { name: "Pinikpikan", price: "₱150" },
    goldenHour: { sunrise: "5:40 AM", sunset: "5:55 PM", spot: "Kiltepan Viewpoint" },
    budget: { min: 1500, max: 4000 }
  }
];

