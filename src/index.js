module.exports = function check(str, bracketsConfig) {
  for (let strKey = str.length; strKey >= 0; strKey--) {
    for (let bracketKey = 0; bracketKey < bracketsConfig.length; bracketKey++) {
      if (str[strKey] === bracketsConfig[bracketKey][0]) {
        str = str.replace(bracketsConfig[bracketKey].join(''), '');
      }
    }
  }
  return str == '';
}
