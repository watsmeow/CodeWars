function insertSort(head) {
  let newhead = null
  while (head != null) {
    newhead = sortedInsert(newhead, head.data)
    head = head.next
  }
  return newhead
}
