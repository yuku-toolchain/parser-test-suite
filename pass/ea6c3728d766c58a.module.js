try {
  let C = class {
    [await 9] = () => {
      return 9;
    };
    static [await 9] = () => {
      return 9;
    };
  };
  let c = new C();
} catch (e) {}