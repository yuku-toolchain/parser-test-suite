const rab = CreateResizableArrayBuffer(40, 80);
for (let ctor of ctors) {
  const ta = new ctor(rab, 0, 3);
  const empty_ta = new ctor(rab, 0, 0);
  const ta_with_offset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 3);
  const empty_ta_with_offset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 0);
  const length_tracking_ta = new ctor(rab);
  const offset = 8;
  const length_tracking_ta_with_offset = new ctor(rab, offset);
  const empty_length_tracking_ta_with_offset = new ctor(rab, 40);
}