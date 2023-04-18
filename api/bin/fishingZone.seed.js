require("dotenv").config();
require("../config/db.config");

const FishingZone = require("../models/fishingZone.model");
const fishingZones = [
  {
    name: "Zona de pesca de Dorados en Ituzaingó",
    description:
      "Zona de pesca de Dorados en Ituzaingó: Esta zona de pesca es famosa por su gran cantidad de dorados, que son conocidos por ser un pez deportivo muy buscado por los pescadores. Los dorados son grandes, agresivos y difíciles de capturar, lo que los convierte en un desafío para los pescadores experimentados. En Ituzaingó, los pescadores pueden encontrar dorados en diferentes áreas del río, como cerca de los bancos de arena y los canales de navegación. Es común utilizar señuelos y cebos vivos, como sábalos o morenas, para atrapar estos peces en esta área.Ubicada en la provincia de Corrientes, esta zona es famosa por su gran cantidad de dorados, que son conocidos por ser un pez deportivo muy buscado por los pescadores. Es común utilizar señuelos y cebos vivos para atrapar estos peces en esta área.",
    image:
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681856550/parana-aventura/zonas/zona1_ply3zh.jpg",
    status: true,
  },
  {
    name: "Zona de pesca de Surubíes en Reconquista",
    description:
      "Esta zona de pesca es conocida por su gran población de surubíes, un pez grande y poderoso que a menudo requiere equipo especializado para atraparlo. Los surubíes son muy buscados por su carne y su deportividad, y se pueden encontrar en diferentes áreas del río, como cerca de los troncos y las estructuras submarinas. Los pescadores pueden utilizar diferentes técnicas de pesca, como el spinning, la pesca con mosca y la pesca con carnada viva, para atraer a estos peces. Reconquista es una de las áreas más populares para la pesca de surubíes en el río Paraná, y a menudo se organizan torneos y competencias de pesca en esta zona.",
    image:
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681856549/parana-aventura/zonas/zona2_yquwsn.jpg",
    status: true,
  },
  {
    name: "Zona de pesca de Patíes en Rosario",
    description:
      "Rosario es una ciudad ubicada en la provincia de Santa Fe, en el río Paraná. A lo largo de la costa de Rosario, se encuentra una gran población de patíes, un pez que a menudo supera los 50 kilos de peso. Los patíes son muy buscados por los pescadores por su gran tamaño y su fuerza, lo que los convierte en un desafío emocionante para atrapar. Los pescadores pueden utilizar una variedad de cebos, desde gusanos y larvas hasta carne y vísceras, para atraer a estos peces. Es común pescarlos desde la costa o en pequeñas embarcaciones. La pesca de patíes en Rosario es una actividad popular para los locales y los visitantes, y a menudo se organizan excursiones y tours de pesca en la zona.",
    image:
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681856549/parana-aventura/zonas/zona_3_cgzmbg.jpg",
    status: true,
  },
  {
    name: "Zona de pesca de Pacú en Goya",
    description:
      "Esta zona de pesca es conocida por su gran cantidad de bagres, un pez común que a menudo es capturado por pescadores de todas las edades. Los bagres son muy buscados por su carne y su facilidad para ser capturados, lo que los convierte en un objetivo para los principiantes en la pesca. Los pescadores pueden utilizar una variedad de cebos, desde gusanos y larvas hasta carne y vísceras, para atraer a estos peces. Es común pescarlos desde la costa o en pequeñas embarcaciones, cerca de los canales de navegación y las zonas con agua más profunda. La pesca de bagres en Goya es una actividad popular para los locales y los visitantes, y se puede disfrutar durante todo el año debido a la gran cantidad de peces en esta zona. Además de la pesca, Goya es un destino turístico popular por sus playas, parques y festivales de pesca.",
    image:
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1681856550/parana-aventura/zonas/zona_4_opsakt.jpg",
    status: true,
  },
];

FishingZone.deleteMany()
  .then(() => {
    FishingZone.create(fishingZones).then(() => {
      return console.log("Seeded");
    });
  })
  .catch((err) => console.error(err));
