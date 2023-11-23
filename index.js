function solve(direction, x, y, width, height) {
  if (direction === 'U' && y > 0) {
    y--;
  } else if (direction === 'D' && y < height - 1) {
    y++;
  } else if (direction === 'L' && x > 0) {
    x--;
  } else if (direction === 'R' && x < width - 1) {
    x++;
  }
  return [x,y]

}
module.exports = solve;

console.log(solve("U", 5, 5, 10, 10)); // Test moving up
console.log(solve("D", 5, 5, 10, 10)); // Test moving down
console.log(solve("L", 5, 5, 10, 10)); // Test moving left
console.log(solve("R", 5, 5, 10, 10)); // Test moving right
