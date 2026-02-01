const datetime = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 987, 650, 0);
let string = datetime.toString({
  fractionalSecondDigits: 2.5
});
string = datetime.toString({
  fractionalSecondDigits: 9.7
});