/*
  Insert Node at a given position in a linked list
  head can be NULL
  First element in the linked list is at position 0
  Node is defined as
  var Node = function(data) {
    this.data = data;
    this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.
function insert(head, data, position) {
    if(head!=null){
    let currentNode = head;
    let prevNode=head;
    let currentPosition = 0;
    while(currentPosition !== position){
        prevNode = currentNode;
        currentNode = currentNode.next;
        currentPosition=currentPosition+1;
    }
    let addNode = new Node(data);
    if (position > 0){
        addNode.next= currentNode;
        prevNode.next = addNode;
    } else {
        addNode.next = head;
        //addNode.prev = null;
        head = addNode;
    }
    }else{
        head = new Node(data);
    }
    return head;
}
