const re = /(?<a>a).|(?<x>x)/d;
const result = re.exec("ab").indices;