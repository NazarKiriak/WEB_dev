import React, { useState } from 'react';

function ProductPage(props) {
  const { product } = props;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [usdRate] = useState(38); // Курс долара до гривні (простий приклад)
  const [currency, setCurrency] = useState('USD'); // Початкова валюта (USD за замовчуванням)
  const [selectedItem, setSelectedItem] = useState(null); // Стан для обраного товару

  const items = [
    { id: 1, name: 'Товар 1', price: 100 },
    { id: 2, name: 'Товар 2', price: 200 },
    { id: 3, name: 'Товар 3', price: 300 },
  ];

  const addComment = () => {
    if (newComment.trim() !== '') {
      console.log(`Ваш відгук: "${newComment}"`);
      alert(`Ваш відгук: "${newComment}" додано успішно!`);
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const toggleCurrency = () => {
    setCurrency((prevCurrency) => (prevCurrency === 'USD' ? 'UAH' : 'USD'));
  };

  const handleItemSelect = (itemId) => {
    setSelectedItem(items.find((item) => item.id === itemId));
  };

  const convertPrice = (price, currentCurrency) => {
    if (currentCurrency === 'USD') {
      return (price / usdRate).toFixed(2) + ' USD';
    } else {
      return price + ' UAH';
    }
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Ціна: {selectedItem ? convertPrice(selectedItem.price, currency) : ''}</p>

      <button type="button" onClick={toggleCurrency}>
        Змінити валюту
      </button>

      <h2>Коментарі:</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>

      <form>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Введіть коментар..."
        />
        <button type="button" onClick={addComment}>
          Додати коментар
        </button>
      </form>

      <h2>Оберіть ціну якого товару конвертувати:</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <button onClick={() => handleItemSelect(item.id)}>{item.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductPage;