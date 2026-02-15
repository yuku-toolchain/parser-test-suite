const plainTime = new Temporal.PlainTime(12);
for (const badOptions of [null, true, "hello", Symbol("foo"), 1, 1n]) {}