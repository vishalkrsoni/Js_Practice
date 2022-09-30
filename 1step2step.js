let cache = new Array(46).fill(0)
const climbStairs = (n) => {
  if (n== 1 || n==0) return 1;
  if(cache[n]!=0) return cache[n];
  else cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return cache[n];
};
// const cache = {
//   '0': 1,
//   '1': 1,
// }
// const climbStairs = (n) => {
//   if (n <= 1) return cache[n];
//   for (let i = 2; i <= n; i++)
//     cache[i] = cache[i - 1] + cache[i - 2];
//   return cache[n];
// };
console.log(climbStairs(1))
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))
console.log(climbStairs(5))
console.log(climbStairs(6))
console.log(climbStairs(7))
console.log(climbStairs(8))
console.log(climbStairs(9))
console.log(climbStairs(10))
