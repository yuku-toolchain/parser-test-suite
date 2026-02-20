if (new Intl.NumberFormat("en").resolvedOptions().locale === "en") {
  Object.prototype.maximumFractionDigits = 1;
}