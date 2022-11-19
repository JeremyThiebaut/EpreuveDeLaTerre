const modulo = () => {
  const nbr = process.argv;
  nbr.splice(0, 2);

  if (
    nbr.length > 2 ||
    nbr.length < 2 ||
    nbr[1] == 0 ||
    nbr[1] >= nbr[0] ||
    isNaN(nbr[0]) ||
    isNaN(nbr[1])
  ) {
    return "error";
  }

  return `résultat: ${Math.floor(nbr[0] / nbr[1])}
reste: ${nbr[0] % nbr[1]}`;
};

console.log(modulo());
