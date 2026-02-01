try {
  let C = class {
    [await 9] = 9;
    static [await 9] = 9;
  };
  let c = new C();
} catch (e) {}