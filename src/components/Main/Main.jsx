import { useNavigate } from 'react-router-dom';
import { Items } from './Items/Items'
import styles from './Main.module.css'


export const Main = ({ obj, setItem }) => {
  const navigate = useNavigate();

  function handleClickItem(id, item) {
    setItem(item)
    navigate(`/items/${id}`);
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {obj.map(item => (
          <Items key={item.img} item={item} onClick={handleClickItem} />
        ))}
      </div>
    </main>
  )
}
