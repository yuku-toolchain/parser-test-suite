let C = class {
  ['1'] = '2';
  static ['1'] = '2';
};
let c = new C();