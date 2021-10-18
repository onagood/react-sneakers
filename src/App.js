function App() {
  return (
  <div className="wrapper">
    <header className="flex justify-between p-11">
      <div className="flex items-center">
        <img className="mr-4" width={40} height={40} src="/img/logo.png" alt="logo"/>
        <div>
          <h3><b>React Sneakers</b></h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="flex items-center">
        <li className="mr-8">
          <img className="inline" width={18} height={18} src="/img/cart.svg" alt="cart"/>
          <span>1205 руб.</span>
        </li>
        <li>
          <img className="inline" width={18} height={18} src="/img/user.svg" alt="user"/>
        </li>
      </ul>
    </header>
  </div>
  );
}

export default App; 
