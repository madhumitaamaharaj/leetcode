const isValid = (s) => {
  const arr = [];
  
  for (let i = 0; i < s.length; i ++) {
    const val = arr[arr.length - 1];
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      arr.push(s[i]);
    } else if (s[i] === ')' && val === '(' && arr.length !== 0) {
      arr.pop();
    } else if (s[i] === ']' && val === '[' && arr.length !== 0) {
      arr.pop();
    } else if (s[i] === '}' && val === '{' && arr.length !== 0) {
      arr.pop();
    } else {
      return false;
    }
  }
  
  return arr.length === 0;
};