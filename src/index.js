module.exports = function check(str, bracketsConfig) {
  // your solution
  let isPossible = true;
  while (isPossible) {
    isPossible = false;
    for (let config of bracketsConfig) {
      if (str.indexOf(config[0] + config[1]) != -1) {
        str = str.replace(config[0] + config[1], '');
        isPossible = true;
      }
    }
  }

  return (str.length ? false : true);
}
