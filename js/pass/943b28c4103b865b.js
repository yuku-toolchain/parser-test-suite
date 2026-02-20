const tz = "America/Vancouver";
const dt1 = new Temporal.PlainDateTime(2000, 4, 2, 2);
const zdt1 = dt1.toZonedDateTime(tz);
const zdt1_compatible = dt1.toZonedDateTime(tz, {
  disambiguation: "compatible"
});
const zdt1_earlier = dt1.toZonedDateTime(tz, {
  disambiguation: "earlier"
});
const zdt1_later = dt1.toZonedDateTime(tz, {
  disambiguation: "later"
});
const dt2 = new Temporal.PlainDateTime(2000, 10, 29, 1);
const zdt2 = dt2.toZonedDateTime(tz);
const zdt2_compatible = dt2.toZonedDateTime(tz, {
  disambiguation: "compatible"
});
const zdt2_earlier = dt2.toZonedDateTime(tz, {
  disambiguation: "earlier"
});
const zdt2_later = dt2.toZonedDateTime(tz, {
  disambiguation: "later"
});