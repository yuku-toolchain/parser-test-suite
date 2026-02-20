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
for (const [dateStyle, expected] of validOptions) {
  const dtf = new Intl.DateTimeFormat("en", {
    dateStyle
  });
  const options = dtf.resolvedOptions();
  const propdesc = Object.getOwnPropertyDescriptor(options, "dateStyle");
  if (expected === undefined) {} else {}
}