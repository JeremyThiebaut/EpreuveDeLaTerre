const rasCar = () => {
  const nbr = process.argv;
  nbr.splice(0, 2);
  if (nbr.length > 1 || nbr[0] < 0 || nbr[0] != Math.floor(nbr[0])) {
    return "error";
  }

  return Math.sqrt(nbr[0]);
};

console.log(rasCar());
