module.exports = function reverse (n) {
  let temp = `${Math.abs(n)}`.split("").reverse();
  if(`${temp}`[0] === "0") {
      temp.shift();
  }
  return temp.join('')
}
