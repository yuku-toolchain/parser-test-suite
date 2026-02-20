const tests = [{
  idToTest: "+0000",
  description: "colon-less"
}, {
  idToTest: "+00",
  description: "hours-only"
}];
for (const test of tests) {
  const {idToTest, description} = test;
  const instance = new Temporal.ZonedDateTime(0n, "+00:00");
  const bag = {
    year: 1970,
    monthCode: "M01",
    day: 1,
    timeZone: idToTest
  };
  const str = "1970-01-01[+00:00]";
}