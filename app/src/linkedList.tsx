import Node from "./node";

export default class LinkedList<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
  
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(data: T): void {
      const newNode = new Node<T>(data);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        if (this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
        }
      }
    }
  
    prepend(data: T): void {
      const newNode = new Node<T>(data);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        if (this.head) {
          newNode.next = this.head;
          this.head = newNode;
        }
      }
    }
  
    delete(data: T): void {
      if (!this.head) {
        return;
      }
  
      if (this.head.data === data) {
        this.head = this.head.next;
        if (this.head === null) {
          this.tail = null;
        }
        return;
      }
  
      let currentNode = this.head;
      while (currentNode.next) {
        if (currentNode.next.data === data) {
          currentNode.next = currentNode.next.next;
          if (currentNode.next === null) {
            this.tail = currentNode;
          }
          return;
        }
        currentNode = currentNode.next;
      }
    }
  
    toArray(): T[] {
      const result: T[] = [];
      let currentNode = this.head;
      while (currentNode) {
        result.push(currentNode.data);
        currentNode = currentNode.next;
      }
      return result;
    }
  
    isEmpty(): boolean {
      return this.head === null;
    }
  
    print(): void {
      const listArray = this.toArray();
      console.log(listArray.join(" -> "));
    }
  }
    

