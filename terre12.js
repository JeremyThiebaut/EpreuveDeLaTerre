const reverseTime = () => {
  const timeSend = process.argv;
  timeSend.splice(0, 2);
  if (timeSend.length != 1) {
    return "error";
  }

  const time = timeSend[0].split("");
  time.splice("5", "0", ":").join("");
  const newTime = time.join("");

  let [hours, minutes, modifier] = newTime.split(":");

  let status;

  if (isNaN(Number(hours)) || isNaN(Number(hours))) {
    return "error";
  }

  if (modifier.toLowerCase() == "am" || modifier.toLowerCase() == "pm") {
    status = true;
  }

  if (hours > 12 || hours < 0 || minutes > 59 || minutes < 0 || !status) {
    return "error";
  }

  if (Number(hours) === 12) {
    hours = 00;
  }

  if (modifier.toLowerCase() === "pm") {
    hours = Number(hours) + 12;
  }

  return `${hours}:${minutes}`;
};

console.log(reverseTime());
