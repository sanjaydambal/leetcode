// // // array 
// // const arr = [1,2,4,8,9];
// // for(let i=0;i<arr.length;i++){
// //     console.log(arr[i]);
// // }

// // const name1 = "sanjay";
// // for(let i=0;i<name1.length;i++){
// //     console.log(name1[i]);
// // }
// // linked list

// // var head; // head of the list

// //  Linked list Node*/
// // 	 Node
// // 	{
	
// // 		// Constructor to create a new node
// // 		// Next is by default initialized
// // 		// as null
// // 		constructor(val) {
// // 			this.data = val;
// // 			this.next = null;
// // 		}
// // 	}

// function Node(val){
//     this.data = val;
//     this.next = null;
// }
// let head = new Node(8);
// head.next = new Node(9);
// head.next.next = new Node(10);
// head.next.next.next = new Node(11);

// function nodePrint(h1) {
//     while (h1!= null) {
//         console.log(h1.data);
//         h1 = h1.next;
//     }

// }
// nodePrint(head);

// function Doubly(val){
     
//     this.data = val;
//     this.next = null;
//     this.previous = null;
   

// }
// let node1 = new Doubly(25);
// let node2 = new Doubly(27);
// let node3 = new Doubly(35);
// let node4 = new Doubly(37);

// node4.next = node3;
// node3.previous = node4;
// node3.next = node2;
// node2.previous = node3;
// node2.next = node1;
// node1.previous = node2;
// let node5 = new Doubly(30);
// let head  = node4;
// let start = node4;
// if(head.data>node5.data && head.next.data<node5.data){
//     node5.next = head.next;

// }
// //  37=>35<=>27<=>25
function Node(value) {
    this.data = value;
    this.next = null;
}

let head = null;
function pushToLinkListFront(data_value) {
    let tempNode = new Node(data_value);
    tempNode.next = head;
    head = tempNode;
}

function prindNodeList() {
    let temp = head;
    while (temp != null) {
        console.log(temp.data, ' -> ')
        temp = temp.next;
    }
}

pushToLinkListFront(3)
prindNodeList(); // 3 -> 
pushToLinkListFront(2)
prindNodeList(); // 3 -> 2 ->
// let node_1 = new pushToLinkListFront(3);
// let node_2 = new pushToLinkListFront(2);
// let node_3 = new pushToLinkListFront(5);
// let node_4 = new PushToLinkListFront(8);
// let node_5 = new PushToLinkListFront(10)

// Advantages of linked list vs Arrays
// * array length needs to be defined intially whereas there is no need to define length of linked list and it can be dynamically increased
// * adding data in between is easier as compared to arrays where it is lengthy process as we need to shift the data from one index to next in a sequential way it will take "n" number of operations.


