const nf = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});
const nf2 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  signDisplay: "always"
});
const nf3 = new Intl.NumberFormat("en-US");
const string1 = "987654321987654321";
const string2 = "987654321987654322";