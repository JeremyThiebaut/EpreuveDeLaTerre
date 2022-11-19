const inverter = () => {
  const text = process.argv;
  text.splice(0, 2);

  if (text.length < 1) {
    return "error";
  }

  let error;

  text.forEach((element) => {
    if (!isNaN(Number(element))) {
      error = true;
    }
  });

  if (error) {
    return "error";
  }

  // -------------

  textSplit = text[0].split("");
  reverseText = textSplit.reverse();
  pastText = reverseText.join("");
  return pastText;

  //   Plus compacte:
  //   return text[2].split("").reverse().join("");
};

console.log(inverter());
