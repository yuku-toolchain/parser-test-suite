const datetime = new Temporal.PlainDateTime(2001, 9, 9, 1, 46, 40, 987, 654, 321);
const invalidStrings = ["obviously bad", "", "EARLIER", "earlıer", "late\u0131r", "reject\0"];
invalidStrings.forEach(s => {});