// 74.LRU Cache
// Design a data structure that works like a LRU Cache. Here cap denotes the capacity of the cache and Q denotes the number of queries. Query can be of two types:
// PUT x y: sets the value of the key x with value y
// GET x: gets the value of key x if present else returns -1.
// The LRUCache class has two methods get() and put() which are defined as follows.
// get(key): returns the value of the key if it already exists in the cache otherwise returns -1.
// put(key, value): if the key is already present, update its value. If not present, add the key-value pair to the cache. If the cache reaches its capacity it should remove the least recently used item before inserting the new item.
// In the constructor of the class the capacity of the cache should be initialized.

class LRUCache {
  constructor(cap) {
    this.cap = cap;
    this.cache = new Map();
    this.dummyHead = { prev: null, next: null };
    this.dummyTail = { prev: null, next: null };
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
    this.size = 0;
  }

  addNode(node) {
    let nextNode = this.dummyHead.next;
    this.dummyHead.next = node;
    node.prev = this.dummyHead;
    node.next = nextNode;
    nextNode.prev = node;
  }

  removeNode(node) {
    let prevNode = node.prev;
    let nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

  /**
   * @param {number} key
   * @returns {number}
   */
  get(key) {
    if (this.cache.has(key)) {
      let node = this.cache.get(key);
      this.removeNode(node);
      this.addNode(node);
      return node.value;
    } else {
      return -1;
    }
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.cache.has(key)) {
      let node = this.cache.get(key);
      node.value = value;
      this.removeNode(node);
      this.addNode(node);
    } else {
      if (this.size === this.cap) {
        let lruNode = this.dummyTail.prev;
        this.removeNode(lruNode);
        this.cache.delete(lruNode.key);
        this.size--;
      }

      let newNode = { key: key, value: value, prev: null, next: null };
      this.addNode(newNode);
      this.cache.set(key, newNode);
      this.size++;
    }
  }
}
