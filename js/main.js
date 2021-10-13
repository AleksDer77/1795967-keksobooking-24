function getRandomPositiveFloat (a, b, digits = 5) {

  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;

  return result.toFixed(digits);
}

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const TITLES = [
  'Дворец',
  'Квартира',
  'Дом',
  'Бунгало',
  'Отель',
];
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const CHECKIN_OUT = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTIONS = [
  'Уютная квартира',
  'С видом на улицу',
  'Солнечная сторона',
  'Удобная парковка',
  'Круглосуточное заселение',
  'Можно с животными',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const MIN_LAT = 35.65000;
const MAX_LAT = 35.70000;
const MIN_LNG = 139.70000;
const MAX_LNG = 139.80000;
const NUMBER_OBJECTS = 10;

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];
const getArrayRandomLength = (array) => array.slice(getRandomPositiveInteger(1, array.length - 1));

const getLocation = () => {
  latitude: getRandomPositiveFloat(MIN_LAT, MAX_LAT);
  longitude: getRandomPositiveFloat(MIN_LNG, MAX_LNG);
};

const createOffer = () => {
  const location = getLocation();
  return {
    avatar: `img/avatars/user0${getRandomPositiveInteger(1, 10)}.png`,
    title: getRandomArrayElement(TITLES),
    address: `${location.latitude}, ${location.longitude}`,
    price: getRandomPositiveInteger(0, 100000),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomPositiveInteger(0, 15),
    guests: getRandomPositiveInteger(0, 10),
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    features: getArrayRandomLength(FEATURES),
    description: getRandomArrayElement(DESCRIPTION),
    photos: getArrayRandomLength(PHOTOS),
    location: location,
  };
};
const createOffers = Array.from({length: OBJECT_COUNT}, createOffer);