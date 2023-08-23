
# 
## Props (Properties)
- Các props là đối số của function
- Read-only
- Send data between parent component and child component

## State
- là của riêng component
- có thể thay đổi được và mỗi khi state thay đổi thì component đó sẽ được render lại
- Save data, information in component & auto re-render when changing data
- Only using in Class Component 
- Scope: only a Component

## Stateful functional component
- stateful components có một state được khởi tạo trong constructor

## Stateless functional component

## Class Components
- Always use this keyword when calling variable, function
- Declare the variable in the constructor

## Function Components
- DO NOT use this keyword when calling variable, function
- Declare the variable, function with let/const keyword







# Lesson 06
- Lifecycle Methods (Component Lifecycle)
  - render()
  - componentDidMount()
  - shouldComponentUpdate()
  - componentDidUpdate()
  - componentWillUnmount()
- Styled Component 

# Lesson 07
- Axios
- Higher-Order Component (HOC)
- Render props
- Reuse function

# Lesson 08
- State hook
- Effect hook
- Context hook
- Custom hook
- Memo hook
- Callback hook
- Reducer hook


## State hook
### When to use State Hooks
- When you want the data to change, the interface is automatically updated (re-render data).

### Syntax

``` jsx
import { useState } from 'react'

function Component(){
    const [state, setState] = useState(initState)

    ...
}
```

### Notes
- Initial state is only used for the first time
- `setState` is to replace state with new value
- `setState` as callback
- Component is re-rendered after `setState`


## Effect hook
### 
- Events: Add / remove event listener
- Observer pattern: Subsribe / unsubscribe
- Closure
- Timers: setInterval, setTimeout, clearInterval, clearTimeout
- useState
- Mounted / unmounted
- ===
- Call API

1. Update DOM
2. Call API
3. Listen DOM events
- Scroll
- Resize
4. Cleanup
- Remove listeners / Unsubcribe
- Clear timer

### Syntax
- useEffect(callback())
- useEffect(callback(), [])
- useEffect(callback(), [dependencies])

### Notes
- Callback is always called after component mounted

1. useEffect(callback)
- Call callback every time the component re-render
- Call callback after the component add element to DOM
2. useEffect(callback, [])
- Only call callback once after component mounted
3. useEffect(callback, [deps])
- Callback will be called again every time `deps` changes


