const powerNumber = () => {
  const nbr = process.argv;
  nbr.splice(0, 2);

  if (nbr[1] < 0 || nbr.length != 2 || isNaN(nbr[0]) || isNaN(nbr[1])) {
    return "erreur";
  }

  return Math.pow(nbr[0], nbr[1]);
};

console.log(powerNumber());
