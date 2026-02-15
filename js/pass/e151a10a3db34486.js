const instance = new Temporal.PlainDate(2000, 5, 2);
const invalidStrings = [["", "empty string"], ["1997-12-04[u-ca=notacal]", "Unknown calendar"]];
for (const [arg, description] of invalidStrings) {}