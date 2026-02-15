const df = new Intl.DateTimeFormat("zh-u-ca-chinese", {
  year: "numeric"
});
const date = new Date(2019, 5, 1);
const actual = df.formatToParts(date);
const expected = [{
  type: "relatedYear",
  value: "2019"
}, {
  type: "yearName",
  value: "己亥"
}, {
  type: "literal",
  value: "年"
}];
if (actual.length <= 2) {
  expected.shift();
}
actual.forEach(({type, value}, i) => {
  const {type: eType, value: eValue} = expected[i];
});