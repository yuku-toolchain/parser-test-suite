const time = new Temporal.PlainTime(12, 34, 56, 987, 650, 0);
let string = time.toString({
  fractionalSecondDigits: 2.5
});
string = time.toString({
  fractionalSecondDigits: 9.7
});