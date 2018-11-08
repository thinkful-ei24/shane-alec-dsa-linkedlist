class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAt(item, ptr) {
    if(this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      let prevNode = this.head;
      while(tempNode.next !== ptr) {
        prevNode = tempNode;
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertBefore(item, item2) {
    //check to see if empty
    if(this.head === null) {
      //if it is, insert new item as only item
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      let currNode = this.head;
      let prevNode = this.head;
      while ((currNode !== null) && (currNode.value !== item2)) {
        //save prev & current node
        prevNode = currNode;
        currNode = currNode.next;
      }
      if(currNode === null) {
        return
      }
      prevNode.next = new _Node(item, currNode);
    }
  }

  insertLast(item) {
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
      tempNode.next = new _Node(item, null);
    }
  }

  insertAfter(item, ptr) {
    //check to see if empty
    if(this.head === null) {
      //if it is, insert new item as only item
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      let currNode = this.head;
      let prevNode = this.head;
      while ((currNode !== null) && (currNode.value !== ptr)) {
        //save prev & current node
        prevNode = currNode;
        currNode = currNode.next;
      }
      //set the end node ptr to the currNode.next node
      tempNode.next = new _Node(item, currNode);
      prevNode.next = tempNode;
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
  const SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  //console.log(SLL);

  //SLL.insertLast('Tauhida');

  //SLL.remove('squirrel');

  SLL.insertBefore('Athena', 'Boomer');
  console.log(SLL.find('Athena'));
  console.log(SLL.find('Apollo'));
  //SLL.insertAfter('Hotdog', 'Helo');
  //console.log(SLL.find('Boomer'));


}

main();