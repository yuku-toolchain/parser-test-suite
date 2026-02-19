const zdt = new Temporal.PlainDateTime(1800, 1, 1).toZonedDateTime("Europe/Paris");
const first = zdt.getTimeZoneTransition("next");
let next;
const firstMinus1s = first.add({
  seconds: -1
});
next = firstMinus1s.getTimeZoneTransition("next");
const firstMinus1ns = first.add({
  nanoseconds: -1
});
next = firstMinus1ns.getTimeZoneTransition("next");