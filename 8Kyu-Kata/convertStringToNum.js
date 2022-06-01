// 8 kyu Convert a String to a Number!
// We need a function that can transform a string into a number. What ways of achieving this do you know?
// My solution:
var stringToNumber = function(str){
    return str * 1;
  }
// OTHER Solutions:
const ways = [
    s => +s,
    s => s++, // why does it work?
    s => s--,
    s => ++s - 1,
    s => --s + 1,
    s => s * 1,
    s => s - 0,
    s => s / 1,
    s => s - '',
    s => s ** 1,
    s => s % Infinity,
    s => ~~s,
    s => s & -1,
    s => s | 0,
    s => s ^ 0,
    s => s << 0,
    s => s >> 0,
    s => s | s,
    s => s & s,
    s => ~s ^ -1,
    s => ~s ^ ~0, // ~0 = -1
    s => ~(s ^ -1),
    s => s * !!s,
    s => -1 * (~s + 1) || 0, // -1 * 0 = -0
    s => -(~(s >>> 0) + 1) || 0,
    Number,
    parseInt,
    parseFloat,
    s => Number(s),
    s => parseInt(s),
    s => parseFloat(s),
    s => Math.floor(s),
    s => Math.round(s),
    s => Math.ceil(s),
    s => Math.min(s),
    s => Math.max(s),
    Math.floor,
    Math.round,
    Math.ceil,
    Math.min,
    Math.max,
    s => eval(`+ ${s}`), // a space is needed
    s => eval('+ ' + s), // for cases like eval(+ +12345)
    s => [...s]
      .slice(+(s[0] == '-' || s[0] == '+')) // remove the sign, if present
      .reduce((acc,x) => +x + acc * 10)
      * (s[0] == '-' ? -1 : 1),
    s => [...s]
      .slice(+(s[0] == '+')) //remove +, if present
      .reverse()
      .reduce((acc,x,i) => x == '-' ? -acc : acc += x * 10 ** i, 0),
    s => ways[~~(Math.random() * ways.length)](s)
  ];