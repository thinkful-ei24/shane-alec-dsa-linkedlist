class _Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAt(item, ptr) {
    //if list is empty add as first item
    if(this.head === null) {
      this.insertFirst(item);
    } else {
      let currNode = this.head;
      let prevNode = this.head;
      this.tail = currNode
      //create variable to keep track of how many in list
      let count = 0
      while(count !== ptr) {
        prevNode = currNode;
        currNode = currNode.next;
        count++;
      }
      prevNode.next = new _Node(item, this.tail, currNode);
    }
  }

  insertFirst(item) {
    const newNode = new _Node(item, null, this.head);
    this.head = newNode;
    this.tail = newNode;
  }

  insertBefore(item, item2) {
    //check to see if empty
    if(this.head === null) {
      //if it is, insert new item as only item
      this.insertFirst(item);
    } else {
      let currNode = this.head;
      let prevNode = this.head;

      while ((currNode !== null) && (currNode.value !== item2)) {
        //save prev & current node
        prevNode = currNode;
        //new
        currNode = currNode.next;
      }
      if(currNode === null) {
        return
      }
      prevNode.next = new _Node(item, prevNode, currNode);
      this.tail = prevNode.next;
    }
  }

  insert(item) {
    //check to see if empty
    if(this.head === null) {
      //if it is, insert new item as only item
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      //move through list until end
      while(tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      //set the end node ptr to the new node
      tempNode.next = new _Node(item, this.tail, null);
      this.tail = tempNode.next;
    }
  }



  insertAfter(item, ptr) {
    //check to see if empty
    if(this.head === null) {
      //if it is, insert new item as only item
      this.insertFirst(item);
    } else if(this.tail.value === ptr) {
      const newNode = new _Node(item, this.tail, null);
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let currNode = this.tail;
      while ((currNode !== null) && (currNode.value !== ptr)) {
        //save current & next node
        currNode = currNode.next;
        nextNode = currNode.next
      }
      currNode.prev;
    }
  }

  find(item) {
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if(!this.head){
      return null;
    }
    //check for item
    while(currNode.value !== item){
      //return null if end of the list and item not on list
      if(currNode.next === null) {
        return null;
      } else {
        //keep looking
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }

  remove(item) {
    //if the list is empty
    if(!this.head) {
      return null;
    }
    //if node to be removed is head, make the next node head
    if(this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous ptr
    let prevNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //save prev node
      prevNode = currNode;
      currNode = currNode.next;
    }

    if(currNode === null) {
      console.log('item not found');
      return
    }
    prevNode.next = currNode.next;
  }
}

function main() {
  const DLL = new LinkedList();

  DLL.insertFirst('Apollo');
  DLL.insert('Helo');
  DLL.insert('Husker');
  DLL.insert('Boomer');
  DLL.insert('Starbuck');
  console.log(DLL);
  console.log(DLL.find('Boomer'))
  // DLL.insert('Tauhida');

  // DLL.remove('squirrel');

  // DLL.insertBefore('Athena', 'Boomer');
  // console.log(DLL.find('Husker'));

  // DLL.insertAfter('Hotdog', 'Helo');
  // console.log(DLL.find('Boomer'));

}

// main();

function reverse(list) {
  let currNode = list.head;
  let previous = list.prev;
  let next = currNode.next;

  while (currNode) {
    next = currNode.next;
    previous = currNode.prev;
    currNode.next = previous;
    currNode.prev = next;
    currNode = next;
  }
  return previous;
}
