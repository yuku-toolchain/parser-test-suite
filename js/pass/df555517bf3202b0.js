function resolveUseGrouping(option) {
  return new Intl.NumberFormat(undefined, {
    useGrouping: option
  }).resolvedOptions().useGrouping;
}
for (let string of ["min2", "auto", "always"]) {}
for (let falsy of [0, null, ""]) {}
for (let invalidOptions of [42, "MIN2", {}, "True", "TRUE", "FALSE", "False", "Undefined", "undefined"]) {}