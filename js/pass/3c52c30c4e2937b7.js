const fields = {
  year: 1970,
  month: 1,
  day: 1
};
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].forEach(n => {
  const tz = "Etc/GMT-" + n;
  const instance = Temporal.ZonedDateTime.from({
    ...fields,
    timeZone: tz
  });
});
const gmtMinus24TZ = "Etc/GMT-24";
[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(n => {
  const tz = "Etc/GMT-0" + n;
});
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(n => {
  const tz = "Etc/GMT+0" + n;
});
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach(n => {
  const tz = "Etc/GMT+" + n;
  const instance = Temporal.ZonedDateTime.from({
    ...fields,
    timeZone: tz
  });
});
const gmtPlus24TZ = "Etc/GMT+24";