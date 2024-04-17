import styles from './SignIn.module.css'
import { AiOutlineClose } from "react-icons/ai";

export const SignIn = ({ setOpen }) => {
    return (
        <div className={styles.signIn_wrapper}>
                <AiOutlineClose className={styles.icon_close} onClick={() => setOpen(false)}
                    size={36} />
                <div className={styles.content}>
                    <input className={styles.input} type="text" placeholder='Email' />
                    <input className={styles.input} type="password" placeholder='Password' />
                    <button className={styles.btn_signIn}>Sign in</button>
                </div>
        </div>
    )
}
