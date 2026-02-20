["m1", "M1", "m01"].forEach(monthCode => {});
["M00", "M19", "M99", "M13", "M00L", "M05L", "M13L"].forEach(monthCode => {
  var monthNumber = Number(monthCode.slice(1, 3)) + (monthCode.length - 3);
  var clampedMonthNumber = monthNumber < 1 ? 1 : monthNumber > 12 ? 12 : monthNumber;
});