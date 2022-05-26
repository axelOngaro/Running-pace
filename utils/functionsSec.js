export const paceSecToSpeedConverter = (pace) => {
  return (1 / pace) * 3600;
};
export const roundNumber = (value, decimals) => {
  return value.toFixed(decimals);
};

export const paceSecToKmh = (pace) => {
  return paceSecToSpeedConverter(pace);
};

export const paceSecToMphConverter = (pace) => {
  const MphPace = pace * 1.6094;
  return (1 / MphPace) * 3600;
};

//min.km to min.Miles
export const paceSecKmToPaceM = (pace) => {
  const secPMile = pace * 1.60934;
  return `${Math.floor(secPMile / 60)} min ${Math.floor(secPMile % 60)}`;
};

export const paceToTime = (pace, distance) => {
  const totalTimeSec = pace * distance;
  if (totalTimeSec >= 3600) {
    const hours = Math.floor(totalTimeSec / 3600);
    const minutes = Math.floor((totalTimeSec - hours * 3600) / 60);
    const seconds = totalTimeSec - hours * 3600 - minutes * 60;
    return `${hours} h: ${minutes} min: ${seconds} sec`;
  } else if (totalTimeSec >= 60) {
    const minutes = Math.floor(totalTimeSec / 60);
    const seconds = Math.floor(totalTimeSec - minutes * 60);
    return `${minutes} min: ${seconds} sec`;
  } else return `${totalTimeSec} sec`;
};

export const paceMinToPaceSec = (paceMinutes, paceSeconds) => {
  return paceMinutes * 60 + paceSeconds;
};
