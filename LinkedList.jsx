class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = new null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
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

}


function display(sll) {

}

function size(sll) {

}