const df = new Intl.DurationFormat();
const units = ["years", "months", "weeks"];
const invalidValues = [2 ** 32, 2 ** 32 + 1, Number.MAX_SAFE_INTEGER, Number.MAX_VALUE];
const validValues = [2 ** 32 - 1];
for (let unit of units) {
  for (let value of invalidValues) {
    let positive = {
      [unit]: value
    };
    let negative = {
      [unit]: -value
    };
  }
  for (let value of validValues) {
    let positive = {
      [unit]: value
    };
    let negative = {
      [unit]: -value
    };
  }
}