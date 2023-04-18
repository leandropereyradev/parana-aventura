require("dotenv").config();
require("../config/db.config");

const Lodging = require("../models/lodging.model");
const lodgings = [
  {
    name: "La Susanita",
    description:
      "Cabaña de madera con canoa en isla del delta, primera sección con parque y pequeña playa. Se llega en lancha taxi 30 min o lancha colectiva 60 minutos desde Tigre.\nPara dos personas. Wifi, 2 aires split frio-calor, parrilla. Canoa canadiense sin cargo para paseos por los arroyos vecinos. Almacen en cercanía, comidas a pedido.\nDormitorio con cama doble, colchón alta densidad, baño completo, estar-comedor con cocina integrada, terraza deck techada y muebles de exterior.",
    image: [
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681854724/parana-aventura/casa1/d6713ca5-edb7-4641-8f13-29a5c9f248c0_dapinl.jpg",
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681854724/parana-aventura/casa1/a1570cc7-427b-4891-a9db-8f34717b0603_x2yf2d.jpg",
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681854724/parana-aventura/casa1/0943ca20-44c2-485b-b47b-c9bdb99b2ee9_urrfqw.jpg",
    ],
    price: 30,
    services: ["breakfast", "pool", "spa"],
    status: true,
    fishingZone: ["643f1a64fb209c8d8acb4990", "643f1a64fb209c8d8acb4992"],
  },
  {
    name: "La Soleada",
    description:
      "Luminoso y cálido departamento sobre el Paseo Victorica, a orillas del Río Luján. Amplio balcón para disfrutar de la vista al río, amaneceres y atardeceres espectaculares. Ubicado en zona gastronómica, a 2 cuadras de la mejor heladería Italiana y a 3 del Museo de Arte. Podrán disfrutar la tranquilidad del departamento y caminatas en la costanera, así como también de variadas actividades que ofrece la zona del Delta: Paseos en lancha, salidas a remar, compras en el Puerto de Frutos, etc.",
    image: [
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681855059/parana-aventura/casa2/ceb78abf-58d1-4bd1-8fef-3e1639ba2d91_pmz6a0.jpg",
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681855059/parana-aventura/casa2/27d4ff20-71fc-4d10-834d-1f3e370b0541_goimaq.jpg",
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681855059/parana-aventura/casa2/d7d0f40d-89d7-4118-b290-0e6edf43c8c5_k6qd4y.jpg",
    ],
    price: 57,
    services: ["breakfast", "dock", "spa"],
    status: true,
    fishingZone: ["643f1a64fb209c8d8acb4990", "643f1a64fb209c8d8acb4993"],
  },
  {
    name: "El Atardecer",
    description:
      "Desconecta de tus preocupaciones en este espacio tan amplio y sereno. A 30 minutos del centro de la ciudad de Tigre podrás relajar en un entorno natural y moderno, y sentirte dentro de un bosque, y disfrutar de hermosos amaneceres y atardeceres frente al río. En Cabaña Caña Seca podrás recolectar zarzamoras, moras y ciruelas, y disfrutar de actividades como el canoaje y kayak. También puedes cocinar en el asador, disco u olla de fundición y hacer mágicas fogatas nocturnas!",
    image: [
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681855315/parana-aventura/casa%203/d9f127c6-950c-4231-adb2-0537afee9562_xkpcdw.webp",
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681855315/parana-aventura/casa%203/23f01172-84ef-409f-ace8-a2cb47ebef78_khkmua.webp",
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681855315/parana-aventura/casa%203/3e70bef3-c286-4837-a6e6-ff8a90d2dba0_q0qoqr.webp",
    ],
    price: 68,
    services: ["breakfast", "dock"],
    status: true,
    fishingZone: ["643f1a64fb209c8d8acb4992", "643f1a64fb209c8d8acb4993"],
  },
  {
    name: "El Dique",
    description:
      "Típica casa isleña en la primer sección del Delta, lo que implica cercanía con Tigre. Sólo media hora de viaje en lancha colectiva, que pasa cada media hora. Restaurant y almacén a 300 mts, cosa imprescindible cuando uno va a una casa de éstas características. Casa típica isleña, de planta alta con una habitación y parque de 1500 mts cuadrados. Parrilla, muelle privado en el arroyo Santa Rosa. En el cuarto hay una cama de dos plazas y en el living dos camas de una plaza con la posibilidad de sacar otras dos de abajo. En el muelle se puede disfrutar de unos mates o picada, es ideal para eso porque tiene bancos y una vista inmejorable.",
    image: [
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681855454/parana-aventura/casa4/e68e05e7-9064-4a1b-a55b-259142942a81_wr4cxx.webp",
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681855454/parana-aventura/casa4/7d91eead-d33c-4a1e-82c5-0e84a699cdad_wloli1.jpg",
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681855454/parana-aventura/casa4/a8d2cfde-80d8-4625-a230-7f3e05361b5f_oyrutj.jpg",
    ],
    price: 52,
    services: ["breakfast", "dock"],
    status: true,
    fishingZone: ["643f1a64fb209c8d8acb4991", "643f1a64fb209c8d8acb4993"],
  },
  {
    name: "La Lunada",
    description:
      "Un paraíso natural a 30 minutos de la ciudad. Naturaleza, tranquilidad, rio para zambullirse y espacio para fogón. La cabaña es nueva de excelente diseño, priorizando el confort y las vistas. Tiene terreno y muelle propios. Ubicada sobre el Arroyo Arroyón, uno de los mas tranquilos y bellos del delta. Un entorno mágico para conectar con la naturaleza y olvidarse de los problemas de la ciudad.",
    image: [
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681855738/parana-aventura/casa5/ffe9f613-8916-411e-9902-569566bc2a91_qjwrdy.webp",
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681855738/parana-aventura/casa5/ef8cf184-0d55-48fb-859c-165dcf3b3d21_xnv0cw.webp",
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681855738/parana-aventura/casa5/0292cdb9-b913-4720-883a-84378e5ba2cc_jflt2o.webp",
    ],
    price: 38,
    services: ["breakfast", "dock"],
    status: true,
    fishingZone: ["643f1a64fb209c8d8acb4991", "643f1a64fb209c8d8acb4992"],
  },
  {
    name: "Los Naranjos",
    description:
      "Un lugar para disfrutar la naturaleza y relajarse, en unos de los humedales más grandes de Latinoamérica. Ubicado sobre el Arroyo Pay Carabi. Hermosa cabaña acogedora, en una de las zonas más bonitas y tranquilas de Delta Tigre. Cruzando el Río Paraná, sobre el arroyo Pay Carabi. Disfrutarás de un viaje mágico desde el puerto fluvial. La cabaña tiene un estilo típico isleño, con vista al arroyo muy luminosa, con dos dormitorios, comedor, baño y cocina equipada. Muelle privado con canoa para salir a remar, jardín con mesas y sillas bajo arboleda. Zona para hacer asados. Ducha al aire libre en el muelle.",
    image: [
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681855895/parana-aventura/casa6/be2ae51a-ccb0-478e-850b-8045d421ede0_xfttqs.jpg",
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681855895/parana-aventura/casa6/e7f0f76f-1e72-449b-8783-3b226c47d083_bjb4mh.jpg",
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681855895/parana-aventura/casa6/8b3cbfbc-b27c-4c26-940e-88a405b4c981_mta5st.jpg",
    ],
    price: 26,
    services: ["breakfast", "dock"],
    status: true,
    fishingZone: ["643f1a64fb209c8d8acb4990", "643f1a64fb209c8d8acb4992"],
  },
];

Lodging.deleteMany()
  .then(() => {
    Lodging.create(lodgings).then(() => {
      return console.log("Seeded");
    });
  })
  .catch((err) => console.error(err));
