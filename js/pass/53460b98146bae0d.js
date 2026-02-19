let executed = false;
let C = class {
  x = () => {
    let f = eval('executed = true; arguments;');
    f();
  };
};