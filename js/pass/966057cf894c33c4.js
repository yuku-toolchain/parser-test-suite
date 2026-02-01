const validOptions = [[undefined, undefined], ["long", "long"], ["short", "short"], ["narrow", "narrow"], [{
  toString() {
    return "narrow";
  }
}, "narrow"], [{
  valueOf() {
    return "long";
  },
  toString: undefined
}, "long"]];
for (const [dayPeriod, expected] of validOptions) {
  const dtf = new Intl.DateTimeFormat("en", {
    dayPeriod
  });
  const options = dtf.resolvedOptions();
  const propdesc = Object.getOwnPropertyDescriptor(options, "dayPeriod");
  if (expected === undefined) {} else {}
}