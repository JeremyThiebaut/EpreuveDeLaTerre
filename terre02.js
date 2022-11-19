const arguments = () => {
  let arg = process.argv;
  arg.splice(0, 2);
  let text = "";
  arg.forEach((element) => {
    text = text + element;
    if (element != arg[arg.length - 1]) {
      text = text + "\n";
    }
  });
  return text;
};

console.log(arguments());
