var executed = false;
class C {
  x = () => {
    var t = () => {
      eval('executed = true; arguments;');
    };
    t();
  };
}