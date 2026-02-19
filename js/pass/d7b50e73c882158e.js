const date = new Temporal.PlainDate(2021, 8, 4);
const result = date.toLocaleString("en", {
  timeZone: "Pacific/Apia"
});