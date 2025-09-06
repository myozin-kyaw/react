import { useId } from "react"

export default function UseIdExample() {
    const usernameId = useId();
    const passwordId = useId();
    return (
        <div>
            <h1>useId() Example</h1>

            <div>
                <label htmlFor={usernameId}>Enter your username</label>
                <input type="text" id={usernameId} />
            </div>
            <div>
                <label htmlFor={passwordId}>Enter your password</label>
                <input type="password" id={passwordId} />
            </div>
        </div>
    )
}