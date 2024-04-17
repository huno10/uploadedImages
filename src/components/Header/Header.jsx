import { useState } from 'react'
import styles from './Header.module.css'
import { SignIn } from './SignIn/SignIn'

export const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>OneAI</h1>
            <button className={styles.btn} onClick={() => setOpen(true)}>Sign in</button>
            {open && (
                <SignIn setOpen={setOpen} />
            )}
        </header>
    )
}
