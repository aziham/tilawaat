const formatTime = (timeInSeconds: number): string => {
  const formatNumber = (num: number): string =>
    num < 10 ? `0${num}` : `${num}`;

  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  if (hours > 0) {
    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(
      seconds
    )}`;
  } else {
    return `${formatNumber(minutes)}:${formatNumber(seconds)}`;
  }
};

export default formatTime;
