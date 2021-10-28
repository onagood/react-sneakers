function Card(){
  return(
    <div className="px-7 py-6 flex flex-col card">
      <div className="relative">
        <button className="absolute card_buttons">
          <img width={14} height={13} className="m-auto" src="/img/like.svg" alt="like"/>
        </button>
        <img width={133} height={112} className="m-auto mb-3.5" src="/img/sneakers/image1.png" alt="sneakers"/>  
      </div>
      <p className="text-sm mb-3.5 font-normal">Мужские Кроссовки Nike Blazer Mid Suede</p>
      <div className="flex justify-between">
        <div>
          <p className="text-xs font-medium text-gray-400">Цена</p>
          <p className="text-sm text-gray-900 font-bold">12 999 руб.</p>
        </div>
        <button className="card_buttons">
          <img width={11} height={11} className="m-auto" src="/img/plus.svg" alt=""/>
        </button>
      </div>
    </div>
  );
}
export default Card;