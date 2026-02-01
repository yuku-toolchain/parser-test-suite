const d1 = new Date(2019, 7, 10, 1, 2, 3, 234);
const d2 = new Date(2019, 7, 10, 1, 2, 3, 567);
let dtf = new Intl.DateTimeFormat('en', {
  minute: "numeric",
  second: "numeric",
  fractionalSecondDigits: undefined
});
dtf = new Intl.DateTimeFormat('en', {
  minute: "numeric",
  second: "numeric",
  fractionalSecondDigits: 1
});
dtf = new Intl.DateTimeFormat('en', {
  minute: "numeric",
  second: "numeric",
  fractionalSecondDigits: 2
});
dtf = new Intl.DateTimeFormat('en', {
  minute: "numeric",
  second: "numeric",
  fractionalSecondDigits: 3
});