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
    change = Number(change) + 1;
    change = String(change);
    if (change < 10) change = change.padStart(2, "0");
  }

  let serial = year + month + day + change;

  if (serial.length !== 10) {
    serial = serial.padEnd(10, "0");
  }

  return Number(serial);
};
