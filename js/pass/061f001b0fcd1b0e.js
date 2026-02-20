const rab = CreateResizableArrayBuffer(16, 40);
let tas_and_lengths = [];
for (let ctor of ctors) {
  const length = 8 / ctor.BYTES_PER_ELEMENT;
  tas_and_lengths.push([new ctor(rab, 0, length), length]);
}
for (let [ta, length] of tas_and_lengths) {}
rab.resize(2);
for (let [ta, length] of tas_and_lengths) {}
rab.resize(8);
for (let [ta, length] of tas_and_lengths) {}
rab.resize(40);
for (let [ta, length] of tas_and_lengths) {}