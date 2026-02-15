{
  const rab = new ArrayBuffer(64, {
    maxByteLength: 1024
  });
  let called = false;
}
{
  const rab = new ArrayBuffer(64, {
    maxByteLength: 1024
  });
  $DETACHBUFFER(rab);
  let called = false;
}