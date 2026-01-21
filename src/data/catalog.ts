// src/data/catalog.ts - CATÁLOGO DE PRODUCTOS CESPEDBCN

// ============================================
// INTERFACES
// ============================================

export interface ProductVariant {
    color: string;
    colorHex?: string;
    pricePerSqm: number;
    inStock: boolean;
  }
  
  export interface RollFormat {
    length: number; // metros lineales
    width: number;  // metros de ancho
    totalSqm: number; // m² totales del rollo
  }
  
  export interface TechnicalSpec {
    label: string;
    value: string;
    icon?: string;
  }
  
  export interface CatalogProduct {
    // Identificación
    id: string;
    slug: string;
    name: string;
    shortName: string;
    height: number; // mm
    
    // Precios
    priceMin: number;
    priceMax: number;
    priceUnit: string;
    
    // Formato de venta
    rollFormat: RollFormat;
    customCutAvailable: boolean;
    customCutReturnable: boolean;
    
    // Variantes de color
    variants: ProductVariant[];
    
    // Categorización
    category: 'decorativo' | 'residencial' | 'premium' | 'deportivo';
    tags: string[];
    
    // Contenido
    headline: string;
    description: string;
    features: string[];
    applications: string[];
    
    // Especificaciones técnicas
    specs: TechnicalSpec[];
    
    // Material y composición
    material: string;
    backing: string;
    
    // Certificaciones y garantías
    uvProtection: boolean;
    drainageSystem: boolean;
    leadFree: boolean;
    petFriendly: boolean;
    childSafe: boolean;
    fireRetardant: boolean;
    warranty: number; // años
    
    // SEO
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    
    // Imágenes (rutas relativas)
    mainImage: string;
    galleryImages: string[];
    
    // Estado
    isActive: boolean;
    isFeatured: boolean;
    isNew: boolean;
    
    // Ordenación
    sortOrder: number;
  }
  
  // ============================================
  // CATÁLOGO DE PRODUCTOS
  // ============================================
  
  export const catalogProducts: CatalogProduct[] = [
    {
      // GREENDIS 7MM
      id: 'greendis-7mm',
      slug: 'cesped-artificial-greendis-7mm',
      name: 'Césped Artificial Greendis 7MM',
      shortName: 'Greendis 7mm',
      height: 7,
      
      priceMin: 4.87,
      priceMax: 5.72,
      priceUnit: '€/m²',
      
      rollFormat: {
        length: 25,
        width: 2,
        totalSqm: 50
      },
      customCutAvailable: true,
      customCutReturnable: false,
      
      variants: [
        { color: 'Verde Natural', colorHex: '#4a7c59', pricePerSqm: 5.72, inStock: true }
      ],
      
      category: 'decorativo',
      tags: ['económico', 'decorativo', 'eventos', 'stands', 'ferias', 'balcones'],
      
      headline: 'Solución perfecta para proyectos decorativos y paisajismo',
      description: 'El césped artificial 7mm Greendis es la solución perfecta para proyectos decorativos, paisajismo y espacios donde se busca un acabado limpio y uniforme. Combina practicidad y estética con mínimo mantenimiento.',
      
      features: [
        'Efecto memoria - fibras vuelven a su posición erguida',
        'Protección UV contra decoloración',
        'Resistente a la humedad con drenaje eficiente',
        'Tolerancia a temperaturas extremas',
        'Bajo mantenimiento - sin riego, corte ni tratamientos',
        'Aspecto natural uniforme'
      ],
      
      applications: [
        'Balcones y terrazas urbanas',
        'Jardines pequeños',
        'Áreas comerciales y escaparates',
        'Ferias y eventos',
        'Zonas de piscina',
        'Decoración interior',
        'Proyectos de paisajismo ornamental',
        'Stands comerciales'
      ],
      
      specs: [
        { label: 'Altura de fibra', value: '7 mm', icon: 'ruler' },
        { label: 'Material', value: 'Polipropileno fibrilado', icon: 'material' },
        { label: 'Rollo estándar', value: '25 ml x 2 m', icon: 'roll' },
        { label: 'Superficie por rollo', value: '50 m²', icon: 'area' },
        { label: 'Peso', value: '~1.800 g/m²', icon: 'weight' }
      ],
      
      material: 'Polipropileno fibrilado de alta calidad',
      backing: 'Látex con perforaciones de drenaje',
      
      uvProtection: true,
      drainageSystem: true,
      leadFree: true,
      petFriendly: true,
      childSafe: true,
      fireRetardant: false,
      warranty: 5,
      
      metaTitle: 'Césped Artificial 7mm Greendis | Decorativo desde 4,87€/m² | CespedBCN',
      metaDescription: 'Césped artificial decorativo 7mm Greendis. Ideal para balcones, eventos y stands. Efecto memoria, protección UV. Desde 4,87€/m². Envío Barcelona 24-48h.',
      keywords: ['césped artificial 7mm', 'césped decorativo', 'césped barato', 'césped eventos', 'césped stands'],
      
      mainImage: '/images/productos/greendis-7mm.jpg',
      galleryImages: [
        '/images/productos/greendis-7mm-detalle.jpg',
        '/images/productos/greendis-7mm-instalado.jpg'
      ],
      
      isActive: true,
      isFeatured: false,
      isNew: false,
      sortOrder: 1
    },
  
    {
      // SUMMER 8MM
      id: 'summer-8mm',
      slug: 'cesped-artificial-summer-8mm',
      name: 'Césped Artificial Summer 8MM',
      shortName: 'Summer 8mm',
      height: 8,
      
      priceMin: 7.70,
      priceMax: 7.70,
      priceUnit: '€/m²',
      
      rollFormat: {
        length: 30,
        width: 2,
        totalSqm: 60
      },
      customCutAvailable: true,
      customCutReturnable: false,
      
      variants: [
        { color: 'Verde Natural', colorHex: '#4a7c59', pricePerSqm: 7.70, inStock: true }
      ],
      
      category: 'decorativo',
      tags: ['económico', 'ligero', 'bajo tránsito', 'temporal', 'ferias'],
      
      headline: 'Opción económica y funcional para espacios decorativos',
      description: 'El césped artificial Summer 8mm es una opción económica, ligera y funcional, especialmente diseñada para espacios decorativos de bajo tránsito como balcones, terrazas, ferias o eventos temporales. Su altura reducida facilita la instalación y el mantenimiento.',
      
      features: [
        'Opción más económica de su categoría',
        'Ligero y fácil de transportar',
        'Instalación rápida y sencilla',
        'Sistema de drenaje incorporado',
        'Apariencia ordenada y uniforme',
        'Ideal para eventos temporales'
      ],
      
      applications: [
        'Balcones pequeños',
        'Terrazas de bajo tránsito',
        'Ferias y exposiciones',
        'Eventos temporales',
        'Decoración de escaparates',
        'Stands comerciales',
        'Zonas de paso ligero'
      ],
      
      specs: [
        { label: 'Altura de fibra', value: '8 mm', icon: 'ruler' },
        { label: 'Material', value: 'Polipropileno', icon: 'material' },
        { label: 'Rollo estándar', value: '30 ml x 2 m', icon: 'roll' },
        { label: 'Superficie por rollo', value: '60 m²', icon: 'area' },
        { label: 'Peso', value: '~1.900 g/m²', icon: 'weight' }
      ],
      
      material: 'Polipropileno resistente',
      backing: 'Látex con drenaje incorporado',
      
      uvProtection: true,
      drainageSystem: true,
      leadFree: true,
      petFriendly: true,
      childSafe: true,
      fireRetardant: false,
      warranty: 4,
      
      metaTitle: 'Césped Artificial 8mm Summer | Económico 7,70€/m² | CespedBCN',
      metaDescription: 'Césped artificial económico Summer 8mm. Ligero y funcional para eventos, ferias y balcones. Fácil instalación. 7,70€/m². Envío Barcelona 24-48h.',
      keywords: ['césped artificial 8mm', 'césped económico', 'césped eventos', 'césped temporal', 'césped barato barcelona'],
      
      mainImage: '/images/productos/summer-8mm.jpg',
      galleryImages: [
        '/images/productos/summer-8mm-detalle.jpg',
        '/images/productos/summer-8mm-instalado.jpg'
      ],
      
      isActive: true,
      isFeatured: false,
      isNew: false,
      sortOrder: 2
    },
  
    {
      // CAPRIDIS 8MM
      id: 'capridis-8mm',
      slug: 'cesped-artificial-capridis-8mm',
      name: 'Césped Artificial Capridis 8MM',
      shortName: 'Capridis 8mm',
      height: 8,
      
      priceMin: 8.26,
      priceMax: 9.08,
      priceUnit: '€/m²',
      
      rollFormat: {
        length: 30,
        width: 2,
        totalSqm: 60
      },
      customCutAvailable: true,
      customCutReturnable: false,
      
      variants: [
        { color: 'Verde Natural', colorHex: '#4a7c59', pricePerSqm: 9.08, inStock: true },
        { color: 'Multicolor', colorHex: '#7cb342', pricePerSqm: 8.26, inStock: true }
      ],
      
      category: 'decorativo',
      tags: ['decorativo', 'interiorismo', 'multicolor', 'eventos', 'escaparates', 'infantil'],
      
      headline: 'Recubrimiento sintético versátil para aplicaciones decorativas',
      description: 'El césped artificial 8mm decorativo Capridis es un recubrimiento sintético de fibra corta diseñado específicamente para aplicaciones decorativas y prácticas donde prima la estética sobre el volumen. Disponible en verde natural y versión multicolor para proyectos creativos.',
      
      features: [
        'Disponible en verde natural y multicolor',
        'Diseñado para aplicaciones decorativas premium',
        'Ligero y fácil de transportar',
        'Instalación rápida en cualquier superficie',
        'Sin mantenimiento requerido',
        'Ideal para proyectos creativos diferenciados'
      ],
      
      applications: [
        'Decoración de interiores',
        'Stands feriales',
        'Escaparates comerciales',
        'Eventos corporativos',
        'Terrazas urbanas',
        'Áreas infantiles',
        'Proyectos de interiorismo creativo',
        'Instalaciones artísticas'
      ],
      
      specs: [
        { label: 'Altura de fibra', value: '8 mm', icon: 'ruler' },
        { label: 'Material', value: 'Polipropileno premium', icon: 'material' },
        { label: 'Colores', value: 'Verde Natural / Multicolor', icon: 'palette' },
        { label: 'Rollo estándar', value: '30 ml x 2 m', icon: 'roll' },
        { label: 'Superficie por rollo', value: '60 m²', icon: 'area' }
      ],
      
      material: 'Polipropileno de primera calidad',
      backing: 'Látex reforzado con drenaje',
      
      uvProtection: true,
      drainageSystem: true,
      leadFree: true,
      petFriendly: true,
      childSafe: true,
      fireRetardant: false,
      warranty: 5,
      
      metaTitle: 'Césped Artificial 8mm Capridis | Verde y Multicolor | CespedBCN',
      metaDescription: 'Césped artificial decorativo Capridis 8mm. Verde natural o multicolor para interiorismo y eventos creativos. Desde 8,26€/m². Envío Barcelona.',
      keywords: ['césped artificial multicolor', 'césped decorativo 8mm', 'césped interiorismo', 'césped escaparates', 'césped infantil colores'],
      
      mainImage: '/images/productos/capridis-8mm.jpg',
      galleryImages: [
        '/images/productos/capridis-8mm-verde.jpg',
        '/images/productos/capridis-8mm-multicolor.jpg',
        '/images/productos/capridis-8mm-instalado.jpg'
      ],
      
      isActive: true,
      isFeatured: false,
      isNew: false,
      sortOrder: 3
    },
  
    {
      // SUMMER 18MM
      id: 'summer-18mm',
      slug: 'cesped-artificial-summer-18mm',
      name: 'Césped Artificial Summer 18MM',
      shortName: 'Summer 18mm',
      height: 18,
      
      priceMin: 5.95,
      priceMax: 5.95,
      priceUnit: '€/m²',
      
      rollFormat: {
        length: 30,
        width: 2,
        totalSqm: 60
      },
      customCutAvailable: true,
      customCutReturnable: false,
      
      variants: [
        { color: 'Verde Bicolor', colorHex: '#4a7c59', pricePerSqm: 5.95, inStock: true },
        { color: 'Negro', colorHex: '#1a1a1a', pricePerSqm: 5.95, inStock: true },
        { color: 'Azul', colorHex: '#1565c0', pricePerSqm: 5.95, inStock: true },
        { color: 'Rojo', colorHex: '#c62828', pricePerSqm: 5.95, inStock: true },
        { color: 'Gris', colorHex: '#757575', pricePerSqm: 5.95, inStock: true }
      ],
      
      category: 'decorativo',
      tags: ['económico', 'colores', 'jardín', 'decoración', 'creativo', 'bicolor'],
      
      headline: 'El más económico de su categoría con 5 colores disponibles',
      description: 'El césped artificial Summer 18mm destaca por ser el modelo más económico de su categoría y por estar disponible en cinco colores distintos. Es ideal para jardines, decoración de exteriores o zonas de uso ocasional donde se busca un acabado vistoso con mínima inversión.',
      
      features: [
        'Modelo más económico de 18mm',
        'Disponible en 5 colores diferentes',
        'Versión verde con dos tonos para aspecto natural',
        'Fibras texturizadas efecto raíz (versión verde)',
        'Colores monocromáticos para proyectos creativos',
        'Excelente relación calidad-precio'
      ],
      
      applications: [
        'Jardines residenciales',
        'Decoración de exteriores',
        'Zonas de uso ocasional',
        'Proyectos creativos y artísticos',
        'Terrazas con diseño personalizado',
        'Eventos temáticos',
        'Espacios infantiles',
        'Zonas comerciales diferenciadas'
      ],
      
      specs: [
        { label: 'Altura de fibra', value: '18 mm', icon: 'ruler' },
        { label: 'Material', value: 'Polipropileno', icon: 'material' },
        { label: 'Colores disponibles', value: '5 (Verde, Negro, Azul, Rojo, Gris)', icon: 'palette' },
        { label: 'Rollo estándar', value: '30 ml x 2 m', icon: 'roll' },
        { label: 'Superficie por rollo', value: '60 m²', icon: 'area' }
      ],
      
      material: 'Polipropileno con fibras bicolor (versión verde)',
      backing: 'Látex con sistema de drenaje',
      
      uvProtection: true,
      drainageSystem: true,
      leadFree: true,
      petFriendly: true,
      childSafe: true,
      fireRetardant: false,
      warranty: 5,
      
      metaTitle: 'Césped Artificial 18mm Summer | 5 Colores desde 5,95€/m² | CespedBCN',
      metaDescription: 'Césped artificial Summer 18mm en 5 colores: verde, negro, azul, rojo y gris. El más económico de su categoría. Solo 5,95€/m². Envío Barcelona 24-48h.',
      keywords: ['césped artificial 18mm', 'césped colores', 'césped negro', 'césped azul', 'césped económico', 'césped rojo'],
      
      mainImage: '/images/productos/summer-18mm.jpg',
      galleryImages: [
        '/images/productos/summer-18mm-verde.jpg',
        '/images/productos/summer-18mm-negro.jpg',
        '/images/productos/summer-18mm-azul.jpg',
        '/images/productos/summer-18mm-rojo.jpg',
        '/images/productos/summer-18mm-gris.jpg'
      ],
      
      isActive: true,
      isFeatured: true,
      isNew: false,
      sortOrder: 4
    },
  
    {
      // BREDIS 30MM
      id: 'bredis-30mm',
      slug: 'cesped-artificial-bredis-30mm',
      name: 'Césped Artificial Bredis 30MM',
      shortName: 'Bredis 30mm',
      height: 30,
      
      priceMin: 10.25,
      priceMax: 12.25,
      priceUnit: '€/m²',
      
      rollFormat: {
        length: 30,
        width: 2,
        totalSqm: 60
      },
      customCutAvailable: true,
      customCutReturnable: false,
      
      variants: [
        { color: 'Verde Natural Premium', colorHex: '#3d6b4f', pricePerSqm: 12.25, inStock: true }
      ],
      
      category: 'residencial',
      tags: ['jardín', 'residencial', 'piscina', 'terraza', 'premium', 'mascotas', 'niños'],
      
      headline: 'Solución decorativa de alta calidad para espacios exteriores',
      description: 'El césped artificial Bredis 30mm es una solución decorativa de alta calidad diseñada específicamente para transformar tus espacios exteriores en áreas verdes impecables durante todo el año. Destaca por su aspecto extraordinariamente natural que imita a la perfección un césped recién cortado.',
      
      features: [
        'Aspecto extraordinariamente natural',
        'Textura mullida y confortable',
        'Gran suavidad al tacto',
        'Libre de plomo y cadmio',
        'Protección avanzada contra rayos UV',
        'Sistema de drenaje perforado',
        'Resistencia al desgaste en zonas de tránsito',
        'Soporta condiciones climáticas exigentes'
      ],
      
      applications: [
        'Jardines residenciales',
        'Terrazas y áticos',
        'Zonas de piscina',
        'Áreas de recreo infantil',
        'Espacios para mascotas',
        'Hoteles y restaurantes con terraza',
        'Centros educativos',
        'Proyectos de paisajismo profesional'
      ],
      
      specs: [
        { label: 'Altura de fibra', value: '30 mm', icon: 'ruler' },
        { label: 'Material', value: 'Polietileno + Polipropileno', icon: 'material' },
        { label: 'Composición', value: 'Sin plomo ni cadmio', icon: 'safety' },
        { label: 'Rollo estándar', value: '30 ml x 2 m', icon: 'roll' },
        { label: 'Superficie por rollo', value: '60 m²', icon: 'area' },
        { label: 'Drenaje', value: 'Perforado para evacuación rápida', icon: 'drainage' }
      ],
      
      material: 'Polietileno y polipropileno de primera calidad',
      backing: 'Látex reforzado con perforaciones de drenaje cada 10cm',
      
      uvProtection: true,
      drainageSystem: true,
      leadFree: true,
      petFriendly: true,
      childSafe: true,
      fireRetardant: true,
      warranty: 8,
      
      metaTitle: 'Césped Artificial 30mm Bredis | Premium para Jardines | CespedBCN',
      metaDescription: 'Césped artificial premium Bredis 30mm. Aspecto natural, ideal para jardines, terrazas y piscinas. Sin plomo. Desde 10,25€/m². Garantía 8 años.',
      keywords: ['césped artificial 30mm', 'césped jardín', 'césped piscina', 'césped terraza', 'césped premium barcelona', 'césped mascotas'],
      
      mainImage: '/images/productos/bredis-30mm.jpg',
      galleryImages: [
        '/images/productos/bredis-30mm-detalle.jpg',
        '/images/productos/bredis-30mm-jardin.jpg',
        '/images/productos/bredis-30mm-piscina.jpg',
        '/images/productos/bredis-30mm-terraza.jpg'
      ],
      
      isActive: true,
      isFeatured: true,
      isNew: false,
      sortOrder: 5
    }
  ];
  
  // ============================================
  // FUNCIONES HELPER
  // ============================================
  
  /**
   * Obtiene un producto por su slug
   */
  export const getProductBySlug = (slug: string): CatalogProduct | undefined => {
    return catalogProducts.find(p => p.slug === slug);
  };
  
  /**
   * Obtiene un producto por su ID
   */
  export const getProductById = (id: string): CatalogProduct | undefined => {
    return catalogProducts.find(p => p.id === id);
  };
  
  /**
   * Obtiene productos por categoría
   */
  export const getProductsByCategory = (category: CatalogProduct['category']): CatalogProduct[] => {
    return catalogProducts.filter(p => p.category === category && p.isActive);
  };
  
  /**
   * Obtiene productos destacados
   */
  export const getFeaturedProducts = (): CatalogProduct[] => {
    return catalogProducts.filter(p => p.isFeatured && p.isActive);
  };
  
  /**
   * Obtiene productos activos ordenados
   */
  export const getActiveProducts = (): CatalogProduct[] => {
    return catalogProducts
      .filter(p => p.isActive)
      .sort((a, b) => a.sortOrder - b.sortOrder);
  };
  
  /**
   * Obtiene productos por altura
   */
  export const getProductsByHeight = (minHeight: number, maxHeight: number): CatalogProduct[] => {
    return catalogProducts.filter(p => 
      p.isActive && p.height >= minHeight && p.height <= maxHeight
    );
  };
  
  /**
   * Obtiene productos por rango de precio
   */
  export const getProductsByPriceRange = (minPrice: number, maxPrice: number): CatalogProduct[] => {
    return catalogProducts.filter(p => 
      p.isActive && p.priceMin >= minPrice && p.priceMax <= maxPrice
    );
  };
  
  /**
   * Obtiene el producto más barato
   */
  export const getCheapestProduct = (): CatalogProduct | undefined => {
    const active = catalogProducts.filter(p => p.isActive);
    return active.reduce((min, p) => p.priceMin < min.priceMin ? p : min, active[0]);
  };
  
  /**
   * Obtiene productos con variantes de color
   */
  export const getProductsWithColorVariants = (): CatalogProduct[] => {
    return catalogProducts.filter(p => p.isActive && p.variants.length > 1);
  };
  
  /**
   * Busca productos por tag
   */
  export const getProductsByTag = (tag: string): CatalogProduct[] => {
    return catalogProducts.filter(p => 
      p.isActive && p.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
    );
  };
  
  /**
   * Calcula el precio de un corte personalizado
   */
  export const calculateCutPrice = (product: CatalogProduct, linearMeters: number): number => {
    const sqm = linearMeters * product.rollFormat.width;
    return sqm * product.priceMax; // Cortes al precio máximo
  };
  
  /**
   * Calcula el precio de un rollo completo
   */
  export const calculateRollPrice = (product: CatalogProduct): { min: number; max: number } => {
    const sqm = product.rollFormat.totalSqm;
    return {
      min: sqm * product.priceMin,
      max: sqm * product.priceMax
    };
  };
  
  // ============================================
  // ESTADÍSTICAS DEL CATÁLOGO
  // ============================================
  
  export const catalogStats = {
    totalProducts: catalogProducts.length,
    activeProducts: catalogProducts.filter(p => p.isActive).length,
    featuredProducts: catalogProducts.filter(p => p.isFeatured).length,
    priceRange: {
      min: Math.min(...catalogProducts.map(p => p.priceMin)),
      max: Math.max(...catalogProducts.map(p => p.priceMax))
    },
    heightRange: {
      min: Math.min(...catalogProducts.map(p => p.height)),
      max: Math.max(...catalogProducts.map(p => p.height))
    },
    categories: [...new Set(catalogProducts.map(p => p.category))],
    allTags: [...new Set(catalogProducts.flatMap(p => p.tags))]
  };
  
  // ============================================
  // DATOS DE CONTACTO PARA PEDIDOS
  // ============================================
  
  export const orderContact = {
    email: 'ventas@disstands.com',
    phone: '934 850 085',
    note: 'Los cortes personalizados son ventas finales y no admiten devoluciones.',
    shippingInfo: 'Envío en Barcelona y área metropolitana en 24-48h.',
    installationNote: 'Para asesoramiento sobre medidas e instalación, contacta con nuestro equipo.'
  };