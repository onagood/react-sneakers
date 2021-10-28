function Drawer(){
  return (
    <div style={{ display: 'none'}} className="overlay">
      <div className="drawer flex flex-col">
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-bold text-2xl">Корзина</h2>
          <button className="cart_remove">
                <img width={11} height={11} className="m-auto" src="/img/remove.svg" alt="remove"/>
          </button>
        </div>
        <div className="flex-grow overflow-auto">
          <div className="cartItem flex items-center justify-between mb-5">
            <img width={70} height={70} className="" src="img/sneakers/image1.png" alt="sneakers" />
            <div className="text-sm w-1/2">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <p className="font-bold">12999 руб.</p>
            </div>
            <button className="cart_remove">
                <img width={11} height={11} className="m-auto" src="/img/remove.svg" alt="remove"/>
            </button>
          </div>

          <div className="cartItem flex items-center justify-between mb-5">
            <img width={70} height={70} className="" src="img/sneakers/image1.png" alt="sneakers" />
            <div className="text-sm w-1/2">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <p className="font-bold">12999 руб.</p>
            </div>
            <button className="cart_remove">
                <img width={11} height={11} className="m-auto" src="/img/remove.svg" alt="remove"/>
            </button>
          </div>
          
        </div>
        <div className="flex flex-col">
          <ul>
            <li className="flex justify-between mb-5">
              <span>Итого:</span>
              <b>21498 руб.</b>
            </li>
            <li className="flex justify-between mb-5">
              <span>Налог 5%:</span>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenBtn">Оформить заказ
            <img className="inline" src="img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Drawer;