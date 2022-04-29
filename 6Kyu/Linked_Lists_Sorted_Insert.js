function Node(data) {
  this.data = data;
  this.next = null;
}

function sortedInsert(head, data) {
    if (head == null) {
        return new Node(data)
    }
    let prevnode = null
    let firstIndex = head
    while (head != null) {
        if (head.data >= data) {
            let node = new Node(data)
            node.next = head
            if (prevnode == null) {
              return node
            }
            if (prevnode != null) {
                prevnode.next = node
            }
            return firstIndex
        } else {
            prevnode = head
            head = head.next
        }
    }
    let node = new Node(data)
    prevnode.next = node
    return firstIndex
}
