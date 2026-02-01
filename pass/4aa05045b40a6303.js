let reference = new Temporal.ZonedDateTime(2670_000_000_000n, "Africa/Monrovia");
function action(string) {
  const result1 = Temporal.ZonedDateTime.compare(string, reference);
  const result2 = Temporal.ZonedDateTime.compare(reference, string);
  return [result1, result2];
}
reference = new Temporal.ZonedDateTime(-543069621_000_000_000n, "Pacific/Niue");