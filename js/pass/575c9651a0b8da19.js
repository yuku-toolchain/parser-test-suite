const result = new Intl.Locale('en').getWeekInfo();
function isIntegerBetweenOneAndSeven(value) {
  return value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 6 || value === 7;
}
let original = new Intl.Locale('en').getWeekInfo().weekend;
let sorted = original.slice().sort();