const styles = ['narrow', 'short', 'long'];
const types = ['language', 'region', 'script', 'currency'];
types.forEach(type => {
  styles.forEach(style => {
    const dn = new Intl.DisplayNames('en-US', {
      style,
      type
    });
    const options = dn.resolvedOptions();
  });
});