for (const notation of ["compact", "engineering", "scientific"]) {
  for (const currency of ["JPY", "KWD", "USD"]) {
    let nf = new Intl.NumberFormat('en-US', {
      style: "currency",
      currency,
      notation
    });
    const resolvedOptions = nf.resolvedOptions();
    const minimumFractionDigits = resolvedOptions.minimumFractionDigits;
    const maximumFractionDigits = resolvedOptions.maximumFractionDigits;
  }
}