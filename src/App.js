import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import Footer from './Components/Footer';
import products from "./products.json";
import { useState, useEffect } from 'react';

export default function App() {
  products = products.sort((productA, productB) => productA.price - productB.price);
  const money = 1824;
  const [total, setTotal] = useState(0);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (acc + item.amount * products.find((product) => product.id === item.id).price)
      }, 0)
    )
  }, [basket])

  return (
    <>
      <Header total={total} money={money}/>
      <div className="container">
        <Card basket={basket} setBasket={setBasket} products={products} total={total} money={money} />
        { basket.length > 0 && <Footer total={total} basket={basket} setBasket={setBasket}/>}
      </div>
    </>
  );
}