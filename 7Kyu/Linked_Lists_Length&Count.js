function Node(data) {
  this.data = data;
  this.next = null;
}

function length(thing) {
    let count = 0
    while (thing != null) {
        count += 1
        thing = thing.next
    }
    return count
}

function count(thing, data) {
      let count = 0
      while (thing != null) {
          if (thing.data == data) {
            count += 1
          }
        thing = thing.next
      }
    return count
  }
