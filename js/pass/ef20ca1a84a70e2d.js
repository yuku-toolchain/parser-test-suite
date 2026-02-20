const validOptions = [[undefined, undefined], ["full", "full"], ["long", "long"], ["medium", "medium"], ["short", "short"], [{
  toString() {
    return "full";
  }
}, "full"], [{
  valueOf() {
    return "long";
  },
  toString: undefined
}, "long"]];
for (const [timeStyle, expected] of validOptions) {
  const dtf = new Intl.DateTimeFormat("en", {
    timeStyle
  });
  const options = dtf.resolvedOptions();
  const propdesc = Object.getOwnPropertyDescriptor(options, "timeStyle");
  if (expected === undefined) {} else {}
}