import './css/App.css';
import React, { useState, useCallback } from 'react';
import { Header, Body, Footer, Menu } from './components/components';
import ProductPage from './pages/ProductPage';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Товар 1', price: 100, isChecked: false },
    { id: 2, name: 'Товар 2', price: 200, isChecked: false },
    { id: 3, name: 'Товар 3', price: 300, isChecked: false },
  ]);

  const product = {
    name: 'Товар 1',
    description: 'Це детальний опис товару номер 1.',
  };

  const [isLogged, setIsLogged] = useState(false);

  const handleCheckboxChange = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const calculateSelectedProductCount = useCallback(() => {
    return items.filter((item) => item.isChecked).length;
  }, [items]);

  const toggleLogin = () => {
    setIsLogged((prevIsLogged) => !prevIsLogged);
  };

  return (
    <div className="app">
      <Header isLogged={isLogged} toggleLogin={toggleLogin} />
      <Menu isLogged={isLogged} toggleLogin={toggleLogin} />
      <Body />
      
      <ul className='ul-product'>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            {item.name} - Ціна: {item.price} грн
          </li>
        ))}
      </ul>
      <ProductPage product={product} />
      <Footer selectedProductCount={calculateSelectedProductCount()} />
    </div>
  );
}

export default App;
