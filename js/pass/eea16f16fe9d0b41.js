var target = {};
var source = Object.defineProperty({}, 'attr', {
  value: 1,
  enumerable: false
});
var result;
result = Object.assign(target, source);