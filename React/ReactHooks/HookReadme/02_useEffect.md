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
1. useEffect(callback())
2. useEffect(callback(), [])
3. useEffect(callback(), [dependencies])

### Notes
- Callback is always called after component mounted

1. useEffect(callback())
- Call callback() every time the component re-render
- Call callback() after the component add element to DOM
2. useEffect(callback(), [])
- Only call callback() once after component mounted
3. useEffect(callback(), [deps])
- callback() will be called again every time `deps` changes