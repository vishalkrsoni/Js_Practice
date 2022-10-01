class Node {
  constructor(elment, next = null, prev = null) {
    this.element = elment;
    this.next = next;
  }
}
class CircularLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  //Get element at specific index
  getElementAt = (index) => {
    if (index >= 0 && index <= this.length) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }
  //Add new node
  append = (element) => {
    const node = new Node(element);
    let current;
    if (this.head === null) //If head is empty--make new node head
this.head = node;
    else {
      current = this.getElementAt(this.length - 1);
      current.next = node;
    }
    node.next = this.head;
    this.length++;
  }

  //Insert at given position
  insert = (element, index) => {
    if (index >= 0 && index <= this.length) {
      const node = new Node(element);
      let current = this.head;

      //Insert at head
      if (index === 0) {
        if (this.head === null) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          current = this.getElementAt(this.length);
          this.head = node;
          current.next = this.head;
        }
      } else {
        //Insert at given index (middle or end)
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }

      this.length++;
      return true;
    }
    return false;
  }

  //Remove at any position
  removeAt = (index) => {
    if (index >= 0 && index < this.length) {
      let current = this.head;
      //Remove from head
      if (index === 0) {
        if (this.length === 1) {
          this.head = undefined;
        } else {
          const removed = this.head;
          current = this.getElementAt(this.length - 1);
          this.head = this.head.next;
          current.next = this.head;
          current = removed;
        }
      } else {
        //Remove at given index (middle or end)
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    }
    return undefined;
  }

  //Get the indexOf item 
  indexOf = (elm) => {
    let current = this.head,
      index = -1;
    //If element found then return its position
    while (current) {
      if (elm === current.element) return ++index;
      index++;
      current = current.next;
    }
    //Else return -1
    return -1;
  };

  //Find the item in the list
  isPresent = (elm) => {
    return this.indexOf(elm) !== -1;
  };

  //Get the head
  getHead = () => {
    return this.head;
  }

  //Delete an item from the list
  delete = (elm) => {
    return this.removeAt(this.indexOf(elm));
  };

  //Delete the first item from the list
  deleteHead = () => {
    this.removeAt(0);
  }

  //Print item of the string
  toString = () => {
    let current = this.head,
      string = '';

    //Keep track of the head
    const temp = this.head.element;

    while (current) {
      //If head is the next element then break
      if (temp === current.next.element) {
        string += current.element + (current.next ? '\n' : '');
        break;
      }

      string += current.element + (current.next ? '\n' : '');
      current = current.next;
    }

    return string;
  };

  //Convert list to array
  toArray = () => {
    let arr = [],
      current = this.head;
    //Keep track of head
    const temp = this.head.element
    while (current) {
      //Break if first element detected
      if (temp === current.next.element) {
        arr.push(current.element);
        break;
      }
      arr.push(current.element);
      current = current.next;
    }
    return arr;
  };

  //Check if list is empty
  isEmpty = () => this.length === 0;
  //Get the size of the list
  size = () => this.length;
}

let circularLL = new CircularLinkedList();
circularLL.append(5);
circularLL.append(6);
circularLL.append(7);
circularLL.append(8);
circularLL.append(9);
circularLL.append(4);


console.log(circularLL.toArray())
