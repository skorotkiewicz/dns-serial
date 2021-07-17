const serial = require("./index.js");
const date = new Date();
const [month, day, year] = [
  date.toLocaleString("en-us", { month: "2-digit" }),
  date.toLocaleString("en-us", { day: "2-digit" }),
  date.getFullYear(),
];

const fullDate = year + month + day;

test("current serial has 10 characters", () => {
  expect(String(serial()).length).toBe(10);
});

test("custom serial has 10 characters", () => {
  expect(String(serial(2021071500)).length).toBe(10);
});

test("correct added change number", () => {
  expect(String(serial(fullDate + "00"))).toBe(`${fullDate}01`);
});

test("correct add zero", () => {
  expect(String(serial(fullDate + "0"))).toBe(`${fullDate}01`);
  expect(String(serial(fullDate + "10"))).toBe(`${fullDate}11`);
});

test("new day", () => {
  expect(String(serial(2021071401))).toBe(`${fullDate}00`);
});
