const nf = Intl.NumberFormat([], {
  style: "currency",
  currency: "USD"
});
const max = nf.resolvedOptions().maximumFractionDigits;
const min = nf.resolvedOptions().minimumFractionDigits;