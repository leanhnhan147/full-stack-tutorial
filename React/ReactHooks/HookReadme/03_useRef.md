## Ref hook
###
- Lưu các giá trị qua một tham chiếu bên ngoài
- Store reference a value that’s not needed for rendering

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
- These is a property (current)
- The return object will persist for the full lifetime of the component