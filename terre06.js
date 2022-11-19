const inverter = () => {
  const text = process.argv;
  text.splice(0, 2);
  textSplit = text[0].split("");
  reverseText = textSplit.reverse();
  pastText = reverseText.join("");
  return pastText;

  //   Plus compacte:
  //   const text = process.argv;
  //   return text[2].split("").reverse().join("");
};

console.log(inverter());
