let x = 'outside';
var probe1, probe2;
switch (null) {
  case null:
    let x = 'inside';
    probe1 = function () {
      return x;
    };
  case null:
    probe2 = function () {
      return x;
    };
}