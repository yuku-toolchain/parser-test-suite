[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].forEach(n => {
  let tz = "Etc/GMT-" + n;
  let instance = new Temporal.ZonedDateTime(0n, tz);
});
let gmtMinus24TZ = "Etc/GMT-24";
[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(n => {
  let tz = "Etc/GMT-0" + n;
});
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(n => {
  let tz = "Etc/GMT+0" + n;
});
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach(n => {
  let tz = "Etc/GMT+" + n;
  let instance = new Temporal.ZonedDateTime(0n, tz);
});
let gmtPlus24TZ = "Etc/GMT+24";