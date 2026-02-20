const earlier = new Temporal.ZonedDateTime(1546935756123456789n, "+01:00");
const later = new Temporal.ZonedDateTime(1631018380987654321n, "+01:00");
[1, 2, 3, 4, 6, 8, 12].forEach(roundingIncrement => {
  const options = {
    smallestUnit: "hours",
    roundingIncrement
  };
});
["minutes", "seconds"].forEach(smallestUnit => {
  [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30].forEach(roundingIncrement => {
    const options = {
      smallestUnit,
      roundingIncrement
    };
  });
});
["milliseconds", "microseconds", "nanoseconds"].forEach(smallestUnit => {
  [1, 2, 4, 5, 8, 10, 20, 25, 40, 50, 100, 125, 200, 250, 500].forEach(roundingIncrement => {
    const options = {
      smallestUnit,
      roundingIncrement
    };
  });
});