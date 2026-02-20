var symbolA = Symbol('a');
var iterables = {
  [symbolA]: ['value for a'],
  b: ['value for b']
};
var result = Array.from(Iterator.zipKeyed(iterables));