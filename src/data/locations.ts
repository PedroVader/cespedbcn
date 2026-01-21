// products.ts

export type ProductCategory = 
  | 'funcional'
  | 'terraza' 
  | 'jardin'
  | 'deportivo'
  | 'piscinas'
  | 'eventos'
  | 'comercial'
  | 'residencial-terraza'
  | 'residencial-jardin'
  | 'institucional';

export interface Barrio {
  slug: string;
  name: string;
  type: ProductCategory;
  population?: number;
  businessDensity?: 'alta' | 'media' | 'baja';
}

export interface Distrito {
  slug: string;
  name: string;
  barrios: Barrio[];
  image?: string;
  description?: string;
}

export const barcelonaLocations: Distrito[] = [
  {
    name: 'Ciutat Vella',
    slug: 'ciutat-vella',
    image: '/ciutat-vella.jpg',
    description: 'Centro histórico con alta demanda de terrazas y eventos',
    barrios: [
      { name: 'El Raval', slug: 'el-raval', type: 'eventos', businessDensity: 'alta' },
      { name: 'El Gòtic', slug: 'el-gotic', type: 'eventos', businessDensity: 'alta' },
      { name: 'La Barceloneta', slug: 'la-barceloneta', type: 'comercial', businessDensity: 'alta' },
      { name: 'Sant Pere i Santa Caterina', slug: 'sant-pere', type: 'comercial', businessDensity: 'alta' },
      { name: 'La Ribera', slug: 'la-ribera', type: 'eventos', businessDensity: 'alta' },
      { name: 'El Born', slug: 'el-born', type: 'comercial', businessDensity: 'alta' }
    ]
  },
  {
    name: 'L\'Eixample',
    slug: 'eixample',
    image: '/eixample.png',
    description: 'Distrito con mayor densidad de terrazas y negocios premium',
    barrios: [
      { name: 'Sagrada Família', slug: 'sagrada-familia', type: 'residencial-terraza', businessDensity: 'alta' },
      { name: 'El Fort Pienc', slug: 'fort-pienc', type: 'comercial', businessDensity: 'media' },
      { name: 'Dreta de l\'Eixample', slug: 'dreta-eixample', type: 'residencial-terraza', businessDensity: 'alta' },
      { name: 'L\'Antiga Esquerra de l\'Eixample', slug: 'antiga-esquerra', type: 'residencial-terraza', businessDensity: 'alta' },
      { name: 'La Nova Esquerra de l\'Eixample', slug: 'nova-esquerra', type: 'residencial-terraza', businessDensity: 'alta' },
      { name: 'Sant Antoni', slug: 'sant-antoni', type: 'comercial', businessDensity: 'alta' },
      { name: 'Esquerra de l\'Eixample', slug: 'esquerra-eixample', type: 'residencial-terraza', businessDensity: 'alta' },
      { name: 'La Dreta de l\'Eixample', slug: 'la-dreta', type: 'comercial', businessDensity: 'alta' }
    ]
  },
  {
    name: 'Sants-Montjuïc',
    slug: 'sants-montjuic',
    image: '/sants.jpg',
    description: 'Zona con instalaciones deportivas y parques emblemáticos',
    barrios: [
      { name: 'El Poble-sec', slug: 'poble-sec', type: 'comercial', businessDensity: 'media' },
      { name: 'Sants', slug: 'sants', type: 'residencial-terraza', businessDensity: 'alta' },
      { name: 'Hostafrancs', slug: 'hostafrancs', type: 'comercial', businessDensity: 'media' },
      { name: 'La Marina del Prat Vermell', slug: 'marina-prat-vermell', type: 'deportivo', businessDensity: 'baja' },
      { name: 'La Marina de Port', slug: 'marina-port', type: 'deportivo', businessDensity: 'media' },
      { name: 'La Font de la Guatlla', slug: 'font-guatlla', type: 'residencial-jardin', businessDensity: 'baja' },
      { name: 'Montjuïc', slug: 'montjuic', type: 'eventos', businessDensity: 'baja' },
      { name: 'Zona Franca', slug: 'zona-franca', type: 'institucional', businessDensity: 'media' },
      { name: 'El Parc i la Llacuna', slug: 'parc-llacuna', type: 'deportivo', businessDensity: 'baja' },
      { name: 'La Bordeta', slug: 'bordeta', type: 'residencial-terraza', businessDensity: 'media' },
      { name: 'Sants-Badal', slug: 'sants-badal', type: 'comercial', businessDensity: 'media' }
    ]
  },
  {
    name: 'Les Corts',
    slug: 'les-corts',
    image: '/les-corts.webp',
    description: 'Distrito residencial premium con jardines y piscinas',
    barrios: [
      { name: 'Les Corts', slug: 'les-corts-barrio', type: 'residencial-terraza', businessDensity: 'alta' },
      { name: 'La Maternitat i Sant Ramon', slug: 'maternitat', type: 'residencial-jardin', businessDensity: 'media' },
      { name: 'Pedralbes', slug: 'pedralbes', type: 'residencial-jardin', businessDensity: 'alta' },
      { name: 'Les Corts Centre', slug: 'les-corts-centre', type: 'comercial', businessDensity: 'alta' }
    ]
  },
  {
    name: 'Sarrià-Sant Gervasi',
    slug: 'sarria-sant-gervasi',
    image: '/sarria.jpg',
    description: 'Zona premium con mayor demanda de jardines y piscinas privadas',
    barrios: [
      { name: 'Sarrià', slug: 'sarria', type: 'residencial-jardin', businessDensity: 'alta' },
      { name: 'Les Tres Torres', slug: 'tres-torres', type: 'residencial-jardin', businessDensity: 'alta' },
      { name: 'La Bonanova', slug: 'bonanova', type: 'residencial-jardin', businessDensity: 'alta' },
      { name: 'Galvany', slug: 'galvany', type: 'residencial-terraza', businessDensity: 'alta' },
      { name: 'El Putxet i Farró', slug: 'putxet', type: 'residencial-terraza', businessDensity: 'media' },
      { name: 'Vallvidrera, el Tibidabo i les Planes', slug: 'vallvidrera', type: 'residencial-jardin', businessDensity: 'baja' },
      { name: 'Sant Gervasi - La Bonanova', slug: 'sant-gervasi-bonanova', type: 'residencial-jardin', businessDensity: 'alta' },
      { name: 'Sant Gervasi - Galvany', slug: 'sant-gervasi-galvany', type: 'residencial-terraza', businessDensity: 'alta' },
      { name: 'El Farró', slug: 'el-farro', type: 'residencial-terraza', businessDensity: 'media' }
    ]
  },
  {
    name: 'Gràcia',
    slug: 'gracia',
    image: '/gracia.webp',
    description: 'Barrio con terrazas comunitarias y espacios verdes urbanos',
    barrios: [
      { name: 'Vila de Gràcia', slug: 'vila-de-gracia', type: 'residencial-terraza', businessDensity: 'alta' },
      { name: 'El Camp d\'en Grassot i Gràcia Nova', slug: 'camp-grassot', type: 'comercial', businessDensity: 'media' },
      { name: 'La Salut', slug: 'la-salut', type: 'residencial-jardin', businessDensity: 'media' },
      { name: 'El Coll', slug: 'el-coll', type: 'residencial-jardin', businessDensity: 'baja' },
      { name: 'Vallcarca i els Penitents', slug: 'vallcarca', type: 'residencial-jardin', businessDensity: 'baja' },
      { name: 'Gràcia Nova', slug: 'gracia-nova', type: 'residencial-terraza', businessDensity: 'media' }
    ]
  },
  {
    name: 'Horta-Guinardó',
    slug: 'horta-guinardo',
    image: '/horta-guinardo.jpg',
    description: 'Zona con campos deportivos y jardines residenciales',
    barrios: [
      { name: 'El Guinardó', slug: 'guinardo', type: 'residencial-terraza', businessDensity: 'media' },
      { name: 'Horta', slug: 'horta', type: 'residencial-jardin', businessDensity: 'media' },
      { name: 'La Teixonera', slug: 'teixonera', type: 'residencial-terraza', businessDensity: 'baja' },
      { name: 'El Carmel', slug: 'carmel', type: 'residencial-terraza', businessDensity: 'media' },
      { name: 'La Font d\'en Fargues', slug: 'font-fargues', type: 'residencial-jardin', businessDensity: 'baja' },
      { name: 'El Baix Guinardó', slug: 'baix-guinardo', type: 'comercial', businessDensity: 'media' },
      { name: 'Can Baró', slug: 'can-baro', type: 'residencial-jardin', businessDensity: 'baja' },
      { name: 'Sant Genís dels Agudells', slug: 'sant-genis', type: 'residencial-jardin', businessDensity: 'baja' },
      { name: 'Montbau', slug: 'montbau', type: 'residencial-jardin', businessDensity: 'baja' },
      { name: 'La Vall d\'Hebron', slug: 'vall-hebron', type: 'deportivo', businessDensity: 'media' },
      { name: 'La Clota', slug: 'la-clota', type: 'residencial-jardin', businessDensity: 'baja' }
    ]
  },
  {
    name: 'Nou Barris',
    slug: 'nou-barris',
    image: '/nou-barris.jpg',
    description: 'Distrito con instalaciones deportivas y espacios comunitarios',
    barrios: [
      { name: 'Vilapicina i la Torre Llobeta', slug: 'vilapicina', type: 'deportivo', businessDensity: 'media' },
      { name: 'Porta', slug: 'porta', type: 'deportivo', businessDensity: 'media' },
      { name: 'La Prosperitat', slug: 'prosperitat', type: 'comercial', businessDensity: 'media' },
      { name: 'Roquetes', slug: 'roquetes', type: 'residencial-terraza', businessDensity: 'media' },
      { name: 'Verdun', slug: 'verdun', type: 'deportivo', businessDensity: 'baja' },
      { name: 'La Trinitat Nova', slug: 'trinitat-nova', type: 'deportivo', businessDensity: 'baja' },
      { name: 'Torre Baró', slug: 'torre-baro', type: 'deportivo', businessDensity: 'baja' },
      { name: 'Ciutat Meridiana', slug: 'ciutat-meridiana', type: 'deportivo', businessDensity: 'baja' },
      { name: 'Vallbona', slug: 'vallbona', type: 'deportivo', businessDensity: 'baja' },
      { name: 'La Guineueta', slug: 'guineueta', type: 'deportivo', businessDensity: 'media' },
      { name: 'Canyelles', slug: 'canyelles', type: 'deportivo', businessDensity: 'baja' },
      { name: 'Les Roquetes', slug: 'les-roquetes', type: 'residencial-terraza', businessDensity: 'media' },
      { name: 'Can Peguera', slug: 'can-peguera', type: 'deportivo', businessDensity: 'baja' }
    ]
  },
  {
    name: 'Sant Andreu',
    slug: 'sant-andreu',
    image: '/sant-andreu.webp',
    description: 'Distrito en desarrollo con nuevas instalaciones deportivas',
    barrios: [
      { name: 'Sant Andreu de Palomar', slug: 'sant-andreu-palomar', type: 'residencial-terraza', businessDensity: 'alta' },
      { name: 'La Sagrera', slug: 'la-sagrera', type: 'comercial', businessDensity: 'media' },
      { name: 'El Congrés i els Indians', slug: 'congres', type: 'comercial', businessDensity: 'media' },
      { name: 'Navas', slug: 'navas', type: 'comercial', businessDensity: 'media' },
      { name: 'La Trinitat Vella', slug: 'trinitat-vella', type: 'deportivo', businessDensity: 'baja' },
      { name: 'Baró de Viver', slug: 'baro-viver', type: 'deportivo', businessDensity: 'baja' },
      { name: 'Bon Pastor', slug: 'bon-pastor', type: 'deportivo', businessDensity: 'media' }
    ]
  },
  {
    name: 'Sant Martí',
    slug: 'sant-marti',
    image: '/sant-marti.jpg',
    description: 'Zona moderna con alta demanda de piscinas y terrazas',
    barrios: [
      { name: 'El Clot', slug: 'el-clot', type: 'residencial-terraza', businessDensity: 'alta' },
      { name: 'Poblenou', slug: 'poblenou', type: 'comercial', businessDensity: 'alta' },
      { name: 'Diagonal Mar i el Front Marítim', slug: 'diagonal-mar', type: 'piscinas', businessDensity: 'alta' },
      { name: 'Vila Olímpica del Poblenou', slug: 'vila-olimpica', type: 'deportivo', businessDensity: 'alta' },
      { name: 'El Parc i la Llacuna del Poblenou', slug: 'parc-llacuna-poblenou', type: 'comercial', businessDensity: 'media' },
      { name: 'El Besòs i el Maresme', slug: 'besos-maresme', type: 'piscinas', businessDensity: 'media' },
      { name: 'Provençals del Poblenou', slug: 'provencals', type: 'comercial', businessDensity: 'media' },
      { name: 'Sant Martí de Provençals', slug: 'sant-marti-provencals', type: 'comercial', businessDensity: 'media' },
      { name: 'La Verneda i la Pau', slug: 'verneda-pau', type: 'deportivo', businessDensity: 'media' },
      { name: 'El Camp de l\'Arpa del Clot', slug: 'camp-arpa', type: 'residencial-terraza', businessDensity: 'media' },
      { name: 'El Clot - Camp de l\'Arpa', slug: 'clot-camp-arpa', type: 'comercial', businessDensity: 'media' }
    ]
  }
];

// Funciones helper
export const getBarriosByServiceType = (serviceType: ProductCategory): Barrio[] => {
  return barcelonaLocations.flatMap(distrito => 
    distrito.barrios.filter(barrio => barrio.type === serviceType)
  );
};

export const getHighDensityBarrios = (): Barrio[] => {
  return barcelonaLocations.flatMap(distrito => 
    distrito.barrios.filter(barrio => barrio.businessDensity === 'alta')
  );
};

// Estadísticas
export const barcelonaStats = {
  totalDistritos: barcelonaLocations.length,
  totalBarrios: barcelonaLocations.reduce((sum, d) => sum + d.barrios.length, 0),
  barriosPorTipo: {
    deportivo: barcelonaLocations.flatMap(d => d.barrios).filter(b => b.type === 'deportivo').length,
    piscinas: barcelonaLocations.flatMap(d => d.barrios).filter(b => b.type === 'piscinas').length,
    eventos: barcelonaLocations.flatMap(d => d.barrios).filter(b => b.type === 'eventos').length,
    comercial: barcelonaLocations.flatMap(d => d.barrios).filter(b => b.type === 'comercial').length,
    residencialTerraza: barcelonaLocations.flatMap(d => d.barrios).filter(b => b.type === 'residencial-terraza').length,
    residencialJardin: barcelonaLocations.flatMap(d => d.barrios).filter(b => b.type === 'residencial-jardin').length,
    institucional: barcelonaLocations.flatMap(d => d.barrios).filter(b => b.type === 'institucional').length,
  }
};

