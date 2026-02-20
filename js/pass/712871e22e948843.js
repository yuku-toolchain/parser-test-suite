const locale = "en";
const duration = {
  hours: 1234,
  minutes: 1234567,
  seconds: 12345678
};
let df = new Intl.DurationFormat(locale, {
  style: "digital"
});