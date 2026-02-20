testWithBigIntTypedArrayConstructors(function (TA) {
  let sample = new TA([42n, 44n, 46n, 43n, 45n]);
  let explicit = sample.sort(undefined);
  let implicit = sample.sort();
});