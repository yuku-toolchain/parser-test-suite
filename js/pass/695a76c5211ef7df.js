const tests = [["auto", "-∞", "-987", "-0", "-0", "0", "0", "987", "∞", "非數值"], ["always", "-∞", "-987", "-0", "-0", "+0", "+0", "+987", "+∞", "+非數值"], ["never", "∞", "987", "0", "0", "0", "0", "987", "∞", "非數值"], ["exceptZero", "-∞", "-987", "0", "0", "0", "0", "+987", "+∞", "非數值"]];
for (const [signDisplay, ...expected] of tests) {
  const nf = new Intl.NumberFormat("zh-TW", {
    signDisplay
  });
}