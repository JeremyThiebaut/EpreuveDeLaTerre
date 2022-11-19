const findMiddle = () => {
  const value = process.argv;
  value.splice(0, 2);

  if (value.length != 3) {
    return "error";
  }

  const firstValue = Number(value[0]);
  const middleValue = Number(value[1]);
  const lastValue = Number(value[2]);

  if (
    isNaN(firstValue) ||
    isNaN(middleValue) ||
    isNaN(lastValue) ||
    firstValue === lastValue ||
    firstValue === middleValue ||
    lastValue === middleValue
  ) {
    return "error";
  }

  const all = firstValue + middleValue + lastValue;
  const higher = Math.max(firstValue, middleValue, lastValue);
  const lower = Math.min(firstValue, middleValue, lastValue);

  return all - higher - lower;
};

console.log(findMiddle());
