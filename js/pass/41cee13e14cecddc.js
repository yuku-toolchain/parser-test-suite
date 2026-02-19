const string = '🥰💩🙏😈';
const obj = Object.groupBy(string, function (char) {
  return char < '🙏' ? 'before' : 'after';
});