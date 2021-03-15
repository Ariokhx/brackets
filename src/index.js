module.exports = function check(str, bracketsConfig) {
  while (true) {
    let strL = str.length;
    bracketsConfig.forEach(Pair => {
      str = str.replace(Pair[0] + Pair[1], '')
    });
    if (strL == str.length) {
        break;
    }
  }
    return str.length == 0;
}