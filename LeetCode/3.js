let s = "bcgdbkjlffdhbkfsbxzb"
function lengthOfLongestSubstring(s) {
  let map = new Map();
  let result = [], max = 0
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) map.set(s[i], i);
    else {
    if (max < map.size) max = map.size;

      i = map.get(s[i]);
      result.push([...map.keys()].join(''))
      map.clear();
    }
  }
  result.push([...map.keys()].join(''))
  console.log(result)
  return max;
}
let str = 'aaaaaaa'
console.log(lengthOfLongestSubstring(str))
console.log(lengthOfLongestSubstring(s))