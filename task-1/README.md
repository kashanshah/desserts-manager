# Task 1

Following is the solution code for the given task:
```
const fn = (str) => {
  return {
    fn: (newStr) => {
      if(!newStr){
        return str;
      }
      return fn(str + ' ' + newStr)
    },
  }
}
```
