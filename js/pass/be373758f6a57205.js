var fn, count = {};
count.catch = 0;
count.finally = 0;
fn = function () {
  try {
    throw 'try';
  } catch (e) {
    count.catch += 1;
    throw 'catch';
  } finally {
    count.finally += 1;
  }
  return 'wat';
};
count.catch = 0;
count.finally = 0;
fn = function () {
  try {
    throw 'try';
  } catch (e) {
    count.catch += 1;
    return 'catch';
  } finally {
    count.finally += 1;
  }
  return 'wat';
};
count.catch = 0;
count.finally = 0;
fn = function () {
  try {
    return 'try';
  } catch (e) {
    count.catch += 1;
    return 'catch';
  } finally {
    count.finally += 1;
  }
  return 'wat';
};