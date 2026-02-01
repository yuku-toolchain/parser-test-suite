var numberFormatter = new Intl.NumberFormat();
var percentFormatter = new Intl.NumberFormat(undefined, {
  style: 'percent'
});
var formattedTwenty = numberFormatter.format(20);
var formattedTwentyPercent = percentFormatter.format(0.20);