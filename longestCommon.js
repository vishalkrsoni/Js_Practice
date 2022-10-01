// function hasCycle(head) {
//   if (!head || !head.next) return false
//   let slow = head, fast = head.next;
//   while (fast && fast.next) {
//     if (slow === fast) return slow;
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   return false;
// }

const lcs = (str1, str2) => {
  let n=Math.min(str1.length,str2.length)
  console.log(n)
  for(let i=0;i<n;i++)
  {
    if(str2[i])
  }
}

let str1='abchgdjlk'
let str2='agdfl'
console.log(lcs(str1,str2))