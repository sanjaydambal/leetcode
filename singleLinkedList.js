//
// null <- 8 <- -> 5 <- -> 6 -> null

class SingleLinkNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    add(node) {
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
    printList() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
    deleteHead() {
        if (this.head == null) {
            console.log("List is empty");
        } else {
            let node = this.head;
            this.head = this.head.next;
            if (this.head == null) {
                this.tail = null;
            }
        }
    }
    deleteTail() {
        if (this.tail == null) {
            console.log("List is empty");
        } else {
            let temp = this.head;
            let prev = null;
            while (temp.next != null) {
                prev = temp;
                temp = temp.next;
            }
            if (prev == null) {
                this.head = null;
                this.tail = null;
            } else {
                prev.next = null;
                this.tail = prev;
            }
            return temp;
        }
    }
}
//  6->null
let singlyList = new SinglyLinkedList();
// console.log(singlyList);
let node1 = new SingleLinkNode(6);
singlyList.add(node1);
let node2 = new SingleLinkNode(8);
singlyList.add(node2);
let node3 = new SingleLinkNode(10);
singlyList.add(node3);
let node4 = new SingleLinkNode(12);
singlyList.add(node4);
//  console.log(singlyList);

singlyList.deleteHead();
singlyList.deleteTail();
singlyList.deleteTail();
singlyList.deleteTail();
singlyList.deleteTail();
singlyList.printList();








// let emp = {name:"sanjay"};
// console.log(emp);

// function Emp1(name){
//     this.name = name;
// }

// let Emp2 = new Emp1("Lakshmikant");
// console.log(Emp2);

// let obj = new Object();
// obj.name = "Ganesh";
// console.log(obj);
