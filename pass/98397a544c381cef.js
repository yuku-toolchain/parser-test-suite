const toString = Intl.Locale.prototype.toString;
const invalidValues = [undefined, null, true, "", Symbol(), 1, {}, Intl.Locale.prototype];
for (const invalidValue of invalidValues) {}