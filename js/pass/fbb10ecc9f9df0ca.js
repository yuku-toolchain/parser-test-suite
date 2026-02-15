const date = new Temporal.PlainTime(14, 46);
const result = date.toLocaleString("en", {
  era: "narrow"
});