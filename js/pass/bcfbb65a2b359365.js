var value = Object.defineProperty({}, '__proto__', {
  value: 123
});
var result, x, y;
result = {__proto__: x, __proto__: y} = value;
result = x = y = null;
result = {__proto__: x, __proto__: y} = value;