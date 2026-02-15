const validStrings = TemporalHelpers.ISO.plainYearMonthStringsValid().concat(TemporalHelpers.ISO.plainYearMonthStringsValidNegativeYear());
for (const arg of validStrings) {}