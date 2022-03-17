function newPair(i: string, next: string) {
  if (i == "(") {
    if (next == "{" || next == "[" || next == "(") {
      return true;
    }
    return false;
  }
  if (i == "[") {
    if (next == "{" || next == "(" || next == "[") {
      return true;
    }
    return false;
  }
  if (i == "{") {
    if (next == "(" || next == "[" || next == "{") {
      return true;
    }
    return false;
  }
}

function IsOpposite(i: string, next: string) {
  if (i == "(") {
    if (next == ")") {
      return true;
    }
  } else if (i == "[") {
    if (next == "]") {
      return true;
    }
  } else if (i == "{") {
    if (next == "}") {
      return true;
    }
  }
  return false;
}

let c = 0;

function calculateSets(s: string) {
  let start = 0;
  let end = 1;
  while (start < s.length - 1) {
    end = calculateSetsRecursion(s, start, end);
    console.log(end);
    start = end;
    end = end + 1;
  }
}

function calculateSetsRecursion(s: string, start: number, end: number) {
  let value = end;
  if (newPair(s[start], s[end])) {
    value = calculateSetsRecursion(s, start + 1, end + 1);
  }

  if (IsOpposite(s[start], s[value])) {
    //backtrack
    c = c + 1;
    return value + 1;
  }

  return value;
}

calculateSets("{");
