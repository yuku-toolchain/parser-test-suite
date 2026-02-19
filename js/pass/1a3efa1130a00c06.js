const instance = new Temporal.ZonedDateTime(0n, "UTC");
const namesIANA = ["Asia/Calcutta", "Asia/Kolkata", "ASIA/calcutta", "Asia/KOLKATA"];
for (const id1 of namesIANA) {
  for (const id2 of namesIANA) {}
}
const namesIANADifferentCanonical = ["Asia/Colombo", "ASIA/colombo"];
for (const id1 of namesIANADifferentCanonical) {
  for (const id2 of namesIANA) {}
}