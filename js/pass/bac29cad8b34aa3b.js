const {Duration} = Temporal;
const durationString = 'PT0.084000159S';
const duration = Duration.from(durationString);
const precisionString = duration.toString({
  smallestUnit: 'milliseconds'
});