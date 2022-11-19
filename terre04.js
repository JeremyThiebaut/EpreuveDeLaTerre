const integer = () => {
  const number = process.argv;
  number.splice(0, 2);

  if (number.length != 1 || isNaN(number[0])) {
    return "Tu ne me la mettras pas à l'envers";
  }

  if (number % 2 == 0) {
    return "pair";
  } else {
    return "impair";
  }
};

console.log(integer());
