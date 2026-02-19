const invalidStrings = [["", "empty string"], ["1997-12-04[u-ca=iso8601]", "ISO string with calendar annotation"], ["notacal", "Unknown calendar"]];
for (const [arg, description] of invalidStrings) {}