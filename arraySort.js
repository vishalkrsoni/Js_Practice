let arr = [2, 5, 44, 7, 22, 4, 11, 6]
let arr1 = ['a', 'f', 'h', 'e', 'd', 'g', 'c', 'b']

// Using In-built Methods

// Integer
const ascSort = arr => (arr.sort((a, b) => a - b))
console.log('Num ascending: ', ascSort(arr))

const descSort = arr => (arr.sort((a, b) => a - b)).reverse()
console.log('Num descending: ', descSort(arr))

const mySort = arr => (arr.sort((a, b) => b - a))
console.log('Num descending: ', mySort(arr))

// String based
console.log('String ascending: ', arr1.sort()) // Ascending
console.log('String descending: ', arr1.sort().reverse()) // descending 

// Own method
// Integer
const selectionSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++)
      if (arr[j] < arr[min]) min = j;
    if (min != i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr
}

console.log('Ascending selection Sort: ', selectionSort(arr))
