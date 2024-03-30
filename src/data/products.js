import espresso from '/images/products/espresso.jpg';
import cappuccino from '/images/products/cappuccino.jpg';
import americano from '/images/products/americano.jpg';
import matcha from '/images/products/matcha.jpg';
import muffin from '/images/products/muffin.jpg';
import fruitsalad from '/images/products/fruitsalad.jpg';

const data = [
  {
    id: 0,
    name: 'Espresso',
    image: espresso,
    description:
      'Unser Espresso ist ein intensiver Genuss, perfekt gebraut für den ultimativen Kaffeekick.',
    price: 290,
  },
  {
    id: 1,
    name: 'Cappuccino',
    image: cappuccino,
    description:
      'Verwöhne dich mit unserem cremigen Cappuccino, perfekt ausgewogen mit einem Hauch von Schaum',
    price: 380,
  },
  {
    id: 2,
    name: 'Americano',
    image: americano,
    description:
      'Der Americano ist eine reichhaltige und doch erfrischende Tasse Kaffee, ideal für einen energiegeladenen Start in den Tag',
    price: 360,
  },
  {
    id: 3,
    name: 'Matcha Latte',
    image: matcha,
    description:
      'Genieße die harmonische Verbindung von fein gemahlenem Matcha und cremiger Milch in unserem köstlichen Matcha Latte',
    price: 420,
  },
  {
    id: 4,
    name: 'Muffin',
    image: muffin,
    description:
      'Unsere saftigen Muffins sind die perfekte Begleitung zu deinem Kaffee, mit verschiedenen Geschmacksrichtungen für jeden Geschmack',
    price: 300,
  },
  {
    id: 5,
    name: 'Fruchtsalat',
    image: fruitsalad,
    description:
      'Erfrische dich mit unserem frischen Fruchtsalat, einer köstlichen Mischung aus saisonalen Früchten, perfekt für einen gesunden Snack oder eine leichte Mahlzeit',
    price: 500,
  },
];

export default data;
