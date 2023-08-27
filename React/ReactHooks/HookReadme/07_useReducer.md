## Reducer hook
###

- Sử dụng khi state nó phức tạp

### Syntax
``` jsx

import { useReducer } from 'react'

function Component(){
    const [state, dispatch] = useReducer(reducer, initialState);
    ...
}

```

### Notes
1. Initial state: 0
2. Action: Up (state + 1) | Down (state - 1)
3. Reducer
4. Dispatch