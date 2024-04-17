import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.text_wrapper}>
                <p className={styles.title}>Get help at support@avgen.me</p>
                <p className={styles.desc}>Copyright © 2024 Mook Ltd. All rights reserved.</p>
            </div>
        </footer>
    )
}
