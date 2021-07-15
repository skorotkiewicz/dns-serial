module.exports = generate = (prev) => {
  const date = new Date();
  const [month, day, year] = [
    date.toLocaleString("en-us", { month: "2-digit" }),
    date.toLocaleString("en-us", { day: "2-digit" }),
    date.getFullYear(),
  ];

  let change = 0;
  if (prev) {
    prev = String(prev);
    if (prev.length !== 10) prev = prev.padEnd(10, "0");

    change = prev.substr(-2);

    if (isToday(prev)) {
      change = Number(change) + 1;
      change = String(change);
    } else {
      change = "00";
    }

    if (change < 10) change = change.padStart(2, "0");
  }

  let serial = year + month + day + change;

  if (serial.length !== 10) {
    serial = serial.padEnd(10, "0");
  }

  return Number(serial);
};

const isToday = (prev) => {
  prev = prev.slice(0, -2);

  prev = prev.substring(0, 4) + "-" + prev.substring(4);
  prev = prev.substring(0, 7) + "-" + prev.substring(7);

  return new Date(prev).toDateString() === new Date().toDateString();
};
