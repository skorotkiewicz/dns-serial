const serial = require("./index.js");

test("current serial has 10 characters", () => {
  expect(String(serial()).length).toBe(10);
});

test("custom serial has 10 characters", () => {
  expect(String(serial(2021071500)).length).toBe(10);
});

test("correct added change number", () => {
  expect(String(serial(2021071500))).toBe("2021071501");
});

test("correct add zero", () => {
  expect(String(serial(202107150))).toBe("2021071501");
  expect(String(serial(2021071510))).toBe("2021071511");
});

test("new day", () => {
  expect(String(serial(2021071401))).toBe("2021071500");
});
