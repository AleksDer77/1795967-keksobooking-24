import {MIN_LAT, MAX_LAT, MIN_LNG, MAX_LNG, OBJECT_COUNT, PHOTOS, DESCRIPTIONS, FEATURES, CHECKIN_OUT, TYPES, TITLES} from './mock/data.js';
import {getRandomArrayElement, getArrayRandomLength, getRandomPositiveInteger, getRandomPositiveFloat} from './mock/util.js';
import {getLocation, createOffers, createOffer} from './mock/offer.js';
createOffers(OBJECT_COUNT);
