import styles from './NotFound.module.css'

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <p>Ошибка 404</p>
      <p>Страница не найдена</p>
    </div>
  )
}
