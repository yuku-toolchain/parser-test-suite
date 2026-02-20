var o = {
  get a() {
    let x;
    eval('var x;');
  }
};