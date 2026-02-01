const instance = new Temporal.Duration(1, 0, 0, 0, 24);
const invalidStrings = [["", "empty string"], ["1997-12-04[u-ca=notacal]", "Unknown calendar"]];
for (const [arg, description] of invalidStrings) {}