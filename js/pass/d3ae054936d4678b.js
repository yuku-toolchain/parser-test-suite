const validValues = ["standard", "compact", "scientific", "engineering"];
const invalidValues = ["COMPACT", "ståndard", 123, false, null, {}, [], ""];
for (const value of validValues) {
  const pr = new Intl.PluralRules("en", {
    notation: value
  });
}
for (const value of validValues) {
  const pr = new Intl.PluralRules("en", {
    notation: new String(value)
  });
}
for (const value of invalidValues) {}