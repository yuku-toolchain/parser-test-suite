const validHourCycleOptions = ['h11', 'h12', 'h23', 'h24', {
  toString() {
    return 'h24';
  }
}];
for (const hourCycle of validHourCycleOptions) {
  const expected = String(hourCycle);
  let expect = 'en-u-hc-' + expected;
}