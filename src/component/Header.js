function Header(props){
  return(
    <header className="xs_header flex sm:justify-between sm:p-11 border-b border-gray-300">
      <div className="xs_logo flex items-center">
        <img className="mr-4" width={40} height={40} src="/img/logo.png" alt="logo"/>
        <div>
          <h3 className="text-xl uppercase font-bold">React Sneakers</h3>
          <p className="text-sm text-gray-400">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="xs_user flex items-center">
        <li className="mr-8 cursor-pointer" onClick={props.onClickCart}>
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
  );
}
export default Header;