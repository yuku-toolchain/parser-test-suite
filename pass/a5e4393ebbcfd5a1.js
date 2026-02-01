const string = '🥰💩🙏😈';
const map = Map.groupBy(string, function (char) {
  return char < '🙏' ? 'before' : 'after';
});