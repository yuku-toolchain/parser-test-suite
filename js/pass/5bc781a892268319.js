const rtf = new Intl.RelativeTimeFormat("en-US");
const values = [[null, 0], [true, 1], [false, 0], ["5", 5], ["-5", -5], ["0", 0], ["-0", -0], ["  6  ", 6], [{
  toString() {
    return 7;
  }
}, 7, "object with toString"], [{
  valueOf() {
    return 7;
  }
}, 7, "object with valueOf"]];
for (const [input, number, name = String(input)] of values) {}