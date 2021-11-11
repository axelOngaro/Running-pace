export const durationCalculator = (distance, speed) => {
  return distance * speed;
};

export const paceToKmh = (paceMin, paceSec) => {
  return paceToSpeedConverter(paceMin, paceSec);
};

export const roundNumber = (value, decimals) => {
  return value.toFixed(decimals);
};

export const paceToSpeedConverter = (paceMin, paceSec) => {
  const secPace = paceMin * 60 + paceSec;
  return (1 / secPace) * 3600;
};

export const paceToMphConverter = (paceMin, paceSec) => {
  const secPace = (paceMin * 60 + paceSec) * 1.60934; //sec par km
  return (1 / secPace) * 3600;
};

export const paceKmToPaceM = (paceMin, paceSec) => {
  const secPace = paceMin * 60 + paceSec;
  const secPMile = secPace * 1.60934;
  return `${Math.floor(secPMile / 60)} min ${Math.floor(secPMile % 60)}sec`;
};

export const paceToTime = (paceMin, paceSec, distance) => {
  const totalSec = (paceMin * 60 + paceSec) * distance;
  const min = Math.floor(totalSec / 60);
  const sec = totalSec - min * 60;
  return `${min} min${sec} sec`;
};
