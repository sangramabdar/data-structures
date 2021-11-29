function checkSubstringMaching(value: string, substring: string) {
  for (let i = 0; i < value.length; i++) {
    let tempIndex = i;
    for (let j = 0; j < substring.length; j++) {
      if (value.charAt(tempIndex) != substring.charAt(j)) break;

      if (j == substring.length - 1) return true;

      tempIndex++;
    }
  }

  return false;
}

console.log(checkSubstringMaching("sasafddfs1amdfdf", "1am"));
