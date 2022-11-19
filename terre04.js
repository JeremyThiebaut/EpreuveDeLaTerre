const integer = () => {
  const nbr = process.argv;
  nbr.splice(0, 2);

  if (nbr.length != 1 || isNaN(nbr[0])) {
    return "Tu ne me la mettras pas à l'envers";
  }

  if (nbr % 2 == 0) {
    return "pair";
  } else {
    return "impair";
  }
};

console.log(integer());
