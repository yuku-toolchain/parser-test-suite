let C = class {
  [2 ** 2] = () => {
    return 4;
  };
  static [2 ** 2] = () => {
    return 4;
  };
};
let c = new C();