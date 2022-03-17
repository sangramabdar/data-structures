import Stack from "../../data-structures/stack";

function reverseString(s: string) {
  return reverseStringStack(s, 0, s.length - 1);
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

function reverseStringStack(s: string, start: number, end: number) {
  const stack = new Stack<{ start: number; end: number }>();
  stack.push({ start, end });
  let result = "";
  while (!stack.isEmpty()) {
    start++;
    end--;
    if (start < end) {
      stack.push({ start, end });
      continue;
    }
    const n = stack.pop();
    console.log(n);
    if (n?.start == n?.end) {
      result = s[n!!.start];
      continue;
    }
    result = s[n!!.end] + result + s[n!!.start];
  }
  console.log(result);
}

export default reverseString;
