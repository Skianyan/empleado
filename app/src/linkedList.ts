import Node from "./node";

export default class LinkedList<T extends Persona> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
  
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(data:T){
      let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
      }
  
    printList() {
      // let temp = this.head;
      // let values = 'O -> ';
  
      // do{
      //     values += temp.data + ' <-> ';
      //     temp = temp.next;
      // }while(temp !== this.head);
      // console.log(values + 'O')

      let temp = this.head
      let objData:Persona = temp!.data
      let values = '';

      do{
        values += JSON.stringify(objData)+ " -> ";
        temp = temp!.next
        if (temp !== null){
        objData = temp!.data
        }
      }while(temp !== null)
        console.log(values + 'null');


        // values += JSON.stringify(objData)+ " -> ";
        // temp = temp!.next
        // objData = temp!.data
        // values += JSON.stringify(objData)+ " -> ";
        // console.log(values + 'null')
        // if (temp!.next! == null)
        //   console.log("es nulo xd")
        // else
        //   console.log("no funco")
    
    }
  }
    

