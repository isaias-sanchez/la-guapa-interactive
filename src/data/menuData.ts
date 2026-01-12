// Menu Data for La Guapa - Art Based Bar & Restaurant

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  tag?: string;
  isNew?: boolean;
  isFavorite?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface MenuSection {
  id: string;
  name: string;
  icon: string;
  categories: MenuCategory[];
}

// Restobar Menu
export const restobarMenu: MenuSection = {
  id: "restobar",
  name: "Restobar",
  icon: "🍔",
  categories: [
    {
      id: "entradas",
      name: "Entradas",
      items: [
        {
          id: "burrata-raven",
          name: "Burrata Raven",
          description: "Burrata cremosa sobre pasta de tomate, rúgula fresca, parmesano, tomates cherry, picadillo de aceitunas, cebolla y tostadas crujientes.",
          price: 27000,
        },
        {
          id: "chori-baston",
          name: "Chori al Bastón Argentino",
          description: "2 brochetas de chorizo a la plancha con chimichurri de casa y cebolla encurtida.",
          price: 27000,
        },
        {
          id: "papas-fondue",
          name: "Papas Fondue",
          description: "Papas en cascos, fondue de mix de quesos, baño de tocineta y perejil. Perfecta para empezar la noche.",
          price: 24000,
        },
        {
          id: "nirvanas",
          name: "Nirvanas",
          description: "Chorizo argentino con papas en casco bañadas en cheddar derretido, rocío de tocineta, chimichurri de la casa y limón.",
          price: 31000,
          isFavorite: true,
          tag: "FAV x siempre",
        },
        {
          id: "lomito-fondue",
          name: "Lomito Fondue",
          description: "Lomito fino, mix de quesos en fondue de champiñones y cebolla al grill, coronado con paprika y perejil, pan tipo mogolla.",
          price: 35000,
        },
      ],
    },
    {
      id: "burgers",
      name: "Burgers",
      items: [
        {
          id: "gigi-hadid",
          name: "Gigi Hadid",
          description: "150gr carne premium, pan artesanal, queso cheddar, doble tocineta, pepinillos importados, lechuga y mayoajo de la casa.",
          price: 34000,
        },
        {
          id: "belanova",
          name: "Belanova",
          description: "150gr carne premium, pan pretzel, cheddar, tocineta, piña caramelizada en cerveza y ron añejo, dip de queso crema.",
          price: 38000,
          tag: "Tercer puesto GastroFest",
        },
        {
          id: "cardi-b",
          name: "Cardi B",
          description: "300gr carne premium, pan brioche, doble cheddar, doble tocineta ahumada, doble pepinillos, lechuga y mayoajo especial.",
          price: 43000,
        },
        {
          id: "amy-winehouse",
          name: "Amy Winehouse",
          description: "150gr carne premium, pan artellano, doble tocineta crujiente, doble cheddar y cebolla caramelizada en vino tinto.",
          price: 38000,
          isFavorite: true,
          tag: "FAV del mes",
        },
        {
          id: "spicy-krush",
          name: "Spicy Krush",
          description: "130gr pechuga empanizada crocante en especias mixtas, salsa sweet pepper artesanal, pepinillos. ¡La mejor de pollo del mundo!",
          price: 40000,
        },
        {
          id: "luna-de-miel",
          name: "Luna de Miel",
          description: "150gr carne premium, pan de papa, cheddar, mermelada de tocineta con miel y ron, crotones de queso costeño, pulled pork en BBQ de maracuyá.",
          price: 40000,
          tag: "Podio Burger Legend 2024",
        },
        {
          id: "tokischa",
          name: "Tokischa",
          description: "150gr carne premium, pan brioche de papa, pimentones tatemados en balsámico y BBQ, cebollita crunchy y dip de burrata.",
          price: 37000,
          tag: "Burger Master 2024",
        },
      ],
    },
    {
      id: "pastas",
      name: "Pastas",
      items: [
        {
          id: "emily-in-paris",
          name: "Emily in Paris",
          description: "Pastas cortas en salsa napolitana boloñesa con finas hierbas, toque de pesto, 80gr de lomo fino salteado, parmesano y perejil.",
          price: 29000,
        },
        {
          id: "mia-thermopolis",
          name: "Mia Thermopolis",
          description: "Fettuccini en salsa Alfredo, tocineta, espinaca fresca, 100gr pechuga de pollo, especias italianas, parmesano y cebollín.",
          price: 34000,
        },
        {
          id: "pasta-a-pale",
          name: "Pasta a Palé",
          description: "Pastas largas con 100gr lomo fino, cebolla en julianas, champiñones, quesos fundidos, ajos rostizados y perejil, coronadas con parmesano.",
          price: 37000,
          isFavorite: true,
          tag: "FAV del mes",
        },
        {
          id: "pasta-veggie",
          name: "Pasta Veggie",
          description: "Pastas largas en salsa de pesto con almendras tostadas, tomates cherry, champiñones en aceite de oliva extra virgen y parmesano vegano.",
          price: 28000,
          tag: "Vegetariana",
        },
      ],
    },
    {
      id: "hotdogs",
      name: "Hot Dogs",
      items: [
        {
          id: "abba",
          name: "ABBA",
          description: "Salchicha alemana rellena de cheddar con fondue de mozzarella, champiñones salteados en tocineta y mix de quesos fundidos.",
          price: 30000,
        },
        {
          id: "sweet-child",
          name: "Sweet Child",
          description: "Salchicha alemana rellena de cheddar, dip de piña caramelizada, 70gr de lomito fino en base de queso crema.",
          price: 34000,
          isFavorite: true,
          tag: "El favorito de todos",
        },
        {
          id: "chili-dog",
          name: "Chili Dog",
          description: "Salchicha alemana rellena de queso, chili con carne molida, cheddar derretido y rocío de perejil crespo.",
          price: 27000,
        },
        {
          id: "jalapeno-dog",
          name: "Jalapeño Dog",
          description: "Salchicha alemana rellena de cheddar, mozzarella derretida, mermelada de tocineta, jalapeños y cebollín.",
          price: 29000,
        },
      ],
    },
    {
      id: "cocktails",
      name: "Cocktails",
      items: [
        {
          id: "mick-jagger",
          name: "Mick Jagger",
          description: "Soda schweppes, yerbabuena macerada, ron y zumo de limón. Sabores: cereza, fresa o tradicional.",
          price: 29000,
        },
        {
          id: "espresso-martini",
          name: "Espresso Martini",
          description: "Licor de café, shot de espresso en prensa francesa, vodka, decorado con semillas de café.",
          price: 30000,
          isFavorite: true,
          tag: "FAV del mes",
        },
        {
          id: "mango-whisky",
          name: "Mango Whisky",
          description: "Pulpa de mango, triple sec, whisky escocés, tajín y zumo de limón.",
          price: 31000,
        },
        {
          id: "josefina",
          name: "Josefina",
          description: "Helado de vainilla, crema de coco, ron, piña colada, decorado con vino tinto y yerbabuena.",
          price: 31000,
          tag: "Renovado",
        },
        {
          id: "margarita",
          name: "Margarita",
          description: "Tequila reposado, triple sec de naranja y tajín. Sabores: Tradicional, flor de jamaica, maracuyá, cereza, fresa o mandarina.",
          price: 38000,
          isFavorite: true,
          tag: "La favorita de todos",
        },
        {
          id: "cosmopolitan",
          name: "Cosmopolitan para las Guapas",
          description: "Vodka, zumo de arándanos, gotas de cereza, zumo de limón y triple sec.",
          price: 30000,
        },
        {
          id: "gin-tonic",
          name: "Gin & Tonic",
          description: "Ginebra fresca con notas cítricas, pepino crujiente rebanado y un susurro herbal de cardamomo y romero.",
          price: 27000,
          isNew: true,
        },
        {
          id: "roble-morado",
          name: "Roble Morado",
          description: "Aguardiente con frutos rojos, limón, almíbar y escarchado de tajín chamoy. Un homenaje vibrante a Barranquilla.",
          price: 29000,
        },
        {
          id: "cielo-tinto",
          name: "Cielo Tinto",
          description: "Tequila mezcal, lychee fresco, vino tinto superficial, marigold comestible y un susurro de fuego.",
          price: 33000,
          isNew: true,
        },
        {
          id: "sangria-bucket",
          name: "Sangría Bucket",
          description: "Sangría para 4-5 amigos con fruta, ron, ginger y juegos para disfrutar un rato distinto.",
          price: 78000,
        },
      ],
    },
  ],
};

// Cafetería Menu
export const cafeteriaMenu: MenuSection = {
  id: "cafeteria",
  name: "Café de La Guapa",
  icon: "☕",
  categories: [
    {
      id: "cafe-frio",
      name: "Café Frío",
      items: [
        {
          id: "onzas-del-caribe",
          name: "Onzas del Caribe",
          description: "Latte frío endulzado con panela, tan refrescante como la brisa y tan auténtico como un vaso de tinto en la costa.",
          price: 14000,
        },
        {
          id: "tarde-de-colegio",
          name: "El de la Tarde de Colegio",
          description: "Latte frío suave con pedacitos de galleta María. Sabe a infancia y a meriendas de la abuela.",
          price: 13000,
        },
        {
          id: "merendao",
          name: "GUAPA Merendao",
          description: "Dulce, goloso y con espuma que parece nube. Un tres leches convertido en café, un abrazo en taza.",
          price: 15000,
        },
      ],
    },
    {
      id: "cafe-caliente",
      name: "Café Caliente",
      items: [
        {
          id: "el-abuelita",
          name: "El Abuelita",
          description: "Café de siempre con golpe de chocolate casero que huele a cocina familiar. Cremita, calientico y con sabor a memoria dulce.",
          price: 15000,
        },
        {
          id: "capuchino",
          name: "Capuchino",
          description: "Espumoso, intenso y suave a la vez. El cappuccino de toda la vida, el que nunca falla.",
          price: 11000,
        },
        {
          id: "affogato",
          name: "Affogato",
          description: "Helado de vainilla ahogao en espresso calientico. Mitad postre, mitad café, todo un pecao costeño.",
          price: 10000,
        },
        {
          id: "chocolate-kitkat",
          name: "Chocolate KitKat",
          description: "El chocolate que te gusta pero con un toquecito distinto de La Guapa.",
          price: 12000,
        },
      ],
    },
    {
      id: "guapitos",
      name: "Guapitos",
      items: [
        {
          id: "napolitana",
          name: "Napolitana",
          description: "Masa de sal rellena con jamón.",
          price: 8000,
        },
        {
          id: "hawaiano",
          name: "Hawaiano",
          description: "Masa de sal rellena de piña y jamón.",
          price: 7500,
        },
        {
          id: "tres-quesos",
          name: "Tres Quesos",
          description: "Masa rellena de tres quesos derretidos.",
          price: 7000,
        },
        {
          id: "universal",
          name: "El Universal",
          description: "Masa de sal con queso crema.",
          price: 9000,
        },
        {
          id: "pandebono",
          name: "Queso Dulce",
          description: "Masa de lo dulce con queso crema y arequipe.",
          price: 7000,
        },
      ],
    },
  ],
};

// Bebidas sin alcohol
export const bebidasMenu: MenuCategory = {
  id: "bebidas",
  name: "Bebidas",
  items: [
    { id: "agua", name: "Agua 600ml", description: "", price: 6000 },
    { id: "quatro", name: "Quatro/Sprite 400ml", description: "", price: 6000 },
    { id: "coca-cola", name: "CocaCola Regular/Zero 400ml", description: "", price: 8000 },
    { id: "manzana", name: "Manzana Colombiana 400ml", description: "", price: 5000 },
    { id: "copa-sangria", name: "Copa de Sangría", description: "Vinotinto, ron, ginger y manzana", price: 15000 },
    { id: "hatsu", name: "Soda Hatsu Frambuesa", description: "", price: 11000 },
    { id: "te-hatsu", name: "Té Hatsu Lila/Blanco", description: "", price: 10000 },
  ],
};

// Cervezas
export const cervezasMenu: MenuCategory = {
  id: "cervezas",
  name: "Cervezas",
  items: [
    { id: "tres-cordilleras", name: "Tres Cordilleras Artesanal", description: "Rosada, negra, mulata e IPA", price: 15000 },
    { id: "bbc", name: "BBC", description: "", price: 15000 },
    { id: "club-colombia", name: "Club Colombia", description: "", price: 11000 },
    { id: "stella", name: "Stella Artois", description: "", price: 12000 },
    { id: "corona", name: "Corona", description: "", price: 13000 },
    { id: "costeñita", name: "Costeñita", description: "", price: 6000 },
  ],
};

// Limonadas
export const limonadasMenu: MenuCategory = {
  id: "limonadas",
  name: "Limonadas",
  items: [
    { id: "limonada-natural", name: "Limonada Natural", description: "", price: 11000 },
    { id: "limonada-yerbabuena", name: "Limonada Yerbabuena", description: "", price: 12000 },
    { id: "limonada-cerezada", name: "Limonada Cerezada", description: "", price: 12000 },
    { id: "limonada-coco", name: "Limonada de Coco", description: "", price: 13000 },
    { id: "limonada-vino", name: "Limonada de Vino", description: "", price: 15000 },
    { id: "limonada-corozo", name: "Limonada de Corozo", description: "", price: 12000 },
    { id: "limonada-jamaica", name: "Limonada Flor de Jamaica", description: "", price: 16000 },
  ],
};

export const formatPrice = (price: number): string => {
  return `$${(price / 1000).toFixed(0)}K`;
};
