const time = new Temporal.PlainTime(12, 34, 56, 987, 650, 0);
for (const fractionalSecondDigits of ["other string", "AUTO", "not-auto", "autos", "auto\0"]) {}