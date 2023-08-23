# useState Hooks

## When to use State Hooks
- When you want the data to change, the interface is automatically updated (re-render data).

## Syntax

``` jsx
import { useState } from 'react'

function Component(){
    const [state, setState] = useState(initState)

    ...
}
```

## Notes
- Component được re-render sau khi `setState`
- Initial state chỉ dùng cho lần đầu
- Set state với callback?
- Initial state với callback?
- Set state là thay thế state bằng giá trị mới