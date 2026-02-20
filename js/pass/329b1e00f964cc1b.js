var expect;
var cache = [];
var site = 1;
function sameSite() {
  tag`${site++}`;
}
function tag(parameter) {
  if (!expect) {
    expect = parameter;
  }
  cache.push(parameter);
}
sameSite();
sameSite();
tag`${1}`;
sameSite();
sameSite();