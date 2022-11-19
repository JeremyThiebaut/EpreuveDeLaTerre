const primary = () => {
  const nbr = process.argv;
  nbr.splice(0, 2);
  if (nbr.length != 1 || isNaN(nbr[0])) {
    return "error";
  }

  if (nbr[0] < 2) {
    return `Non, ${nbr[0]} n,est pas un nombre premier.`;
  }

  console.log(nbr[0]);
  for (let i = 2; i <= Math.sqrt(nbr[0]); i++) {
    if (nbr[0] % i == 0) {
      return `Non, ${nbr[0]} n,est pas un nombre premier.`;
    }
    return `Oui, ${nbr[0]} est un nombre premier.`;
  }
};

console.log(primary());
