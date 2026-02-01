var target = new Uint8Array([255, 255, 255, 255]);
var result = target.setFromBase64('x+/y');
var target = new Uint8Array([255, 255, 255, 255]);
var result = target.setFromBase64('x+/y', {
  alphabet: 'base64'
});
var target = new Uint8Array([255, 255, 255, 255]);
var result = target.setFromBase64('x-_y', {
  alphabet: 'base64url'
});