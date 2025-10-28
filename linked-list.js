export { LinkedList }

class LinkedList {
  head = undefined;
  length = 0;
  
  append(value) {
    const newNode = new Node(value);
    this.length++;
    if (this.length === 1) {this.head = newNode}
    if (this.length > 1) {
      let penultimateNode = this.at(this.length - 2)
      penultimateNode.nextNode = newNode;
    }
  }

  prepend(value) {    
    const oldHead = this.head;
    const newHead = new Node(value, oldHead);
    this.head = newHead;    
    this.length++;
  }

  // size() {
  //   return this.length;
    
  //   // if (this.length === 0) {return 0} // for empty linked lists
  //   // let currentNode = this.head; // start at head node
  //   // let i = 1;
  //   // while (currentNode.nextNode != null) {
  //   //   i++;
  //   //   currentNode = currentNode.nextNode;
  //   // }
  //   // return i;
  // }

  // head() {
  //   if (this.length > 0) {return this.head}
  //   else {throw new Error("LinkedList has no elements");
  //   }
  // }

  // tail() {
  //   if (this.length < 1) {throw new Error("LinkedList has no elements")};
  //   let currentNode = this.head; // start at head node
  //   let i = 1;
  //   while (currentNode.nextNode != null) {
  //     i++;
  //     currentNode = currentNode.nextNode;
  //   }
  //   return currentNode;
  // }

  at(index) {
    if (this.length < 1) {throw new Error("LinkedList has no elements")};
    if (index === 0) {return this.head}
    let currentNode = this.head;
    let i = 0;
    while (i < index) {
      currentNode = currentNode.nextNode;
      i++;
    }
    return currentNode;
  }

  // pop() {
  //   if (this.length === 0) {throw new Error("LinkedList has no elements")};
  //   let penultimateNode = this.at(this.length - 2);
  //   penultimateNode.nextNode = 0;
  //   let lastNode = this.at(this.length - 1);
  //   lastNode.value = null;
  // }

  // contains(value) {
  //   if (this.length === 0) {throw new Error("LinkedList has no elements")};
  //   let currentNode = this.head; // start at head node
  //   let i = 1;
  //   while (currentNode.nextNode != null) {
  //     if (currentNode.value === value) {return true}
  //     i++;
  //     currentNode = currentNode.nextNode;
  //   }
  //   if (currentNode.value === value) {return true};
  //   return false;
  // }

  // find(value) {
  //   if (this.length === 0) {throw new Error("LinkedList has no elements")};
  //   let currentNode = this.head; // start at head node
  //   let i = 1;
  //   while (currentNode.nextNode != null) {
  //     if (currentNode.value === value) {
  //       return i;
  //     }
  //     i++;
  //     currentNode = currentNode.nextNode;
  //   }
  //   if (currentNode.value === value) {return i};
  //   return false;
  // }

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
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}