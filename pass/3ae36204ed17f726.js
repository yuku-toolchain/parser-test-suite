const base = {
  era: "ad",
  month: 5,
  day: 2,
  hour: 15,
  calendar: "gregory"
};
[Infinity, -Infinity].forEach(inf => {
  ["constrain", "reject"].forEach(overflow => {
    const calls = [];
    const obj = TemporalHelpers.toPrimitiveObserver(calls, inf, "eraYear");
  });
});