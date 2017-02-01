const LinkedList = function (initialValue) {
  this.head = null;
  this.tail = null;

  if (initialValue) {
    this.addToTail(initialValue);
  }
};

LinkedList.prototype.addToTail = function (node) {
  const newNode = this.makeNode(node);
  if (!this.head) {
    this.head = newNode;
  }

  if (this.tail) {
    this.tail.next = newNode;
  }

  this.tail = newNode;
};

LinkedList.prototype.removeHead = function () {
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
  }
};

LinkedList.prototype.contains = function (value) {
  let node = this.head;

  if (node.value === value) return true;

  while (node) {
    if (node.value === value) return true;
    node = node.next;
  }

  return false;
};

LinkedList.prototype.makeNode = function (value) {
  const node = { value, next: null };
  return node;
};
