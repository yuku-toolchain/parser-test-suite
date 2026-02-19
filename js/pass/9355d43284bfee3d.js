var parent = {
  get a() {}
};
var iterables = {
  __proto__: parent,
  b: ['value for b']
};
var result = Array.from(Iterator.zipKeyed(iterables));