var obj = {};
JSON.writable = false;
Object.defineProperties(obj, {
  property: JSON
});