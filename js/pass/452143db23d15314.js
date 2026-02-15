const nf = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0
});
const nf2 = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
  signDisplay: "always"
});
const nf3 = new Intl.NumberFormat("pt-PT");
const string1 = "987654321987654321";
const string2 = "987654321987654322";