const tests = [["auto", "($987.00)", "($0.00)", "($0.00)", "$0.00", "$0.00", "$987.00"], ["always", "($987.00)", "($0.00)", "($0.00)", "+$0.00", "+$0.00", "+$987.00"], ["never", "$987.00", "$0.00", "$0.00", "$0.00", "$0.00", "$987.00"], ["exceptZero", "($987.00)", "$0.00", "$0.00", "$0.00", "$0.00", "+$987.00"]];
for (const [signDisplay, negative, negativeNearZero, negativeZero, zero, positiveNearZero, positive] of tests) {
  const nf = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencySign: "accounting",
    signDisplay
  });
}