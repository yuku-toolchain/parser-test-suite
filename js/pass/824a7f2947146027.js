const poisoned = {
  valueOf() {}
};
if (typeof Float16Array !== 'undefined') {}