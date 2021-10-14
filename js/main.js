import {MIN_LAT, MAX_LAT, MIN_LNG, MAX_LNG, OBJECT_COUNT, PHOTOS, DESCRIPTIONS, FEATURES, CHECKIN_OUT, TYPES, TITLES} from './data.js';
import {getRandomArrayElement, getArrayRandomLength, getRandomPositiveInteger, getRandomPositiveFloat} from './util.js';

const getLocation = () => {
  getRandomPositiveFloat(MIN_LAT, MAX_LAT);
  getRandomPositiveFloat(MIN_LNG, MAX_LNG);
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
    checkin: getRandomArrayElement(CHECKIN_OUT),
    checkout: getRandomArrayElement(CHECKIN_OUT),
    features: getArrayRandomLength(FEATURES),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: getArrayRandomLength(PHOTOS),
    location: location,
  };
};

const createOffers = Array.from({length: OBJECT_COUNT}, createOffer);
createOffers();
