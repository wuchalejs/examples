import { useState } from "react"

console.log('ole')
export default function Counter() {
    const [count, setCount] = useState(0)
    return <>
        <button onClick={() => setCount(count + 1)}>The count is: {count}</button>
    </>
}
