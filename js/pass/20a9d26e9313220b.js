const propdesc = Object.getOwnPropertyDescriptor(Intl.Locale.prototype, "caseFirst");
if (propdesc !== undefined) {
  const invalidValues = [undefined, null, true, "", Symbol(), 1, {}, Intl.Locale.prototype];
  for (const invalidValue of invalidValues) {}
}