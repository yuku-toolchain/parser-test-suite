var calls = [];
function reviver(name, val) {
  calls.push(name);
  return val;
}
JSON.parse('{"p1":0,"p2":0,"p1":0,"2":0,"1":0}', reviver);