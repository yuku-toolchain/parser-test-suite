var result = true;
try {
  decodeURIComponent("%");
  result = false;
} catch (e) {
  if (e instanceof URIError !== true) {
    result = false;
  }
}
try {
  decodeURIComponent("%A");
  result = false;
} catch (e) {
  if (e instanceof URIError !== true) {
    result = false;
  }
}
try {
  decodeURIComponent("%1");
  result = false;
} catch (e) {
  if (e instanceof URIError !== true) {
    result = false;
  }
}
try {
  decodeURIComponent("% ");
  result = false;
} catch (e) {
  if (e instanceof URIError !== true) {
    result = false;
  }
}
if (result !== true) {}