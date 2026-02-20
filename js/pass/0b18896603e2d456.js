var retVal = ('x').replace(/x/, function () {
  if (this === global) {
    return 'y';
  } else {
    return 'z';
  }
});