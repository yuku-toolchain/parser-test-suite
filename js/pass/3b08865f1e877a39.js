let str = "1970-01-01T00:00";
str = "1970-01-01T00:00Z";
str = "1970-01-01T00:00+01:00";
str = "1970-01-01T00:00[+01:00]";
const result1 = Temporal.ZonedDateTime.from(str);
str = "1970-01-01T00:00Z[+01:00]";
const result2 = Temporal.ZonedDateTime.from(str);
str = "1970-01-01T00:00+01:00[+01:00]";
const result3 = Temporal.ZonedDateTime.from(str);
str = "1970-01-01T00:00-04:15[+01:00]";
const result4 = Temporal.ZonedDateTime.from(str, {
  offset: "ignore"
});