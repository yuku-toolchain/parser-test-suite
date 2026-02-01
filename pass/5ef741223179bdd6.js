const rab = CreateResizableArrayBuffer(16, 40);
const offset = 8;
let tas = [];
for (let ctor of ctors) {
  tas.push(new ctor(rab, offset));
}
for (let ta of tas) {}
rab.resize(40);
for (let ta of tas) {}
rab.resize(20);
for (let ta of tas) {
  const expected_length = Math.floor((20 - offset) / ta.BYTES_PER_ELEMENT);
}
rab.resize(7);
for (let ta of tas) {}
rab.resize(0);
for (let ta of tas) {}
rab.resize(8);
for (let ta of tas) {}
rab.resize(offset + 1);
for (let ta of tas) {
  if (ta.BYTES_PER_ELEMENT == 1) {} else {}
}
rab.resize(40);
for (let ta of tas) {}