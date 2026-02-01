var array = ['a', void 0];
if (array.length !== 3) {}
if (array.hasOwnProperty('0') !== true) {}
if (array.hasOwnProperty('1') !== false) {}
if (array.hasOwnProperty('2') !== true) {}
array.sort();
if (array.length !== 3) {}
if (array.hasOwnProperty('0') !== true) {}
if (array.hasOwnProperty('1') !== true) {}
if (array.hasOwnProperty('2') !== false) {}