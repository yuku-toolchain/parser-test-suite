const invalidOptions = [null, 1, "", "Lookup", "LOOKUP", "lookup\0", "Best fit", "BEST FIT", "best\u00a0fit"];
for (const localeMatcher of invalidOptions) {}