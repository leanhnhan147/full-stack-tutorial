## State hook
### When to use State Hooks
- When you want the data to change, the interface is automatically updated (re-render data).

### Syntax

``` jsx

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