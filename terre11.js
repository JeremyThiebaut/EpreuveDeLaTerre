const clock = () => {
  const clc = process.argv;

  clc.splice(0, 2);

  if (clc.length != 1) {
    return "choose a time (ex: node exo.js 13:47)";
  }

  const date = clc[0].split(":");

  const hour = date[0];
  const suffix = hour >= 12 ? "pm" : "am";
  const minute = date[1];

  if (isNaN(minute) || isNaN(hour)) {
    return "error";
  }

  let newHours = hour % 12 || 12;

  if (hour == 12 || hour == 00) {
    newHours = 00;
  }

  if (
    hour > 23 ||
    hour < 0 ||
    hour.length < 2 ||
    minute < 0 ||
    minute > 59 ||
    minute.length < 2
  ) {
    return "the time entered is invalid (ex: node exo.js 13:47)";
  }

  return `${newHours}:${minute}${suffix}`;
};

console.log(clock());
