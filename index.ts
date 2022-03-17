import Stack from "./data-structures/stack";
let s = new Stack<{
  start: number;
  end: number;
}>();

for (let i = 0; i <= 10; i++) {
  s.push({
    start: i,
    end: -i,
  });
}

while (!s.isEmpty) {
  console.log(s.pop());
}
