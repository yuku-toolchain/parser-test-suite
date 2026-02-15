var probe;
{
  let x = 'inside';
  probe = function () {
    return x;
  };
}
let x = 'outside';