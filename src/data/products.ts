// products.ts - DATOS DE PRODUCTOS

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

// ============================================
// INTERFACES
// ============================================

export interface TechnicalSpecs {
  altura: string;
  peso: string;
  garantiaFabrica: string;
  garantiaInstalacion: string;
  drenaje: string;
  resistenciaUV: string;
  densidad: string;
  material: string;
  ignifugo: boolean;
  antiAlergeno: boolean;
}

export interface PriceInfo {
  basePrice: number;
  premiumPrice: number;
  installationCost: number;
  maintenanceYearlyCost: number;
  savingsVsNatural: number;
}

export interface ProductInfo {
  title: string;
  subtitle: string;
  description: string;
  useCases: string[];
  benefits: string[];
  idealFor: string[];
  notRecommendedFor: string[];
  technicalSpecs: TechnicalSpecs;
  pricing: PriceInfo;
  installationTime: string;
  installationSteps: string[];
  maintenanceFrequency: string;
  maintenanceDetails: string[];
  vsNaturalGrass: {
    waterSavings: string;
    timeSavings: string;
    costSavings: string;
    durability: string;
  };
  specificFAQs: Array<{q: string; a: string}>;
}

export interface Barrio {
  slug: string;
  name: string;
  type: ProductCategory;
  businessDensity?: 'alta' | 'media' | 'baja';
  // Hacer todos estos opcionales con ?
  postalCodes?: string[];
  distrito?: string;
  housingType?: 'aticos' | 'chalets' | 'pisos' | 'mixto';
  averagePropertySize?: 'pequeño' | 'mediano' | 'grande';
  priceLevel?: 'economico' | 'medio' | 'premium' | 'lujo';
  characteristics?: string;
  popularSpaces?: string[];
  communityRegulations?: string;
  buildingRestrictions?: string;
  sunExposure?: 'alta' | 'media' | 'baja';
  windExposure?: 'alta' | 'media' | 'baja';
  projectsCompleted?: number;
  testimonial?: {
    text: string;
    author: string;
    rating: number;
  };
  nearbyLandmarks?: string[];
  transportAccess?: string[];
}

export interface Distrito {
  slug: string;
  name: string;
  barrios: Barrio[];
  image?: string;
  description?: string;
  totalArea?: string;
  population?: number;
  averageIncome?: 'bajo' | 'medio' | 'alto' | 'muy-alto';
  mainCharacteristic?: string;
}

// ============================================
// DATOS DE PRODUCTOS
// ============================================

export const productData: Record<ProductCategory, ProductInfo> = {
  'deportivo': {
    title: 'Césped Artificial Deportivo',
    subtitle: 'Rendimiento profesional para instalaciones deportivas',
    description: 'Césped artificial de alto rendimiento diseñado específicamente para soportar uso intensivo en instalaciones deportivas. Cumple con normativas FIFA y ITF para competición oficial.',
    useCases: [
      'Pistas de pádel homologadas ITF',
      'Campos de fútbol 7 y fútbol 11 certificados FIFA',
      'Zonas de entrenamiento multideporte',
      'Gimnasios al aire libre y CrossFit',
      'Pistas polideportivas municipales',
      'Circuitos de atletismo y calentamiento'
    ],
    benefits: [
      'Resistencia extrema a más de 100.000 ciclos de uso',
      'Sistema de drenaje superior de 180 L/m²/min',
      'Superficie antideslizante certificada EN 15330',
      'Mantenimiento mínimo: solo 2 horas/mes',
      'Homologado para competición oficial',
      'Reduce lesiones en un 40% vs césped natural'
    ],
    idealFor: [
      'Clubes deportivos profesionales',
      'Ayuntamientos y polideportivos públicos',
      'Colegios y universidades',
      'Complejos deportivos privados',
      'Pistas de pádel y tenis'
    ],
    notRecommendedFor: [
      'Jardines puramente decorativos',
      'Zonas con mascotas pequeñas (fibra muy dura)',
      'Espacios infantiles (mejor césped específico para niños)'
    ],
    technicalSpecs: {
      altura: '40-60mm según deporte',
      peso: '2.800-3.200 g/m²',
      garantiaFabrica: '10 años',
      garantiaInstalacion: '3 años',
      drenaje: '180 L/m²/min',
      resistenciaUV: '>8.000 horas UV certificado',
      densidad: '16.800 puntadas/m²',
      material: 'Polietileno + Polipropileno reforzado',
      ignifugo: true,
      antiAlergeno: true
    },
    pricing: {
      basePrice: 35,
      premiumPrice: 55,
      installationCost: 15,
      maintenanceYearlyCost: 200,
      savingsVsNatural: 4500
    },
    installationTime: '5-10 días laborables según superficie',
    installationSteps: [
      'Excavación y nivelación del terreno base',
      'Instalación de capa drenante compactada',
      'Colocación de malla geotextil anti-hierbas',
      'Instalación de bordillos perimetrales',
      'Desenrollado y fijación del césped artificial',
      'Relleno con arena de sílice (8-12 kg/m²)',
      'Relleno con caucho SBR o EPDM (4-6 kg/m²)',
      'Cepillado mecánico para levantar fibras',
      'Marcaje de líneas de juego según deporte',
      'Inspección final y certificación'
    ],
    maintenanceFrequency: 'Cepillado quincenal + inspección mensual',
    maintenanceDetails: [
      'Cepillado mecánico cada 15 días para redistribuir relleno',
      'Aspirado de residuos y hojas semanalmente',
      'Relleno adicional cada 6-12 meses según uso',
      'Descompactado anual con máquina específica',
      'Limpieza profunda semestral con productos específicos',
      'Revisión de costuras y reparación de zonas desgastadas'
    ],
    vsNaturalGrass: {
      waterSavings: '150.000 L/año en campo de fútbol 11',
      timeSavings: '300 horas/año de mantenimiento',
      costSavings: '4.500€/año en agua, corte, abonos y resiembra',
      durability: '15 años vs 3-5 años de césped natural'
    },
    specificFAQs: [
      {
        q: '¿Está homologado para competición oficial?',
        a: 'Sí, nuestro césped deportivo cuenta con certificaciones FIFA Quality y FIFA Quality Pro para fútbol, e ITF (International Tennis Federation) para pádel y tenis. Incluimos documentación oficial de homologación.'
      },
      {
        q: '¿Qué tipo de relleno es mejor: caucho o corcho?',
        a: 'Recomendamos caucho EPDM (no SBR) o corcho natural según el deporte. Para pádel: caucho EPDM. Para fútbol: mixto caucho + arena. Para zonas infantiles: corcho 100% natural.'
      },
      {
        q: '¿Cuánto dura el relleno?',
        a: 'El relleno de caucho EPDM dura 8-10 años. El corcho natural 5-7 años. Se puede rellenar parcialmente sin cambiar todo el césped, reduciendo costes de mantenimiento.'
      }
    ]
  },

  'piscinas': {
    title: 'Césped Artificial para Piscinas',
    subtitle: 'Soluciones antideslizantes resistentes al cloro',
    description: 'Césped artificial específicamente diseñado para zonas de piscina, con tratamiento anti-cloro, superficie antideslizante incluso mojada y rápido drenaje.',
    useCases: [
      'Coronas y perímetros de piscinas residenciales',
      'Soláriums y zonas de hamacas',
      'Beach clubs y chiringuitos',
      'Piscinas comunitarias de edificios',
      'Piscinas de hoteles y resorts',
      'Zonas de spa y wellness centers'
    ],
    benefits: [
      'Superficie antideslizante en mojado (clase 3 según DIN 51097)',
      'Resistente a cloro, sal y productos químicos de piscina',
      'Rápido secado: <15 minutos tras salir del agua',
      'No acumula calor: permanece fresco bajo el sol',
      'Elimina barro y charcos de agua',
      'No mancha bañadores ni toallas'
    ],
    idealFor: [
      'Piscinas particulares de chalets',
      'Comunidades de vecinos con piscina',
      'Hoteles con zona de piscina',
      'Clubs náuticos y deportivos',
      'Parques acuáticos'
    ],
    notRecommendedFor: [
      'Fondos de piscina (solo perímetro)',
      'Zonas con cloro concentrado >5ppm sin enjuague'
    ],
    technicalSpecs: {
      altura: '20-30mm',
      peso: '2.400-2.800 g/m²',
      garantiaFabrica: '8 años anti-cloro',
      garantiaInstalacion: '2 años',
      drenaje: '120 L/m²/min (perforado cada 10cm)',
      resistenciaUV: '>6.000 horas certificado',
      densidad: '18.000 puntadas/m²',
      material: 'Polietileno con tratamiento anti-cloro',
      ignifugo: true,
      antiAlergeno: true
    },
    pricing: {
      basePrice: 28,
      premiumPrice: 42,
      installationCost: 12,
      maintenanceYearlyCost: 80,
      savingsVsNatural: 2800
    },
    installationTime: '1-3 días según tamaño',
    installationSteps: [
      'Preparación de superficie (hormigón, mortero o compactado)',
      'Aplicación de imprimación adherente si es hormigón',
      'Instalación de banda perimetral de piscina',
      'Corte y ajuste del césped a medida',
      'Pegado con cola de poliuretano bi-componente resistente al agua',
      'Sellado de juntas con adhesivo específico',
      'Cepillado para levantar fibras',
      'Limpieza final de residuos'
    ],
    maintenanceFrequency: 'Enjuague semanal + cepillado mensual',
    maintenanceDetails: [
      'Enjuague con manguera 1-2 veces/semana para eliminar cloro',
      'Cepillado suave mensual para levantar fibras',
      'Limpieza de hojas y residuos con soplador',
      'Revisión semestral de juntas y pegado',
      'Aplicación de desinfectante específico trimestral',
      'No usar lejía ni productos corrosivos'
    ],
    vsNaturalGrass: {
      waterSavings: '35.000 L/año en piscina estándar 8x4m',
      timeSavings: '120 horas/año sin cortar, regar ni resembrar',
      costSavings: '2.800€/año en mantenimiento y reparaciones por cloro',
      durability: '12 años vs imposible mantener césped natural con cloro'
    },
    specificFAQs: [
      {
        q: '¿El cloro estropea el césped artificial?',
        a: 'No si usas césped específico para piscinas. Nuestro césped tiene tratamiento anti-cloro que resiste hasta 5 ppm de cloro. Con enjuagues semanales dura 10+ años sin decoloración.'
      },
      {
        q: '¿Se calienta mucho al sol?',
        a: 'Nuestro césped para piscinas tiene tecnología "Cool Touch" que refleja el calor. Permanece hasta 15ºC más fresco que el hormigón. Aún así, recomendamos usar chanclas en pleno mediodía de agosto.'
      },
      {
        q: '¿Es resbaladizo cuando está mojado?',
        a: 'No, tiene clasificación antideslizante clase 3 según normativa DIN 51097 (la más alta). Es MÁS seguro que baldosas o madera mojadas. Ideal para niños.'
      }
    ]
  },

  'eventos': {
    title: 'Césped Artificial para Eventos',
    subtitle: 'Instalaciones temporales y permanentes premium',
    description: 'Césped de alta gama para crear ambientes naturales en eventos, con instalación rápida, aspecto premium y resistencia al tráfico intenso.',
    useCases: [
      'Carpas de bodas y ceremonias al aire libre',
      'Ferias comerciales y exposiciones',
      'Terrazas de restaurantes y bares',
      'Pop-up stores y showrooms temporales',
      'Eventos corporativos y lanzamientos de producto',
      'Fashion weeks y desfiles'
    ],
    benefits: [
      'Instalación ultra-rápida: 24-48h cualquier superficie',
      'Aspecto premium natural sin mantenimiento',
      'Resistente a tacones y tráfico intenso (1000+ personas)',
      'Fácil montaje y desmontaje sin daños',
      'Reutilizable en múltiples eventos (ROI excelente)',
      'Compatible con carpas, estructuras y mobiliario'
    ],
    idealFor: [
      'Empresas de catering y eventos',
      'Wedding planners',
      'Agencias de marketing y publicidad',
      'Hoteles para eventos temporales',
      'Marcas para activaciones'
    ],
    notRecommendedFor: [
      'Eventos con lluvia intensa >50mm/h',
      'Superficies muy irregulares sin preparación'
    ],
    technicalSpecs: {
      altura: '25-35mm',
      peso: '2.600 g/m²',
      garantiaFabrica: '6 años',
      garantiaInstalacion: '1 año',
      drenaje: '90 L/m²/min',
      resistenciaUV: '>5.000 horas',
      densidad: '16.500 puntadas/m²',
      material: 'Polietileno soft touch',
      ignifugo: true,
      antiAlergeno: true
    },
    pricing: {
      basePrice: 22,
      premiumPrice: 35,
      installationCost: 8,
      maintenanceYearlyCost: 50,
      savingsVsNatural: 1800
    },
    installationTime: '6-24 horas según superficie',
    installationSteps: [
      'Medición y corte a medida en taller',
      'Transporte e descarga en ubicación',
      'Preparación básica del suelo (barrido)',
      'Desenrollado del césped',
      'Fijación perimetral con banda adhesiva o pesos',
      'Unión de piezas con cinta de doble cara',
      'Cepillado rápido',
      'Listo para evento en <24h'
    ],
    maintenanceFrequency: 'Solo limpieza post-evento',
    maintenanceDetails: [
      'Barrido de residuos tras el evento',
      'Aspirado de hojas y desperdicios',
      'Cepillado para levantar fibras pisoteadas',
      'Limpieza de manchas con detergente neutro',
      'Enrollado y almacenaje en lugar seco',
      'Inspección de daños para próximo uso'
    ],
    vsNaturalGrass: {
      waterSavings: 'N/A (evento temporal)',
      timeSavings: '48 horas de preparación vs 2-3 semanas de césped natural',
      costSavings: '60% más económico que alquilar césped natural + mantenimiento',
      durability: 'Reutilizable 20+ eventos vs 1 solo uso de césped natural'
    },
    specificFAQs: [
      {
        q: '¿Cuánto tarda la instalación?',
        a: 'En eventos estándar de 100-200m², instalamos en 6-12 horas. Para eventos grandes de 500m+, entre 24-48h. Mucho más rápido que césped natural que necesita 2-3 semanas.'
      },
      {
        q: '¿Se puede reutilizar?',
        a: 'Sí, perfectamente. Con cuidado básico se reutiliza 20-30 veces. Muchos clientes lo compran y lo alquilan para otros eventos, recuperando la inversión en 3-5 usos.'
      },
      {
        q: '¿Aguanta tacones de aguja?',
        a: 'Sí, nuestro césped de eventos está reforzado contra tacones. Puede haber pequeñas marcas que se recuperan con cepillado. Para bodas de 200+ invitados es perfecto.'
      }
    ]
  },

  'comercial': {
    title: 'Césped Artificial Comercial',
    subtitle: 'Espacios verdes profesionales sin mantenimiento',
    description: 'Solución profesional para negocios que quieren transmitir imagen verde 365 días al año sin dedicar tiempo ni dinero al mantenimiento.',
    useCases: [
      'Terrazas de hoteles boutique y restaurantes',
      'Oficinas con espacios de coworking exterior',
      'Tiendas y comercios con escaparate verde',
      'Centros comerciales y zonas comunes',
      'Concesionarios de coches premium',
      'Clínicas y consultas privadas'
    ],
    benefits: [
      'Imagen profesional impecable 365 días/año',
      'Cero horas de mantenimiento semanal',
      'ROI positivo en 12-18 meses vs césped natural',
      'Aumenta el valor percibido del negocio en 15-20%',
      'Atrae más clientes (+23% según estudios)',
      'Sin costes ocultos de jardinero'
    ],
    idealFor: [
      'Hoteles y hostales con terraza',
      'Restaurantes con zona exterior',
      'Oficinas y coworkings modernos',
      'Retail y tiendas de alto standing',
      'Clínicas dentales y médicas'
    ],
    notRecommendedFor: [
      'Negocios con presupuesto muy limitado <1000€',
      'Espacios que cambien de ubicación frecuentemente'
    ],
    technicalSpecs: {
      altura: '30-40mm',
      peso: '2.700 g/m²',
      garantiaFabrica: '8 años',
      garantiaInstalacion: '2 años',
      drenaje: '100 L/m²/min',
      resistenciaUV: '>7.000 horas',
      densidad: '17.200 puntadas/m²',
      material: 'Polietileno premium aspecto natural',
      ignifugo: true,
      antiAlergeno: true
    },
    pricing: {
      basePrice: 25,
      premiumPrice: 38,
      installationCost: 10,
      maintenanceYearlyCost: 120,
      savingsVsNatural: 3200
    },
    installationTime: '1-2 días comerciales',
    installationSteps: [
      'Visita técnica y medición exacta',
      'Preparación de superficie (limpieza profunda)',
      'Instalación de base drenante si es necesario',
      'Colocación de malla anti-hierbas',
      'Desenrollado y ajuste del césped',
      'Pegado o fijación según superficie',
      'Corte de bordes y acabados premium',
      'Cepillado profesional',
      'Limpieza total de la zona',
      'Formación al cliente sobre mantenimiento básico'
    ],
    maintenanceFrequency: 'Cepillado mensual + limpieza básica',
    maintenanceDetails: [
      'Cepillado ligero 1 vez/mes para levantar fibras',
      'Soplado de hojas semanal (5 minutos)',
      'Enjuague ocasional si hay derrames',
      'Limpieza de manchas inmediata con agua y jabón neutro',
      'Revisión semestral de bordes y juntas',
      'Opción de contrato mantenimiento: 120€/año'
    ],
    vsNaturalGrass: {
      waterSavings: '45.000 L/año en terraza de 50m²',
      timeSavings: '156 horas/año sin cortar, regar ni abonar',
      costSavings: '3.200€/año (jardinero + agua + productos + reposiciones)',
      durability: '12 años vs 5 años de césped natural con mantenimiento intensivo'
    },
    specificFAQs: [
      {
        q: '¿Realmente aumenta las ventas?',
        a: 'Según estudios de retail, un espacio verde bien cuidado aumenta el tiempo de permanencia en 18% y las ventas en 12-23%. El césped artificial proporciona ese "efecto verde" sin el estrés del mantenimiento.'
      },
      {
        q: '¿Cuánto se tarda en recuperar la inversión?',
        a: 'En un restaurante con terraza de 40m², el ahorro en jardinero (200€/mes) + agua (50€/mes) hace que recuperes la inversión en 12-16 meses. A partir de ahí es todo ahorro.'
      },
      {
        q: '¿Qué pasa si se mancha con comida o bebida?',
        a: 'El césped es resistente a manchas. Café, vino, refrescos se limpian con agua y jabón neutro en 2 minutos. Para grasas, usamos desengrasante específico. Incluimos manual de limpieza.'
      }
    ]
  },

  'residencial-terraza': {
    title: 'Césped Artificial para Terrazas Residenciales',
    subtitle: 'Convierte tu terraza en un oasis urbano',
    description: 'Césped diseñado específicamente para terrazas y balcones, ligero, con excelente drenaje y aspecto natural que transforma espacios urbanos.',
    useCases: [
      'Áticos y terrazas de pisos',
      'Balcones pequeños desde 5m²',
      'Terrazas comunitarias de edificios',
      'Patios interiores y courtyards',
      'Azoteas transitables',
      'Espacios chill-out urbanos'
    ],
    benefits: [
      'Instalación express en 4-6 horas',
      'Sin necesidad de tierra ni sistema de riego',
      'Soporta muebles de jardín sin deformarse',
      'Drenaje perfecto: nunca charcos de agua',
      'Verde todo el año sin regar',
      'Aislamiento térmico y acústico (+3dB)'
    ],
    idealFor: [
      'Propietarios de pisos con terraza',
      'Comunidades de vecinos',
      'Diseñadores de interiores',
      'Personas sin tiempo para mantenimiento',
      'Familias con niños pequeños'
    ],
    notRecommendedFor: [
      'Terrazas con sobrecarga <150kg/m²',
      'Suelos muy irregulares sin nivelar'
    ],
    technicalSpecs: {
      altura: '25-35mm',
      peso: '2.400 g/m² (ligero para terrazas)',
      garantiaFabrica: '8 años',
      garantiaInstalacion: '2 años',
      drenaje: '110 L/m²/min (perforado)',
      resistenciaUV: '>6.000 horas',
      densidad: '16.800 puntadas/m²',
      material: 'Polietileno suave al tacto',
      ignifugo: true,
      antiAlergeno: true
    },
    pricing: {
      basePrice: 20,
      premiumPrice: 32,
      installationCost: 8,
      maintenanceYearlyCost: 40,
      savingsVsNatural: 1200
    },
    installationTime: '4-8 horas en terraza estándar',
    installationSteps: [
      'Medición exacta de la terraza',
      'Limpieza profunda del suelo',
      'Colocación de base amortiguadora (opcional)',
      'Desenrollado del césped pre-cortado',
      'Ajuste a rincones y bordes',
      'Fijación perimetral con banda adhesiva',
      'Sellado de juntas si hay varias piezas',
      'Cepillado final',
      'Limpieza y retirada de residuos'
    ],
    maintenanceFrequency: 'Barrido semanal + cepillado trimestral',
    maintenanceDetails: [
      'Barrido suave con escoba 1 vez/semana (2 minutos)',
      'Cepillado cada 2-3 meses para levantar fibras',
      'Enjuague con manguera cuando haga calor',
      'Limpieza de manchas con agua y jabón neutro',
      'Revisión anual de pegado en bordes',
      'Total: <30 minutos/mes de mantenimiento'
    ],
    vsNaturalGrass: {
      waterSavings: 'N/A (imposible mantener césped natural en terraza sin tierra)',
      timeSavings: '80 horas/año vs alternativas como plantas en macetas',
      costSavings: '1.200€/año vs macetas + tierra + agua + reposición plantas',
      durability: '10+ años vs 1-2 años de plantas en macetas'
    },
    specificFAQs: [
      {
        q: '¿Pesa mucho para mi terraza?',
        a: 'No, nuestro césped para terrazas pesa solo 2,4 kg/m². Una terraza de 20m² solo añade 48kg de peso total. Cualquier terraza moderna aguanta sin problema (soportan 200-400 kg/m²).'
      },
      {
        q: '¿Qué pasa cuando llueve?',
        a: 'El césped está perforado cada 10cm, drena 110 litros por metro cuadrado cada minuto. Esto significa que ni en las lluvias más fuertes se acumula agua. En 5 minutos está seco.'
      },
      {
        q: '¿Se puede poner sobre cualquier suelo?',
        a: 'Sí, sobre baldosas, hormigón, madera, cemento pulido... Lo único necesario es que esté nivelado. Si tiene desniveles >2cm/metro recomendamos nivelar primero.'
      }
    ]
  },

  'residencial-jardin': {
    title: 'Césped Artificial para Jardines Privados',
    subtitle: 'Jardín perfecto sin regar, cortar ni abonar',
    description: 'La solución definitiva para jardines residenciales: aspecto natural premium, máxima durabilidad y cero mantenimiento. Perfecto para familias.',
    useCases: [
      'Jardines de chalets y casas unifamiliares',
      'Zonas de juego infantiles',
      'Áreas para mascotas',
      'Jardines con piscina',
      'Zonas de barbacoa y chill-out',
      'Caminos y senderos de jardín'
    ],
    benefits: [
      'Ahorro brutal: 3.500€/año en mantenimiento',
      'Sin cortar, regar ni abonar nunca más',
      'Perfecto 365 días: lluvia, sol, nieve',
      'Aumenta el valor de la vivienda en 8-12%',
      'Reduce alergias al polen en 90%',
      'Compatible con perros y gatos'
    ],
    idealFor: [
      'Familias con niños pequeños',
      'Propietarios de chalets',
      'Personas alérgicas al polen',
      'Dueños de perros y gatos',
      'Segundas residencias sin mantenimiento'
    ],
    notRecommendedFor: [
      'Jardines de más de 500m² en zonas rurales (mejor césped natural)',
      'Personas que disfrutan cortando el césped como hobby'
    ],
    technicalSpecs: {
      altura: '35-40mm',
      peso: '2.900 g/m²',
      garantiaFabrica: '10 años',
      garantiaInstalacion: '3 años',
      drenaje: '100 L/m²/min',
      resistenciaUV: '>8.000 horas',
      densidad: '18.200 puntadas/m²',
      material: 'Polietileno + Polipropileno bi-color',
      ignifugo: true,
      antiAlergeno: true
    },
    pricing: {
      basePrice: 24,
      premiumPrice: 38,
      installationCost: 12,
      maintenanceYearlyCost: 150,
      savingsVsNatural: 3500
    },
    installationTime: '2-5 días según tamaño',
    installationSteps: [
      'Retirada de césped natural y hierbas',
      'Excavación de 5-10cm de profundidad',
      'Instalación de capa drenante (grava 20-40mm)',
      'Compactado de la base',
      'Colocación de malla geotextil',
      'Instalación de bordillos perimetrales',
      'Desenrollado del césped artificial',
      'Corte y ajuste a medida',
      'Pegado de juntas',
      'Relleno de arena de sílice (opcional)',
      'Cepillado para levantar fibras',
      'Limpieza final del jardín'
    ],
    maintenanceFrequency: 'Cepillado mensual + limpieza de hojas',
    maintenanceDetails: [
      'Soplado de hojas semanalmente (10 minutos)',
      'Cepillado mensual con cepillo específico',
      'Enjuague con manguera tras uso intenso',
      'Limpieza de excrementos de mascotas',
      'Aplicación de neutralizador de orina 1-2 veces/mes si hay perros',
      'Revisión anual de juntas y bordes',
      'Total: <2 horas/mes vs 8-12 horas de césped natural'
    ],
    vsNaturalGrass: {
      waterSavings: '120.000 L/año en jardín de 100m²',
      timeSavings: '156 horas/año en cortar + 52 horas en regar + 24 horas en abonar = 232 horas/año',
      costSavings: 'Agua 450€ + Cortadora 200€ + Abonos 180€ + Resiembras 300€ + Jardinero ocasional 600€ = 1.730€/año mínimo',
      durability: '15 años con buen mantenimiento vs 3-5 años necesitando resiembras constantes'
    },
    specificFAQs: [
      {
        q: '¿Es seguro para niños y mascotas?',
        a: 'Totalmente. Cumple normativa EN71-3 de seguridad infantil. Es no tóxico, sin metales pesados, hipoalergénico y tiene certificado "Pet Friendly". Miles de familias y guarderías lo usan sin problemas.'
      },
      {
        q: '¿Mi perro puede hacer pis en el césped?',
        a: 'Sí, sin problema. El césped drena la orina perfectamente. Recomendamos enjuagar con manguera 2-3 veces/semana y aplicar neutralizador de orina mensual (15€). Así nunca habrá olores.'
      },
      {
        q: '¿De verdad ahorro tanto dinero?',
        a: 'Sí. Un jardín de 100m² cuesta: Agua 450€/año + Cortadora 200€ + Combustible 120€ + Abonos 180€ + Resiembras 300€ = 1.250€/año MÍNIMO. El artificial cuesta 150€/año de mantenimiento. Ahorras 1.100€/año, recuperas inversión en 2-3 años.'
      }
    ]
  },

  'institucional': {
    title: 'Césped Artificial Institucional',
    subtitle: 'Soluciones duraderas para entidades públicas',
    description: 'Césped de máxima calidad y durabilidad para instituciones públicas y privadas que necesitan superficies seguras, higiénicas y de bajo mantenimiento.',
    useCases: [
      'Patios de colegios e institutos',
      'Jardines terapéuticos de hospitales',
      'Residencias de ancianos',
      'Edificios municipales y ayuntamientos',
      'Parques públicos infantiles',
      'Universidades y campus'
    ],
    benefits: [
      'Máxima seguridad certificada para niños (HIC <1000)',
      'Durabilidad extrema: 15-20 años de vida útil',
      'Mantenimiento mínimo reduce costes municipales',
      'Superficie higiénica con tratamiento antibacteriano',
      'Cumple todas las normativas públicas EN 1177',
      'Inclusivo: accesible para sillas de ruedas'
    ],
    idealFor: [
      'Colegios públicos y privados',
      'Centros de salud',
      'Residencias geriátricas',
      'Ayuntamientos',
      'Fundaciones y ONG',
      'Centros deportivos municipales'
    ],
    notRecommendedFor: [
      'Instalaciones con presupuesto de mantenimiento muy limitado (aunque ahorra a largo plazo)'
    ],
    technicalSpecs: {
      altura: '30-45mm según uso',
      peso: '3.000 g/m²',
      garantiaFabrica: '12 años',
      garantiaInstalacion: '4 años',
      drenaje: '130 L/m²/min',
      resistenciaUV: '>10.000 horas',
      densidad: '19.000 puntadas/m²',
      material: 'Polietileno + PE reciclado certificado',
      ignifugo: true,
      antiAlergeno: true
    },
    pricing: {
      basePrice: 30,
      premiumPrice: 48,
      installationCost: 15,
      maintenanceYearlyCost: 250,
      savingsVsNatural: 5000
    },
    installationTime: '5-15 días según superficie',
    installationSteps: [
      'Proyecto técnico y homologación',
      'Preparación del terreno con maquinaria pesada',
      'Instalación de base de seguridad (caucho EPDM)',
      'Sistema de drenaje profesional',
      'Colocación de geotextil anti-raíces',
      'Instalación del césped artificial',
      'Relleno específico según normativa',
      'Instalación de áreas de juego certificadas',
      'Señalización y marcaje',
      'Certificación final de seguridad',
      'Entrega de documentación técnica'
    ],
    maintenanceFrequency: 'Inspección mensual + limpieza profesional',
    maintenanceDetails: [
      'Inspección mensual de seguridad',
      'Cepillado mecánico quincenal',
      'Desinfección trimestral con productos homologados',
      'Reparación inmediata de daños por vandalismo',
      'Rellenado anual de áreas de alto tráfico',
      'Certificación anual de seguridad',
      'Registro de mantenimiento para auditorías'
    ],
    vsNaturalGrass: {
      waterSavings: '250.000 L/año en colegio de 500m²',
      timeSavings: '520 horas/año de personal de mantenimiento',
      costSavings: '5.000€/año (jardinero + agua + maquinaria + productos + resiembras)',
      durability: '15-20 años vs 5 años con resiembras constantes'
    },
    specificFAQs: [
      {
        q: '¿Cumple con normativas de seguridad infantil?',
        a: 'Sí, cumple EN 1177 (amortiguación de impactos), EN 71-3 (seguridad de juguetes), ISO 9001 (calidad) y certificado "Safe Play" europeo. Incluye toda la documentación oficial para inspecciones.'
      },
      {
        q: '¿Qué pasa si hay vandalismo?',
        a: 'El césped institucional es muy resistente, pero si hay daños los reparamos en 24-48h. Muchos ayuntamientos tienen póliza de mantenimiento que incluye reparaciones por vandalismo. Coste: desde 150€/reparación.'
      },
      {
        q: '¿Es accesible para sillas de ruedas?',
        a: 'Sí, cumple normativa de accesibilidad. Con base bien compactada, las sillas de ruedas se desplazan sin problemas. Es más accesible que césped natural que se vuelve barro con lluvia.'
      }
    ]
  },

  'terraza': {
    title: 'Césped Artificial para Terrazas',
    subtitle: 'Espacios verdes urbanos sin complicaciones',
    description: 'Césped optimizado para terrazas urbanas, ligero, drenante y de fácil instalación para transformar balcones y áticos en oasis verdes.',
    useCases: [
      'Terrazas de áticos y pisos',
      'Balcones pequeños urbanos',
      'Azoteas transitables',
      'Patios comunitarios',
      'Espacios exteriores de oficinas',
      'Zonas chill-out en terrazas'
    ],
    benefits: [
      'Instalación DIY posible: instrucciones paso a paso',
      'No necesita tierra ni sistema de riego',
      'Soporta muebles de terraza sin problemas',
      'Drenaje rápido: nunca encharcamientos',
      'Verde todo el año sin esfuerzo',
      'Mejora el aislamiento térmico'
    ],
    idealFor: [
      'Propietarios urbanos con terraza',
      'Inquilinos (se puede llevar al mudarse)',
      'Comunidades de vecinos',
      'Estudios de interiorismo',
      'Espacios de coworking'
    ],
    notRecommendedFor: [
      'Terrazas con problemas estructurales',
      'Suelos con desniveles >5cm sin corregir'
    ],
    technicalSpecs: {
      altura: '20-30mm',
      peso: '2.200 g/m²',
      garantiaFabrica: '7 años',
      garantiaInstalacion: '2 años',
      drenaje: '120 L/m²/min',
      resistenciaUV: '>6.000 horas',
      densidad: '15.500 puntadas/m²',
      material: 'Polietileno ligero',
      ignifugo: true,
      antiAlergeno: true
    },
    pricing: {
      basePrice: 18,
      premiumPrice: 28,
      installationCost: 7,
      maintenanceYearlyCost: 30,
      savingsVsNatural: 800
    },
    installationTime: '3-6 horas',
    installationSteps: [
      'Medición de la terraza',
      'Limpieza del suelo',
      'Opcional: base amortiguadora',
      'Desenrollado del césped',
      'Corte a medida con cúter',
      'Fijación con cinta adhesiva doble cara',
      'Cepillado',
      'Listo para usar'
    ],
    maintenanceFrequency: 'Barrido semanal',
    maintenanceDetails: [
      'Barrido con escoba suave semanalmente',
      'Cepillado trimestral',
      'Enjuague ocasional',
      'Limpieza de manchas rápida',
      'Revisión anual de fijaciones',
      'Total: 15 minutos/mes'
    ],
    vsNaturalGrass: {
      waterSavings: 'N/A (imposible en terraza)',
      timeSavings: '60 horas/año vs plantas en macetas',
      costSavings: '800€/año vs macetas y plantas',
      durability: '10 años vs 2 años plantas'
    },
    specificFAQs: [
      {
        q: '¿Lo puedo instalar yo mismo?',
        a: 'Sí, en terrazas pequeñas (<30m²) es totalmente DIY. Te enviamos manual paso a paso con vídeos. Solo necesitas: metro, cúter, regla y cinta adhesiva. En terrazas grandes recomendamos instalación profesional.'
      },
      {
        q: '¿Me lo puedo llevar si me mudo?',
        a: 'Sí perfectamente. Si usaste cinta adhesiva de doble cara (no pegamento), se retira en 1 hora sin dejar marcas. Muchos clientes se lo llevan a su nueva casa.'
      },
      {
        q: '¿Resiste el sol fuerte del verano?',
        a: 'Sí, tiene protección UV >6.000 horas (equivalente a 10+ años). En terrazas muy soleadas recomendamos gama Premium que dura 12 años sin decoloración.'
      }
    ]
  },

  'jardin': {
    title: 'Césped Artificial para Jardines',
    subtitle: 'Jardines impecables todo el año',
    description: 'Césped premium para jardines que buscan el máximo realismo, confort y durabilidad sin el trabajo del césped natural.',
    useCases: [
      'Jardines de chalets',
      'Zonas de juego infantil',
      'Áreas para mascotas',
      'Jardines con piscina',
      'Patios y exteriores',
      'Zonas de relax'
    ],
    benefits: [
      'Ahorra 3.000€/año en mantenimiento real',
      'Siempre verde y perfecto',
      'Apto para niños y mascotas',
      'Resistente a sol, lluvia y nieve',
      'Aumenta valor del inmueble',
      'Elimina alergias al polen'
    ],
    idealFor: [
      'Propietarios de chalets',
      'Familias con niños',
      'Dueños de mascotas',
      'Personas alérgicas',
      'Segundas residencias'
    ],
    notRecommendedFor: [
      'Jardines rurales de gran tamaño >500m²',
      'Personas que disfrutan jardinería'
    ],
    technicalSpecs: {
      altura: '35mm',
      peso: '2.800 g/m²',
      garantiaFabrica: '10 años',
      garantiaInstalacion: '3 años',
      drenaje: '110 L/m²/min',
      resistenciaUV: '>8.000 horas',
      densidad: '17.500 puntadas/m²',
      material: 'Polietileno bi-color',
      ignifugo: true,
      antiAlergeno: true
    },
    pricing: {
      basePrice: 22,
      premiumPrice: 35,
      installationCost: 11,
      maintenanceYearlyCost: 120,
      savingsVsNatural: 3000
    },
    installationTime: '2-4 días',
    installationSteps: [
      'Retirada césped natural',
      'Excavación 8cm',
      'Base drenante',
      'Compactado',
      'Geotextil',
      'Bordillos',
      'Césped artificial',
      'Unión de piezas',
      'Relleno arena',
      'Cepillado',
      'Limpieza final'
    ],
    maintenanceFrequency: 'Cepillado mensual',
    maintenanceDetails: [
      'Soplado hojas semanal',
      'Cepillado mensual',
      'Enjuague tras uso',
      'Limpieza mascotas',
      'Neutralizador orina mensual',
      'Revisión anual',
      'Total: 2h/mes vs 12h natural'
    ],
    vsNaturalGrass: {
      waterSavings: '100.000 L/año en 80m²',
      timeSavings: '200 horas/año',
      costSavings: '3.000€/año (agua, cortadora, gasolina, abonos, jardinero)',
      durability: '15 años vs 5 años con resiembras'
    },
    specificFAQs: [
      {
        q: '¿Parece natural de cerca?',
        a: 'Nuestro césped premium tiene 4 tonos de verde diferentes mezclados, exactamente como el natural. A 1 metro de distancia es imposible distinguirlo. Garantizado.'
      },
      {
        q: '¿Vale la pena la inversión?',
        a: 'Totalmente. Jardín 100m²: Inversión 3.500€. Ahorro anual 3.000€. Recuperas en 14 meses. Luego son 3.000€/año de ahorro durante 15 años = 45.000€ ahorrados.'
      },
      {
        q: '¿Se calienta mucho en verano?',
        a: 'Nuestro césped Premium tiene tecnología "Cool Touch" que reduce la temperatura en 10ºC vs césped básico. Aun así, en pleno agosto a mediodía se calienta. Solución: regar 2 minutos y queda fresco.'
      }
    ]
  },

  'funcional': {
    title: 'Césped Artificial Multifuncional',
    subtitle: 'Solución versátil para múltiples usos',
    description: 'Césped polivalente de excelente relación calidad-precio, adaptable a cualquier proyecto residencial o comercial básico.',
    useCases: [
      'Zonas comunes de comunidades',
      'Espacios polivalentes',
      'Áreas de paso',
      'Decoración de interiores',
      'Ferias y stands temporales',
      'Proyectos con presupuesto ajustado'
    ],
    benefits: [
      'Mejor relación calidad-precio del mercado',
      'Versátil para cualquier uso no extremo',
      'Instalación rápida y sencilla',
      'Bajo mantenimiento',
      'Aspecto natural aceptable',
      'Ideal para presupuestos limitados'
    ],
    idealFor: [
      'Comunidades de propietarios',
      'Proyectos temporales',
      'Primeras instalaciones',
      'Zonas de poco tráfico',
      'Decoración básica'
    ],
    notRecommendedFor: [
      'Instalaciones deportivas profesionales',
      'Zonas de muy alto tráfico',
      'Proyectos premium de lujo'
    ],
    technicalSpecs: {
      altura: '20-25mm',
      peso: '2.000 g/m²',
      garantiaFabrica: '5 años',
      garantiaInstalacion: '1 año',
      drenaje: '80 L/m²/min',
      resistenciaUV: '>4.000 horas',
      densidad: '13.500 puntadas/m²',
      material: 'Polipropileno',
      ignifugo: false,
      antiAlergeno: true
    },
    pricing: {
      basePrice: 15,
      premiumPrice: 22,
      installationCost: 6,
      maintenanceYearlyCost: 60,
      savingsVsNatural: 1500
    },
    installationTime: '1-2 días',
    installationSteps: [
      'Preparación básica suelo',
      'Desenrollado',
      'Corte a medida',
      'Fijación simple',
      'Cepillado',
      'Listo'
    ],
    maintenanceFrequency: 'Barrido semanal',
    maintenanceDetails: [
      'Barrido semanal',
      'Cepillado mensual',
      'Limpieza manchas',
      'Enjuague ocasional',
      'Total: 1h/mes'
    ],
    vsNaturalGrass: {
      waterSavings: '60.000 L/año',
      timeSavings: '120 horas/año',
      costSavings: '1.500€/año',
      durability: '8 años vs 5 años'
    },
    specificFAQs: [
      {
        q: '¿Cuál es la diferencia con los caros?',
        a: 'Menor densidad de fibras, menos colores mezclados y garantía más corta. Para uso doméstico ligero funciona perfectamente. Para alto tráfico o apariencia premium, mejor gama superior.'
      },
      {
        q: '¿Dura menos que los premium?',
        a: 'Sí, garantía 5 años vs 10 años. Pero con buen cuidado puede durar 8-10 años sin problemas. Ideal si no quieres gastarte 2X en césped.'
      },
      {
        q: '¿Se nota mucho la diferencia de calidad?',
        a: 'Depende. A 2+ metros no se nota. De cerca sí se ve que es más básico. Si es para zona comunitaria o proyecto temporal, perfecto. Si es tu jardín principal, quizá mejor Premium.'
      }
    ]
  }
};

// ============================================
// FUNCIÓN HELPER
// ============================================

export const getProductInfo = (category: ProductCategory): ProductInfo => {
  return productData[category];
};