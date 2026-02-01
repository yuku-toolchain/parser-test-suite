const useResult = Temporal.ZonedDateTime.from("2022-10-07T18:37-07:00[!UTC]", {
  offset: "use"
});
const ignoreResult = Temporal.ZonedDateTime.from("2022-10-07T18:37-07:00[!UTC]", {
  offset: "ignore"
});
const preferResult = Temporal.ZonedDateTime.from("2022-10-07T18:37-07:00[!UTC]", {
  offset: "prefer"
});