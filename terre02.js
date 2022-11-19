const arguments = () => {
  let arg = process.argv;
  arg.splice(0, 2);
  let text = "";
  arg.forEach((element) => {
    text = text + element + "\n";
  });
  return text;
};

console.log(arguments());
