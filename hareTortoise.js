function hasCycle(head) {
  if (!head || !head.next) return false
  let slow = head, fast = head.next;
  while (fast && fast.next) {
    if (slow === fast) return slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
}
