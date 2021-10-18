function App() {
  return (
  <div className="wrapper pb-10">
    {/*HEADER*/}
    <header className="xs_header flex sm:justify-between sm:p-11 border-b border-gray-300">
      <div className="xs_logo flex items-center">
        <img className="mr-4" width={40} height={40} src="/img/logo.png" alt="logo"/>
        <div>
          <h3 className="text-xl uppercase font-bold">React Sneakers</h3>
          <p className="text-sm text-gray-400">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="xs_user flex items-center">
        <li className="mr-8">
          <img className="inline mr-2.5" width={18} height={18} src="/img/cart.svg" alt="cart"/>
          <span className="text-gray-900 text-sm font-bold">1205 руб.</span>
        </li>
        <li>
          <img className="inline mr-8" width={19} height={21} src="/img/favorite.svg" alt="favorite"/>
        </li>
        <li>
          <img className="inline" width={18} height={18} src="/img/user.svg" alt="user"/>
        </li>
      </ul>
    </header>
    {/*END HEADER*/}
    {/*CONTAINER*/}
    <div className="container mx-auto mt-9 sm:container sm:mx-auto md:container md:mx-auto lg:px-14">
      <h1 className="md:ml-5 font-bold text-3xl leading-7 uppercase">Все Кроссовки</h1>
      
      <div className="mt-9 xs_cart_grid grid gap-10 sm:gap-5 sm:justify-items-center sm:grid-cols-2 md:gap-10 md:grid-cols-3 lg:grid-cols-4">
        {/*CART*/}
        <div className="px-7 py-6 flex flex-col cart">
          <div className="relative">
            <button className="absolute cart_buttons">
              <img width={14} height={13} className="m-auto" src="/img/like.svg" alt="like"/>
            </button>
            <img width={133} height={112} className="m-auto mb-3.5" src="/img/sneakers/image 1.png" alt="sneakers"/>  
          </div>
          <p className="text-sm mb-3.5 font-normal">Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="flex justify-between">
            <div>
              <p className="text-xs font-medium text-gray-400">Цена</p>
              <p className="text-sm text-gray-900 font-bold">12 999 руб.</p>
            </div>
            <button className="cart_buttons">
              <img width={11} height={11} className="m-auto" src="/img/plus.svg" alt=""/>
            </button>
          </div>
        </div>

        <div className="px-7 py-6 flex flex-col cart">
          <div className="relative">
            <button className="absolute cart_buttons">
              <img width={14} height={13} className="m-auto" src="/img/like.svg" alt="like"/>
            </button>
            <img width={133} height={112} className="m-auto mb-3.5" src="/img/sneakers/image 2.png" alt="sneakers"/>  
          </div>
          <p className="text-sm mb-3.5 font-normal">Мужские Кроссовки Nike Air Max 270</p>
          <div className="flex justify-between">
            <div>
              <p className="text-xs font-medium text-gray-400">Цена</p>
              <p className="text-sm text-gray-900 font-bold">12 999 руб.</p>
            </div>
            <button className="cart_buttons">
              <img width={11} height={11} className="m-auto" src="/img/plus.svg" alt=""/>
            </button>
          </div>
        </div>

        <div className="px-7 py-6 flex flex-col cart">
          <div className="relative">
            <button className="absolute cart_buttons">
              <img width={14} height={13} className="m-auto" src="/img/like.svg" alt="like"/>
            </button>
            <img width={133} height={112} className="m-auto mb-3.5" src="/img/sneakers/image 3.png" alt="sneakers"/>  
          </div>
          <p className="text-sm mb-3.5 font-normal">Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="flex justify-between">
            <div>
              <p className="text-xs font-medium text-gray-400">Цена</p>
              <p className="text-sm text-gray-900 font-bold">12 999 руб.</p>
            </div>
            <button className="cart_buttons">
              <img width={11} height={11} className="m-auto" src="/img/plus.svg" alt=""/>
            </button>
          </div>
        </div>

        <div className="px-7 py-6 flex flex-col cart">
          <div className="relative">
            <button className="absolute cart_buttons">
              <img width={14} height={13} className="m-auto" src="/img/like.svg" alt="like"/>
            </button>
            <img width={133} height={112} className="m-auto mb-3.5" src="/img/sneakers/image 4.png" alt="sneakers"/>  
          </div>
          <p className="text-sm mb-3.5 font-normal">Кроссовки Puma X Aka Boku Future Rider</p>
          <div className="flex justify-between">
            <div>
              <p className="text-xs font-medium text-gray-400">Цена</p>
              <p className="text-sm text-gray-900 font-bold">12 999 руб.</p>
            </div>
            <button className="cart_buttons">
              <img width={11} height={11} className="m-auto" src="/img/plus.svg" alt=""/>
            </button>
          </div>
        </div>

        <div className="px-7 py-6 flex flex-col cart">
          <div className="relative">
            <button className="absolute cart_buttons">
              <img width={14} height={13} className="m-auto" src="/img/like.svg" alt="like"/>
            </button>
            <img width={133} height={112} className="m-auto mb-3.5" src="/img/sneakers/image 5.png" alt="sneakers"/>  
          </div>
          <p className="text-sm mb-3.5 font-normal">Мужские Кроссовки Under Armour Curry 8</p>
          <div className="flex justify-between">
            <div>
              <p className="text-xs font-medium text-gray-400">Цена</p>
              <p className="text-sm text-gray-900 font-bold">15 199 руб.</p>
            </div>
            <button className="cart_buttons">
              <img width={11} height={11} className="m-auto" src="/img/plus.svg" alt=""/>
            </button>
          </div>
        </div>

        <div className="px-7 py-6 flex flex-col cart">
          <div className="relative">
            <button className="absolute cart_buttons">
              <img width={14} height={13} className="m-auto" src="/img/like.svg" alt="like"/>
            </button>
            <img width={133} height={112} className="m-auto mb-3.5" src="/img/sneakers/image 6.png" alt="sneakers"/>  
          </div>
          <p className="text-sm mb-3.5 font-normal">Мужские Кроссовки Nike Kyrie 7</p>
          <div className="flex justify-between">
            <div>
              <p className="text-xs font-medium text-gray-400">Цена</p>
              <p className="text-sm text-gray-900 font-bold">11 299 руб.</p>
            </div>
            <button className="cart_buttons">
              <img width={11} height={11} className="m-auto" src="/img/plus.svg" alt=""/>
            </button>
          </div>
        </div>

        <div className="px-7 py-6 flex flex-col cart">
          <div className="relative">
            <button className="absolute cart_buttons">
              <img width={14} height={13} className="m-auto" src="/img/like.svg" alt="like"/>
            </button>
            <img width={133} height={112} className="m-auto mb-3.5" src="/img/sneakers/image 7.png" alt="sneakers"/>  
          </div>
          <p className="text-sm mb-3.5 font-normal">Мужские Кроссовки Jordan Air Jordan 11</p>
          <div className="flex justify-between">
            <div>
              <p className="text-xs font-medium text-gray-400">Цена</p>
              <p className="text-sm text-gray-900 font-bold">10 799 руб.</p>
            </div>
            <button className="cart_buttons">
              <img width={11} height={11} className="m-auto" src="/img/plus.svg" alt=""/>
            </button>
          </div>
        </div>

        <div className="px-7 py-6 flex flex-col cart">
          <div className="relative">
            <button className="absolute cart_buttons">
              <img width={14} height={13} className="m-auto" src="/img/like.svg" alt="like"/>
            </button>
            <img width={133} height={112} className="m-auto mb-3.5" src="/img/sneakers/image 8.png" alt="sneakers"/>  
          </div>
          <p className="text-sm mb-3.5 font-normal">Мужские Кроссовки Nike LeBron XVIII</p>
          <div className="flex justify-between">
            <div>
              <p className="text-xs font-medium text-gray-400">Цена</p>
              <p className="text-sm text-gray-900 font-bold">16 499 руб.</p>
            </div>
            <button className="cart_buttons">
              <img width={11} height={11} className="m-auto" src="/img/plus.svg" alt=""/>
            </button>
          </div>
        </div>

        <div className="px-7 py-6 flex flex-col cart">
          <div className="relative">
            <button className="absolute cart_buttons">
              <img width={14} height={13} className="m-auto" src="/img/like.svg" alt="like"/>
            </button>
            <img width={133} height={112} className="m-auto mb-3.5" src="/img/sneakers/image 9.png" alt="sneakers"/>  
          </div>
          <p className="text-sm mb-3.5 font-normal">Мужские Кроссовки Nike Lebron XVIII Low</p>
          <div className="flex justify-between">
            <div>
              <p className="text-xs font-medium text-gray-400">Цена</p>
              <p className="text-sm text-gray-900 font-bold">13 999 руб.</p>
            </div>
            <button className="cart_buttons">
              <img width={11} height={11} className="m-auto" src="/img/plus.svg" alt=""/>
            </button>
          </div>
        </div>

        <div className="px-7 py-6 flex flex-col cart">
          <div className="relative">
            <button className="absolute cart_buttons">
              <img width={14} height={13} className="m-auto" src="/img/like.svg" alt="like"/>
            </button>
            <img width={133} height={112} className="m-auto mb-3.5" src="/img/sneakers/image 10.png" alt="sneakers"/>  
          </div>
          <p className="text-sm mb-3.5 font-normal">Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="flex justify-between">
            <div>
              <p className="text-xs font-medium text-gray-400">Цена</p>
              <p className="text-sm text-gray-900 font-bold">8 499 руб.</p>
            </div>
            <button className="cart_buttons">
              <img width={11} height={11} className="m-auto" src="/img/plus.svg" alt=""/>
            </button>
          </div>
        </div>

        <div className="px-7 py-6 flex flex-col cart">
          <div className="relative">
            <button className="absolute cart_buttons">
              <img width={14} height={13} className="m-auto" src="/img/like.svg" alt="like"/>
            </button>
            <img width={133} height={112} className="m-auto mb-3.5" src="/img/sneakers/image 11.png" alt="sneakers"/>  
          </div>
          <p className="text-sm mb-3.5 font-normal">Кроссовки Puma X Aka Boku Future Rider</p>
          <div className="flex justify-between">
            <div>
              <p className="text-xs font-medium text-gray-400">Цена</p>
              <p className="text-sm text-gray-900 font-bold">8 999 руб.</p>
            </div>
            <button className="cart_buttons">
              <img width={11} height={11} className="m-auto" src="/img/plus.svg" alt=""/>
            </button>
          </div>
        </div>

        <div className="px-7 py-6 flex flex-col cart">
          <div className="relative">
            <button className="absolute cart_buttons">
              <img width={14} height={13} className="m-auto" src="/img/like.svg" alt="like"/>
            </button>
            <img width={133} height={112} className="m-auto mb-3.5" src="/img/sneakers/image 12.png" alt="sneakers"/>  
          </div>
          <p className="text-sm mb-3.5 font-normal">Мужские Кроссовки Nike Kyrie Flytrap IV</p>
          <div className="flex justify-between">
            <div>
              <p className="text-xs font-medium text-gray-400">Цена</p>
              <p className="text-sm text-gray-900 font-bold">11 299 руб.</p>
            </div>
            <button className="cart_buttons">
              <img width={11} height={11} className="m-auto" src="/img/plus.svg" alt=""/>
            </button>
          </div>
        </div>
        {/*END CART*/}
      </div>
    </div>
    {/*END CONTAINER*/}
  </div>
  );
}

export default App; 
