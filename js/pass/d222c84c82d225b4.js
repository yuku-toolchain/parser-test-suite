const values = [[undefined, "standard"], ["standard"], ["scientific"], ["engineering"], ["compact"]];
for (const [value, expected = value] of values) {
  const nf = new Intl.NumberFormat([], {
    notation: value
  });
  const resolvedOptions = nf.resolvedOptions();
}