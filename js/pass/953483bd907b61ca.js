var calls = [];
new Intl.NumberFormat("en", {
  get minimumFractionDigits() {
    calls.push('minimumFractionDigits');
  },
  get maximumFractionDigits() {
    calls.push('maximumFractionDigits');
  }
});