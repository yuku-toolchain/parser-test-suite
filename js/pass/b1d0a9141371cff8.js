const badOptions = [null, true, "some string", Symbol(), 1, 2n, Infinity, NaN, null];
for (const value of badOptions) {}