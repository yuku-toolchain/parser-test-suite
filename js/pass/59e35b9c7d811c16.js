let invalidOptions = {};
for (const timeUnit of ["hours", "minutes", "seconds", "milliseconds", "microseconds", "nanoseconds"]) {
  invalidOptions[timeUnit] = "numeric";
}
for (const timeUnit of ["minutes", "seconds", "milliseconds", "microseconds", "nanoseconds"]) {
  for (const invalidStyle of ["long", "short", "narrow"]) {
    invalidOptions[timeUnit] = invalidStyle;
  }
  invalidOptions[timeUnit] = "numeric";
}
for (const timeUnit of ["hours", "minutes", "seconds"]) {
  invalidOptions[timeUnit] = "2-digit";
}
for (const timeUnit of ["minutes", "seconds", "milliseconds"]) {
  for (const invalidStyle of ["long", "short", "narrow"]) {
    invalidOptions[timeUnit] = invalidStyle;
  }
  invalidOptions[timeUnit] = "2-digit";
}