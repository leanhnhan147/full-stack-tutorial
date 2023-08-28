## Callback hook
###
- useCallback is a react hook that returns a memorized callback 

###  When to use Callback hook
- re-render often and re-render with same props

### Syntax
``` jsx

import { useCallback } from 'react'

function Component(){
    const callback = useCallback(function, [])

    const callback = useCallback(function, [dependencies])
    ...
}

```