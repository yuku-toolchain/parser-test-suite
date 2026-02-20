const validRegionOptions = [[undefined, undefined], ['FR', 'en-FR'], ['554', 'en-NZ'], [554, 'en-NZ']];
for (const [region, expected] of validRegionOptions) {
  let options = {
    region
  };
  let expect = expected || 'en';
  expect = expected || 'en-US';
  expect = (expected || 'en') + '-u-ca-gregory';
  expect = (expected || 'en-US') + '-u-ca-gregory';
}