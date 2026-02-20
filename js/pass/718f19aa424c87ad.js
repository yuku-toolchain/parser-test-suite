const tooBigForNumber = BigInt(Number.MAX_SAFE_INTEGER) + 2n;
const intToBigInt = (key, val, {source}) => typeof val === 'number' && val % 1 === 0 ? BigInt(source) : val;
const roundTripped = JSON.parse(String(tooBigForNumber), intToBigInt);
const bigIntToRawJSON = (key, val) => typeof val === 'bigint' ? JSON.rawJSON(val) : val;
const embedded = JSON.stringify({
  tooBigForNumber
}, bigIntToRawJSON);