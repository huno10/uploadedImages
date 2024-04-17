import styles from './Items.module.css'

export const Items = ({ item, onClick }) => {
    return (
        <div className={styles.container} onClick={() => onClick(item.id, item)}>
            <img className={styles.img} src={item.img} alt="photo" />
            <div className={styles.wrapper}>
                <h2 className={styles.name}>{item.name}</h2>
            </div>
        </div>
    )
}
