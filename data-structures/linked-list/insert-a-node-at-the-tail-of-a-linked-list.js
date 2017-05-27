
/*
  Node is defined as
  var Node = function(data) {
      this.data = data;
      this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data) {
    let addNode = new Node(data);
    let pointer = head;
    if(head === null){
        head = addNode;
        return head;
    }else if(head.next === null){
        head.next = addNode;
        return head;
    }

    while(pointer.next.next !== null){
        pointer = pointer.next;
    }
    pointer.next.next = addNode;
    return head
}
