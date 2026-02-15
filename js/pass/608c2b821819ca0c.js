const ids = Intl.supportedValuesOf("timeZone");
const forEachDistinctPair = (array, func) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      func(array[i], array[j]);
    }
  }
};
forEachDistinctPair(ids, (id1, id2) => {
  const instance = new Temporal.ZonedDateTime(0n, id1);
});