const fallbacks = ['code', 'none'];
const types = ['language', 'region', 'script', 'currency'];
types.forEach(type => {
  fallbacks.forEach(fallback => {
    const dn = new Intl.DisplayNames('en-US', {
      fallback,
      type
    });
    const options = dn.resolvedOptions();
  });
});