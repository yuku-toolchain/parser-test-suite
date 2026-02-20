const instance = new Temporal.ZonedDateTime(0n, "UTC");
const bag = {
  year: 1970,
  monthCode: "M01",
  day: 1,
  timeZone: "utC"
};
const result1 = instance.equals(bag);
const str = "1970-01-01[UtC]";
const result2 = instance.equals(str);