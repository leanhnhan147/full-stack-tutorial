## React memo (HOC)
###
- Higher Order Component
- Avoid render unnecessary the component 
- React renders the component and memoizes the result. Before the next render, if the new props are the same, React reuses the memoized result, skipping the next rendering.

###  When to use React memo
- re-render often and re-render with same props

### Syntax
``` jsx

import { memo } from 'react'

function Component(){
    ...
}
export default memo(Component);

```

### Notes
- Khi component cha có nhiều state
- Khi component cha chứa nhiều conponent con