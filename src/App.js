import React from 'react';
import Card from './component/Card';
import Header from './component/Header';
import Drawer from './component/Drawer';

function App() {
  const[cartOpened, setCartOpened] = React.useState(false);
  const[items, setItems] = React.useState([]);
  const[cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://617fbc43055276001774fc10.mockapi.io/items')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  return (
    <div className="wrapper pb-10">
      {/*DRAWER*/}
      {cartOpened && <Drawer items={cartItems} onCloseCart={()=> setCartOpened(false)}/>}
      {/*END DRAWER*/}
      {/*HEADER*/}
      <Header onClickCart={()=> setCartOpened(true)}/>
      {/*END HEADER*/}
      {/*CONTAINER*/}
      <div className="container mx-auto mt-9 sm:container sm:mx-auto md:container md:mx-auto lg:px-14">
        <div className="flex justify-between items-center searchAndTittle">
          <h1 className="md:ml-5 font-bold text-3xl leading-7 uppercase">Все Кроссовки</h1>
          <div className="search-block flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" className="text-base" placeholder="Поиск..." />
          </div>
        </div>
        <div className="mt-9 xs_card_grid grid gap-10 sm:gap-5 sm:justify-items-center sm:grid-cols-2 md:gap-10 md:grid-cols-3 lg:grid-cols-4">
        {/*CARD*/}
        {items.map((item) =>(
          <Card 
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onFavorite={(obj)=>console.log(obj)}
            onAdd={(obj)=>onAddToCart(obj)}
            />
        ))}
        {/*END CARD*/}
        </div>
      </div>
      {/*END CONTAINER*/}
    </div>
  );
}

export default App;
