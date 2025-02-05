const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.firstItem = null;
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

module.exports = {
  Queue
};
