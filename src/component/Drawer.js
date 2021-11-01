function Drawer({onCloseCart, items=[]}) {
  return (
    <div className="overlay">
      <div className="drawer flex flex-col">
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-bold text-2xl">Корзина</h2>
          <img onClick={onCloseCart} className="cursor-pointer" src="/img/remove.svg" alt="remove" />
        </div>
        <div className="flex-grow overflow-auto">
          {items.map(obj => 
            <div className="cartItem flex items-center justify-between mb-5">
            <img width={70} height={70} className="" src={obj.imageUrl} alt="sneakers" />
            <div className="text-sm w-1/2">
              <p>{obj.title}</p>
              <p className="font-bold">{obj.price} руб.</p>
            </div>
            <button>
              <img src="/img/remove.svg" alt="remove" />
            </button>
          </div>  
          )}
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
          <button className="greenBtn">
            Оформить заказ
            <img className="inline" src="img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Drawer;
