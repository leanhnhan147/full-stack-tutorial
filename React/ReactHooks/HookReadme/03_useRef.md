## Ref hook
###
- Store a reference to the DOM element

### Syntax
``` jsx

import { useRef } from 'react'

function Component(){
    const ref = useRef(initialValue)
    ...
}

```

### Notes
- Return a mutable object
- These is a property called current
- The return object will persist for the full lifetime of the component