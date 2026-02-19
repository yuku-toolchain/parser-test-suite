function props(x) {
  var array = [];
  for (let p in x) array.push(p);
  return array;
}
var subject;
subject = props({});
subject = props({
  x: 1
});
subject = props({
  x: 1,
  y: 2
});
subject = props({
  x: 1,
  y: 2,
  zoom: 3
});