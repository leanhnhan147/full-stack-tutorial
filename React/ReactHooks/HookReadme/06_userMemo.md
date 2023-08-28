## Memo hook
###
- useMemo is a react hook that returns a memorized value

- Avoid unnecessary recalculated 
- Caching a value so that it does not need to be recalculated.
- Improve performance

### Syntax
``` jsx

import { useMemo } from 'react'

function Component(){
    const value = useMemo(calculateValue, [])

    const value = useMemo(calculateValue, [dependencies])
    ...
}

```