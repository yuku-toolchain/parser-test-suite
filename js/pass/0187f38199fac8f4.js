let C = class {
  [() => {}] = () => {
    return 1;
  };
  static [() => {}] = () => {
    return 1;
  };
};
let c = new C();