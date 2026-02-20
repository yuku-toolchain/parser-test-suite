const instant = new Temporal.Instant(0n);
const instantResult = instant.toLocaleString("en", {
  era: "narrow"
});
const dateResult = new Date(0).toLocaleString(["en"], {
  era: "narrow"
});