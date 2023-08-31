## State hook

### When to use State Hooks

- When you want the data to change, the interface is automatically updated (re-render data).

### Syntax

```jsx

import { useState } from 'react'

function Component(){
    const [state, setState] = useState(initialState)

    ...
}

```

### Notes

- Initial state is only used for the first time
- `setState` is to replace state with new value
- `setState` as callback
- Component is re-rendered after `setState`

### Issue

```jsx
import React, { useState } from "react";

const DoubleCount = () => {
  const [count, setCount] = useState(0);

  const handleDoubleNumber = () => {
    setCount(count + 1); // count = 0 => count + 1 = 0 + 1 = 1
    setCount(count + 1); // count = 0 => count + 1 = 0 + 1 = 1

    // Fix error handling Double Counter
    // Should use Callback
    setCount((count) => count + 1); // count = 0 => count + 1 = 0 + 1 = 1
    setCount((count) => count + 1); // count = 1 => count + 1 = 1 + 1 = 2
  };

  return (
    <div>
      <button onClick={handleDoubleNumber}>Double Counter</button>
      <span className="count">{count}</span>
    </div>
  );
};

export default DoubleCount;
```
