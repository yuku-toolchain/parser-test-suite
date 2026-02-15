const duration = new Temporal.Duration(1, 2, 3, 4, 5, 6, 7, 987, 650, 0);
let string = duration.toString({
  fractionalSecondDigits: 2.5
});
string = duration.toString({
  fractionalSecondDigits: 9.7
});