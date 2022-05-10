export const decimalEmitter = (x: number) => {
  if (x >= 1 || x <= -1) {
    x = Math.floor(x * 100) / 100;
    return x.toFixed(2);
  } else return x;
};
