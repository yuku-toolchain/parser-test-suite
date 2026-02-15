function* g() {
  yield 1;
  yield 2;
}
{
  let iterator = g();
  let {value, done} = iterator.drop({
    valueOf: function () {
      return 1;
    }
  }).next();
}
{
  let iterator = g();
  let {value, done} = iterator.drop([]).drop([1]).next();
}