const tests = [["auto", "(US$987.00)", "(US$0.00)", "(US$0.00)", "US$0.00", "US$0.00", "US$987.00"], ["always", "(US$987.00)", "(US$0.00)", "(US$0.00)", "+US$0.00", "+US$0.00", "+US$987.00"], ["never", "US$987.00", "US$0.00", "US$0.00", "US$0.00", "US$0.00", "US$987.00"], ["exceptZero", "(US$987.00)", "US$0.00", "US$0.00", "US$0.00", "US$0.00", "+US$987.00"]];
for (const [signDisplay, negative, negativeNearZero, negativeZero, zero, positiveNearZero, positive] of tests) {
  const nf = new Intl.NumberFormat("zh-TW", {
    style: "currency",
    currency: "USD",
    currencySign: "accounting",
    signDisplay
  });
}