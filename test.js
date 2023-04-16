class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.currentItem = null;
  }

  getUnderlyingList() {
    function show(item) {
      if (item.next === null) return item;
      return { ...show(item.next), ...item };
    }
    return show(this.firstItem);
  }

  enqueue(value) {
    function add(item, newItem) {
      if (item.next === null) {
        item.next = newItem;
        return;
      }
      add(item.next, newItem);
    }
    const newItem = new ListNode(value);
    if (!this.firstItem) {
      this.firstItem = newItem;
    } else {
      add(this.firstItem, newItem)
    }
  }

  dequeue() {
    const deletedValue = this.firstItem ? this.firstItem.value : null;
    this.firstItem = this.firstItem ? this.firstItem.next : null;
    return deletedValue;
  }
}

const queue = new Queue();

queue.enqueue(8)
queue.enqueue(15)
queue.enqueue(46)
console.log(queue.getUnderlyingList())
queue.dequeue()
console.log(queue.getUnderlyingList())
