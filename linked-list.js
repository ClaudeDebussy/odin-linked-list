export { LinkedList }

class LinkedList {
  headNode = undefined;
  length = 0;
  
  append(value) {
    const newNode = new Node(value);
    this.length++;
    if (this.length === 1) {this.headNode = newNode}
    if (this.length > 1) {
      let penultimateNode = this.at(this.length - 2)
      penultimateNode.nextNode = newNode;
    }
  }

  prepend(value) {    
    const oldHead = this.headNode;
    const newHead = new Node(value, oldHead);
    this.headNode = newHead;    
    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    if (this.length > 0) {return this.headNode}
    else {throw new Error("LinkedList has no elements");
    }
  }

  tail() {
    if (this.length < 1) {throw new Error("LinkedList has no elements")};
    let currentNode = this.headNode; // start at head node
    let i = 1;
    while (currentNode.nextNode != null) {
      i++;
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  at(index) {
    if (this.length < 1) {throw new Error("LinkedList has no elements")};
    if (index === 0) {return this.headNode}
    let currentNode = this.headNode;
    let i = 0;
    while (i < index) {
      currentNode = currentNode.nextNode;
      i++;
    }
    return currentNode;
  }

  pop() {
    if (this.length === 0) {throw new Error("LinkedList has no elements")};
    let lastNode = this.at(this.length - 1);
    lastNode.value = null;
    let penultimateNode = this.at(this.length - 2);
    penultimateNode.nextNode = null;    
    this.length--;
  }

  contains(value) {
    if (this.length === 0) {throw new Error("LinkedList has no elements")};
    let currentNode = this.headNode; // start at head node
    let i = 1;
    if (currentNode.value === value) {return true};
    while (currentNode.nextNode != null) {
      if (currentNode.value === value) {return true}
      i++;
      currentNode = currentNode.nextNode;
    }    
    return false;
  }

  find(value) {
    if (this.length === 0) {throw new Error("LinkedList has no elements")};
    let currentNode = this.headNode; // start at head node
    let i = 0;
    while (currentNode.nextNode != null) {
      if (currentNode.value === value) {
        return i;
      }
      i++;
      currentNode = currentNode.nextNode;
    }
    if (currentNode.value === value) {return i};
    return null;
  }

  toString() {
    if (this.length === 0) {throw new Error("LinkedList has no elements")};
    let i = 0;
    let string = '';
    while (i < this.length) {
      // for printing nextNode.value for debugging
      let nextNodeValue;
      if (this.at(i).nextNode) {
        nextNodeValue = this.at(i).nextNode.value
      } else {
        nextNodeValue = "null"
      }
      // end
      string += `(${this.at(i).value}, nextNode: ${nextNodeValue}) -> `;
      i++
    }
    string += 'null';
    return string;
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value)
      return;
    }
    if (index < 0 || index > this.length) {throw new Error("Invalid index.");
    }
    let nodeBefore = this.at(index - 1);
    let nodeAfter = this.at(index);
    let newNode = new Node(value, nodeAfter);
    nodeBefore.nextNode = newNode;
    this.length++;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}