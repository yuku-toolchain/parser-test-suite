const invalidStrings = [["2025-04-03T05:07.123[CET]", "Fractional minutes"], ["2025-04-03T12.5[CET]", "Fractional hours"]];
for (const [arg, description] of invalidStrings) {}