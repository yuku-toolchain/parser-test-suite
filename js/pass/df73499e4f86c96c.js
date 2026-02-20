const styles = [undefined, 'narrow', 'short', 'long'];
const types = ['language', 'region', 'script', 'currency'];
types.forEach(type => {
  styles.forEach(style => {
    var obj = new Intl.DisplayNames('en', {
      style,
      type
    });
  });
});