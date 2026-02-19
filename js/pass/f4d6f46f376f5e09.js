let C = class {
  [null] = () => {
    return null;
  };
  static [null] = () => {
    return null;
  };
};
let c = new C();