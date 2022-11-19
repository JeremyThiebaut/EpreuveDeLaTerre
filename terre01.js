const titleFile = () => {
  const fullFile = module.filename;
  const file = fullFile.split("\\");
  return file[file.length - 1];
};

console.log(titleFile());
