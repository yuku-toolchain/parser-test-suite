const startOfDay = Temporal.ZonedDateTime.from("1919-03-31[America/Toronto]");
const midnightDisambiguated = Temporal.ZonedDateTime.from("1919-03-31T00[America/Toronto]");
TemporalHelpers.assertDuration(startOfDay.until(midnightDisambiguated), 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, "start of day is 30 minutes earlier than following the disambiguation strategy for midnight");