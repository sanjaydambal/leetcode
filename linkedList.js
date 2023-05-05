//  creating simple linked list
function Node(data){
    this.data = data;
    this.next = null;
}
let head = null
function Linkedlist(data){
    let tempNode = new Node(data);
    tempNode.next = head;
    head = tempNode;
}

function printList(){
    let temp = head;
    while(temp != null){
        console.log(temp.data,"->");
        temp = temp.next;
    }
}
Linkedlist(23);
Linkedlist(24);
Linkedlist(25);
printList();
