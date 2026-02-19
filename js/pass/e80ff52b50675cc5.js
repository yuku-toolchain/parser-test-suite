function CollectValues(ta) {
  let values = [];
  for (const value of ta) {
    values.push(Number(value));
  }
  return values;
}
for (let ctor of ctors) {
  const no_elements = 10;
  const offset = 2;
  const buffer_byte_length = no_elements * ctor.BYTES_PER_ELEMENT;
  const rab = CreateResizableArrayBuffer(buffer_byte_length, 2 * buffer_byte_length);
  const byte_offset = offset * ctor.BYTES_PER_ELEMENT;
  let ta_write = new ctor(rab);
  for (let i = 0; i < no_elements; ++i) {
    ta_write[i] = MayNeedBigInt(ta_write, i % 128);
  }
  const ta = new ctor(rab, 0, 3);
  const empty_ta = new ctor(rab, 0, 0);
  const ta_with_offset = new ctor(rab, byte_offset, 3);
  const empty_ta_with_offset = new ctor(rab, byte_offset, 0);
  const length_tracking_ta = new ctor(rab);
  {
    let expected = [];
    for (let i = 0; i < no_elements; ++i) {
      expected.push(i % 128);
    }
  }
  const length_tracking_ta_with_offset = new ctor(rab, byte_offset);
  {
    let expected = [];
    for (let i = offset; i < no_elements; ++i) {
      expected.push(i % 128);
    }
  }
  const empty_length_tracking_ta_with_offset = new ctor(rab, buffer_byte_length);
}