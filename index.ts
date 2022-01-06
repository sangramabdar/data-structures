import Queue from "./data-structures/quene";

class Student {
  name: string = "sam";
  age: number = 22;
}

let q = new Queue<Student>();

for (let i = 0; i < 10; i++) {
  q.enque(new Student());
}
