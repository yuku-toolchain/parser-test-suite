var x = 0;
assert.sameValue(x, 0, 'The value of `x` is 0');
var
y;
assert.sameValue(y, undefined, 'The value of `y` is expected to equal `undefined`');
var  y;
assert.sameValue(y, undefined, 'The value of `y` is expected to equal `undefined`');
this.y++;
assert.sameValue(isNaN(y), true, 'isNaN(y) returns true');
var string = ""
assert.sameValue(string, "", 'The value of `string` is ""');
var string = "
assert.sameValue(string, "