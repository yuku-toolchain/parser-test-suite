var obj = {};
Math.writable = false;
Object.defineProperties(obj, {
  property: Math
});