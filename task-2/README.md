# Task 2

The output of the function would be `-1`. Let's go step-by-step

```
fn(x) {                 // x = 2;
  x++;                  // x = 3;
  (x = x - 3) && ++x;   // x = x - 3 would be zero, 0 == false, therefore ++x would not be executed and x will remain 0
  return --x;           // --x will make return 0-1, i.e. -1. 
                        // Therefore, the output would be -1
}
```
