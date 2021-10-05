// Функция, возвращающая случайное целое число из переданного диапазона включительно.

const randomInteger = (min, max) => {
  if (min < 0) {
    return 'попробуй ещё раз';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
randomInteger(3, 7);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

const random = (min, max) => {
  if (min < 0) {
    return 'попробуй ещё раз';
  }
  return Math.random() * (max - min) + min;
};
random(1, 8);
