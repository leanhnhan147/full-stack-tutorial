# useEffect Hooks

## Lý cần thuyết để học được useEffect

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


## Syntax
- useEffect(callback(), [dependencies])

## Notes
1. useEffect(callback)
- Gọi callback mỗi khi component re-render
- Gọi callback sau khi component thêm elenment vào DOM
2. useEffect(callback, [])
- Chỉ gọi callback 1 lần sau khi component mounted
3. useEffect(callback, [deps])
- Callback sẽ được gọi lại mỗi khi deps thay đổi

Lý thuyết chung
1. Callback luôn được gọi sau khi component mounted
