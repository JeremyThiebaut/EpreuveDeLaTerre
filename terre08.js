const powerNumber = () => {
  const nbr = process.argv;
  nbr.splice(0, 2);

  if (nbr[1] < 0) {
    return "erreur";
  }

  return Math.pow(nbr[0], nbr[1]);
};

console.log(powerNumber());
