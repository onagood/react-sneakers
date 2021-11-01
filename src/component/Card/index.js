import React from 'react';
import styles from './Card.module.css';

function Card({imageUrl, title, price, onAdd, onFavorite}){
  const[addCart, setAddCart]=React.useState(true);
  const onAddCart = ()=>{
    onAdd({title, imageUrl, price});
    setAddCart(!addCart);
  }
  const [addFavorite, setAddFavorite] = React.useState(true);
  const onAddFavorite = ()=>{
    setAddFavorite(!addFavorite);
  }
  return(
    <div className={styles.card}>
      <div className="relative">
        <img onClick={onAddFavorite} className="absolute cursor-pointer" src={addFavorite ? "/img/unliked.svg" : "/img/liked.svg"} alt="favorite"/> 
        <img width={133} height={112} className="m-auto mb-3.5" src={imageUrl} alt="sneakers"/>  
      </div>
      <p className="text-sm mb-3.5 font-normal">{title}</p>
      <div className="flex justify-between">
        <div>
          <p className="text-xs font-medium text-gray-400">Цена</p>
          <p className="text-sm text-gray-900 font-bold">{price} руб.</p>
        </div>
        <img className="cursor-pointer" onClick={onAddCart} src={addCart ? "/img/btn-plus.svg" : "/img/btn-checked.svg"} alt="add"/>
      </div>
    </div>
  );
}
export default Card;