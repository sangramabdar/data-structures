import Stack from "../../data-structures/stack";

function reverseString(s: string) {
  return reverseStringStack(s);
}

function reverserStringRecursion(s: string, start: number, end: number) {
  //base condition
  if (start >= end) {
    if (start === end) {
      return s[start];
    } else {
      return "";
    }
  }
  return s[end] + reverserStringRecursion(s, start + 1, end - 1) + s[start];
}

function reverseStringStack(s: string) {
  const stack = new Stack<{ start: number; end: number }>();
  let start = 0;
  let end = s.length - 1;
  stack.push({ start, end });
  let result = "";

  while (true) {
    start++;
    end--;
    if (start > end) break;
    stack.push({ start, end });
  }

  while (!stack.isEmpty()) {
    const n = stack.pop();
    if (n?.start == n?.end) {
      result = s[n!!.start];
      continue;
    }
    result = s[n!!.end] + result + s[n!!.start];
  }
  console.log(result);
}

export { reverseStringStack, reverseString };
