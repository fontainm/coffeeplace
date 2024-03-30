import storeA from '/images/stores/store1.jpg';
import storeB from '/images/stores/store2.jpg';

const data = [
  {
    id: 0,
    name: 'Coffee Place A',
    address: 'Straße 1',
    image: storeA,
    openinghours: [
      'Mo geschlossen',
      'Di - Fr: 07:00 - 16:30',
      'Sa - So: 12:00 - 17:30',
    ],
  },
  {
    id: 1,
    name: 'Coffee Place B',
    address: 'Gasse 10',
    image: storeB,
    openinghours: [
      'Mo - Do: 06:30 - 18:00',
      'Fr geschlossen',
      'Sa - So: 13:00 - 18:00',
    ],
  },
];

export default data;
