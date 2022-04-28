function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data){
    let count = 0
    let prev = null
    let firstIndex = head
    if (head == null) {
      return new Node(data)
    }
    while (head != null) {
        if (count == index) {
          if (count == 0) {
            let node = new Node(data)
            node.next = head
            return node
          } else {
            let node = new Node(data)
            node.next = head
            prev.next = node
          }
          break
        } else {
          count += 1
          prev = head
          head = head.next
        }
    }
  if (count == index && head == null) {
    let node = new Node(data)
    prev.next = node
  } else if (count < index && head == null) {
    throw 'error'
  }
    return firstIndex
  }
