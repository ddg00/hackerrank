/*
    Detect a cycle in a Linked List.
    Note that the head may be 'null' if the list is empty.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function hasCycle(head) {
    let pointer = head;
    if (pointer===null){
        return false;
    }
    while(pointer.next !== null){
        if(pointer.next.data < pointer.data){
            return true
        }
        pointer = pointer.next;
    }
    return false;
}
