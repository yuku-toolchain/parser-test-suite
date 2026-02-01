function props(x) {
  var array = [];
  for (let p in x) array.push(p);
  return array;
}
var subject;
subject = props([]);
subject = props([1]);
subject = props([1, 2]);
subject = props([1, 2, 3]);