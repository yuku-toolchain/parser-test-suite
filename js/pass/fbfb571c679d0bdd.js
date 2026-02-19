var n = {};
var m = n;
if (typeof m !== "object") {}
function populateAge(person) {
  person.age = 50;
}
populateAge(m);
if (n.age !== 50) {}