const sizeChar = () => {
  const text = process.argv;
  text.splice(0, 2);

  if (text.length > 1 || text.length < 1 || !isNaN(text[0])) {
    return "erreur";
  }
  return text[0].length;
};

console.log(sizeChar());
