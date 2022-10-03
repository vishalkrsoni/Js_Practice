// const reverseInGroups = (arr, n, k) => {
//   let size = Math.ceil(n / k)
//   let groups=[]
//   for (let i = 0; i < size; i++) {
//     groups.push(arr.splice(0, k).reverse())
//   }
//   return groups.flat()
// }

function reverseInGroups(arr, n, k) {
  let left, right, last = n - n % k;
  if (k < n) {
    for (let i = 0; i < last; i++) {
      if (i == 0 || i % k == 0) {
        left = i; right = i + k - 1;
        while (left < right) {
          [arr[left], arr[right]] = [arr[right], arr[left]];
          left++; right--;
        }
      }
    }
    left = last; right = n - 1;
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      right--; left++;
    }
    return arr
  }
  return arr.reverse()
}

let arr = [1, 2, 3, 4, 5], arr2 = [5, 6, 8, 9]
console.log(reverseInGroups(arr, 5, 3))
console.log(reverseInGroups(arr2, 4, 2))
