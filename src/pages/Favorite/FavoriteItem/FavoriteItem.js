import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MakeAdd } from "../../../redux/reducers/dataCrad";

const FavoriteItem = ({ product }) => {

  const [hide, setHide] = useState(true)
  const dispatch = useDispatch() 

  return (
    hide && <div className="favoriteItem">
      <div className="favoriteItem__first">
        <a href="#">
          <img src={product.img} alt="img" />
        </a>
        <div className="favoriteItem__first-text">
          <a href="#">{product.title}</a>
          <p>Цена: {product.price}</p>
        </div>
      </div>
      <div className="favoriteItem__second">
        <textarea
          className="favoriteItem__second-textarea"
          cols="30"
          rows="10"
          placeholder="ДОБАВИТЬ КОММЕНТАРИЙ"
        ></textarea>
        <div className="favoriteItem__second-links">
          <Link to="/MakeAnOrder" onClick={() => dispatch(MakeAdd('makeOrder', product))} className="favoriteItem__second-links_btn">Купить</Link>
          <a className="favoriteItem__second-links_btn2" onClick={() => setHide(!hide)}>Удалить</a>
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
