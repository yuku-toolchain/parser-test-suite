var vals = [18446744073709551618n, 9223372036854775810n, 2n, 0n, -2n, -9223372036854775810n, -18446744073709551618n];
var typedArray = new BigUint64Array(vals.length);
typedArray.set(vals);