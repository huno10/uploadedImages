import { HomePage } from './pages/HomePage';
import { ItemPage } from './pages/ItemPage';

import './styles/reset.css'
import styles from './App.module.css'
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const [item, setItem] = useState(0)

  const personStore = useSelector((state) => state.person);
  
  return (
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<HomePage obj={personStore} setItem={setItem} />} />
          <Route path="/items/:id" element={<ItemPage item={item} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
  );
}

export default App;
