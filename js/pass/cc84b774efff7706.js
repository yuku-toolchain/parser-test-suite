var m = ({
  m() {
    let x;
    eval('var x;');
  }
}).m;