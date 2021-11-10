export const durationCalculator = (distance, speed) => {
  return distance * speed;
};

export const kmhToMph = (speed) => {
  return speed * 0.621371;
};

export const roundNumber = (value, decimals) => {
  return value.toFixed(decimals);
};
