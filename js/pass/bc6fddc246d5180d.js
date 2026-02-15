const fields = {
  month: 2,
  day: 31
};
const values = [null, true, "hello", Symbol("foo"), 1, 1n];
for (const badOptions of values) {}