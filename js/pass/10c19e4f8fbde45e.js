var actualStrict;
var actualNonStrict;
let x = 'outside';
{
  let x = 'inside';
  actualNonStrict = (0, eval)('x;');
  actualStrict = (0, eval)('"use strict"; x;');
}