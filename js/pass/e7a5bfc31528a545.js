let messageStringified = false;
const message = {
  toString() {
    messageStringified = true;
    return '';
  }
};
const error = {};
const suppressed = {};
const e = new SuppressedError(error, suppressed, message);
const keys = Object.getOwnPropertyNames(e);
const messageIndex = keys.indexOf("message");
const errorIndex = keys.indexOf("error");
const suppressedIndex = keys.indexOf("suppressed");