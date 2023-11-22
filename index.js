function solve(direction, x, y, width, height) {
  if (direction === 'U') {
    y--;
  } else if (direction === 'D') {
    y++;
  } else if (direction === 'L') {
    x--;
  } else if (direction === 'R') {
    x++;
  }
  return [x,y]

}
module.exports = solve;

console.log(solve("U", 5, 5, 10, 10)); // Test moving up
console.log(solve("D", 5, 5, 10, 10)); // Test moving down
console.log(solve("L", 5, 5, 10, 10)); // Test moving left
console.log(solve("R", 5, 5, 10, 10)); // Test moving right
