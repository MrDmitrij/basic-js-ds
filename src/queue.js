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
    this.length = 0;
    this.end = null;
  }

  getUnderlyingList() {
    let queue = this.end;
    let list = { value: queue.value, next: null };
    while (queue.next !== null) {
      queue = queue.next;
      list = { value: queue.value, next: list };
    }
    return list;
  }

  enqueue(element) {
    this.length += 1;
    const newNode = new ListNode(element);
    if (this.end === null) {
      this.end = newNode;
    } else {
      newNode.next = this.end;
      this.end = newNode;
    }
  }

  dequeue() {
    this.length -= 1;
    let item = this.end;
    let newStart = item;
    while (item.next !== null) {
      newStart = item;
      item = item.next;
    }
    newStart.next = null;
    return item.value;
  }
}

module.exports = {
  Queue
};
