let actual = [];
const options = TemporalHelpers.propertyBagObserver(actual, {
  disambiguation: "compatible",
  offset: "ignore",
  overflow: "reject"
}, "options");