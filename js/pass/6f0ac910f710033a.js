const tests = [["auto", "-∞", "-987", "-0", "-0", "0", "0", "987", "∞", "NaN"], ["always", "-∞", "-987", "-0", "-0", "+0", "+0", "+987", "+∞", "+NaN"], ["never", "∞", "987", "0", "0", "0", "0", "987", "∞", "NaN"], ["exceptZero", "-∞", "-987", "0", "0", "0", "0", "+987", "+∞", "NaN"]];
for (const [signDisplay, ...expected] of tests) {
  const nf = new Intl.NumberFormat("ja-JP", {
    signDisplay
  });
}