var invalidValues = {
  'null': null,
  'undefined': undefined,
  'true': true,
  '"abc"': "abc",
  '12': 12,
  'Symbol()': Symbol(),
  '[1, 2, 3]': [1, 2, 3],
  '{ 0: 1, 1: 2, 2: 3, length: 3 }': {
    0: 1,
    1: 2,
    2: 3,
    length: 3
  },
  'Uint8Array.prototype': Uint8Array.prototype,
  '1n': 1n
};
Object.entries(invalidValues).forEach(value => {});