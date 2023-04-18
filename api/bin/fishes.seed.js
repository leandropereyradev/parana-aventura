require("dotenv").config();
require("../config/db.config");

const Fish = require("../models/fish.model");
const fishes = [
  {
    name: "Dorado",
    description:
      "La talla mínima de captura deberá ser de (60 cm.) sesenta centímetros.\nEn cuanto a la temporada de pesca se deberá respetar desde Enero hasta finalizar Septiembre. Su temporada de veda se extiende desde Octubre hasta Enero, siendo totalmente prohíbida la pesca de esta especie en ese período.",
    image:
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681852787/parana-aventura/dorado_hji34b.jpg",
    fishingZone: ["643f1a64fb209c8d8acb4990", "643f1a64fb209c8d8acb4992"],
  },
  {
    name: "Surubí",
    description:
      "Pudiendo llegar a los 2 metros de largo e incluso a los 50 kilos de peso. Su momento del día de mayor actividad es la noche.\nEl surubí se arrastra por los fondos profundos del río buscando alimento, así que debemos conseguir que nuestros señuelos lleguen a la máxima profundidad. Para la pesca del surubí se recomienda emplear cañas de unos 2 metros de largo.",
    image:
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681852788/parana-aventura/surubi_pmwqps.jpg",
    fishingZone: ["643f1a64fb209c8d8acb4990", "643f1a64fb209c8d8acb4993"],
  },
  {
    name: "Pez Armado",
    description:
      "Encontramos dos especies de este pez en el Río Paraná, llamados vulgarmente Armado chanco y Armado común. Son animales de carácter más bien tranquilos y habitan aguas calmas, prefiriendo los fondos arenosos en los cuales se alimentan.\nSe caracterizan por poseer una cresta de espinas serradas en sus aletas dorsales y pectorales, por lo que se debe tener cuidado con su manipulación.",
    image:
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681853329/parana-aventura/armado_zmyvun.jpg",
    fishingZone: ["643f1a64fb209c8d8acb4992", "643f1a64fb209c8d8acb4993"],
  },
  {
    name: "Manguruyu",
    description:
      "Las zonas más propicias para su captura son los pozones profundos de aguas turbias y muy rápidas donde las especies forrajeras nadan con dificultad haciéndolas presas fáciles. Las carnadas más rendidoras son las morenas, las anguilas y boguitas chicas encarnadas enteras sin descartar (tal vez la más rendidora) la “miñoca” o “dedo”, la lombriz grande de tierra, encarnada en generosos ramilletes como para cubrir totalmente el anzuelo.",
    image:
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681852787/parana-aventura/Manguruyu_dy6pbz.jpg",
    fishingZone: ["643f1a64fb209c8d8acb4991", "643f1a64fb209c8d8acb4993"],
  },
  {
    name: "Patí",
    description:
      "En el Río de la Plata, y más precisamente en canaletas cercanas a la costa, se emplea la línea de fondo y la carnada de mojarra o lombriz enhebrada en forma de ramilletes en el anzuelo; también trozos de bagre o porteño, o filetes de estos mismos.\nPero en zonas de aguas profundas, donde andan los “grandes”, como es el caso del canal de acceso, por donde navegan los enormes barcos cargueros, se aprovecha la notable inclinación de este elegante y atractivo pez de color azulado por los trozos en descomposición de otros peces, especialmente vísceras.",
    image:
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681852788/parana-aventura/pati_zehs2b.jpg",
    fishingZone: ["643f1a64fb209c8d8acb4991", "643f1a64fb209c8d8acb4992"],
  },
  {
    name: "Raya de río",
    description:
      "No son capturadas en forma comercial, pero en algunos lugares es objeto de pesca de subsistencia y su carne de excelente calidad es muy apreciada por las poblaciones ribereñas. Los ejemplares pequeños son capturados para acuarismo y se ha exportado en el 2003.Sobre el tipo de caña, valen igual tanto una caña de Surfcasting como una de Carpfishing de gama media o alta, para poder manejar bien las envestidas de este pez tan fuerte y como no, lo más importante con una buena acción para poder cansar bien a nuestro oponente y que nosotros no nos terminemos rompiendo la espalda aguantando toda esa presión en los riñones.",
    image:
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681852787/parana-aventura/raya_iycb5l.jpg",
    fishingZone: ["643f1a64fb209c8d8acb4990", "643f1a64fb209c8d8acb4992"],
  },
  {
    name: "Pacú",
    description:
      "El pacú es otra de las grandes especies buscada por los pescadores deportivos del norte argentino. Su carne es maravillosa. Su dieta alimentaria son frutas y semillas que caen de los árboles. Se lo pesca en canales y riachos de lenta o nula correntada que resultan el hábitat natural de la especie.",
    image:
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681852787/parana-aventura/pacu_am3vno.jpg",
    fishingZone: ["643f1a64fb209c8d8acb4990", "643f1a64fb209c8d8acb4992"],
  },
  {
    name: "Boga",
    description:
      " las Bogas se descomponen fácilmente, además su tamaño es muy pequeño y no se utiliza en la cocina. Sin embargo resultan muy convenientes para la pesca de depredadores con gran olfato, pues el olor que despiden al cortarse o morir es sumamente fuerte, dejando un rastro muy atractivo.\nPara capturarlas es necesario cebar muy bien la zona, preferiblemente con masilla de pan o harina. También es conveniente capturarlas cerca del atardecer, antes de una jornada de depredadores nocturnos, así tendrás el cebo listo unas horas antes de comenzar.",
    image:
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681852787/parana-aventura/boga_xksf24.jpg",
    fishingZone: ["643f1a64fb209c8d8acb4991", "643f1a64fb209c8d8acb4992"],
  },
  {
    name: "Sábalo",
    description:
      "El sábalo pasa sus otoños e inviernos en el océano, así que el mejor momento para pescarlo es durante la primavera y el verano, que es cuando regresa a los ríos. La mayoría de la gente comienza a pescar sábalo en agosto.",
    image:
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681852788/parana-aventura/sabalo_zxaab8.jpg",
    fishingZone: ["643f1a64fb209c8d8acb4991", "643f1a64fb209c8d8acb4993"],
  },
];

Fish.deleteMany()
  .then(() => {
    Fish.create(fishes).then(() => {
      return console.log("Seeded");
    });
  })
  .catch((err) => console.error(err));
