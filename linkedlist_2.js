function ListNode(val) {
    this.val = (val === undefined ? 0 : val);
    this.next = null;
}


let head = null; // 
let node1 = new ListNode(10);

head = node1; // 10 -> null

let node2 = new ListNode(20);

node2.next = head; // 20 -> 10(head) -> null

head = node2; // (node2)20(head) -> (node1)10 -> null

let node3 = new ListNode(30);


node3.next = head; // // (node3)30 -> (node2)20(head) -> (node1)10 -> null

head = node3; // (node3)30(head) -> (node2)20 -> (node1)10 -> null

let node4 = new ListNode(40);

node4.next = head;// (node4)40 -> (node3)30(head) -> (node2)20 -> (node1)10 -> null

head = node4;// (node4)40(head) -> (node3)30 -> (node2)20 -> (node1)10 -> null


let temp = head; // (temp)(node4)40(head) -> (node3)30 -> (node2)20 -> (node1)10 -> null

head = head.next; // (temp)(node4)40;  (node3)30(head) -> (node2)20 -> (node1)10 -> null

// (node3)30(head) -> (node2)20 -> (node1)10 -> null (delete last)

let move = head; // (node3)30(head)(move) -> (node2)20(prev) -> (node1)10(move) -> null (delete last)

let prev;
while (move.next != null) {
    prev = move;
    move = move.next;
} 
prev.next = null; // (node3)30(head)(move) -> (node2)20(prev)-> null ; (node1)10(move) -> null (delete last)