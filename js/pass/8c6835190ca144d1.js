const validOptions = [0, 1, 5, 9, undefined];
for (const fractionalDigits of validOptions) {
  const obj = new Intl.DurationFormat("en", {
    fractionalDigits
  });
}