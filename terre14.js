const sort = () => {
  const nbr = process.argv;
  nbr.splice(0, 2);

  if (nbr.length < 2) {
    return "error";
  }

  let test = true;

  for (i = 0; i < nbr.length; i++) {
    if (isNaN(Number(nbr[i]))) {
      return "error";
    }
    if (Number(nbr[i - 1]) > Number(nbr[i])) {
      test = false;
    }
  }

  if (!test) {
    return "Pas triée !";
  } else {
    return "Triée !";
  }
};

console.log(sort());
