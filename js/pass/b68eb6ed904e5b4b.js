const maximize = Intl.Locale.prototype.maximize;
const invalidValues = [undefined, null, true, "", Symbol(), 1, {}, Intl.Locale.prototype];
for (const invalidValue of invalidValues) {}