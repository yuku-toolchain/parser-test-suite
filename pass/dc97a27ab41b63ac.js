const rab = CreateResizableArrayBuffer(16, 40);
let tas = [];
for (let ctor of ctors) {
  tas.push(new ctor(rab));
}
for (let ta of tas) {}
rab.resize(40);
for (let ta of tas) {}
rab.resize(19);
for (let ta of tas) {
  const expected_length = Math.floor(19 / ta.BYTES_PER_ELEMENT);
}
rab.resize(1);
for (let ta of tas) {
  if (ta.BYTES_PER_ELEMENT == 1) {} else {}
}
rab.resize(0);
for (let ta of tas) {}
rab.resize(8);
for (let ta of tas) {}
rab.resize(40);
for (let ta of tas) {}