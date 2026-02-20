var o = {
  set a(_) {
    let x;
    eval('var x;');
  }
};