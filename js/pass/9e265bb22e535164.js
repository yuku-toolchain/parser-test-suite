const allowedValues = ["zero", "one", "two", "few", "many", "other"];
const pluralrules = new Intl.PluralRules();
const options1 = pluralrules.resolvedOptions();
const options2 = pluralrules.resolvedOptions();
for (const category of options1.pluralCategories) {}