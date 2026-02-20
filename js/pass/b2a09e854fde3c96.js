const badOptions = [null, true, "some string", Symbol(), 1, 2n];
for (const value of badOptions) {}