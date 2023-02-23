import React from "react";
import { useDispatch } from "react-redux";
import {
  addPrice,
  changeBasket,
  deletePrice,
  deleteTask,
} from "../../../redux/reducers/dataCrad";

const BasketItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleSizeChange = (size) => {
    dispatch(changeBasket(item.id, size))
  };
  
  return (
    <div className="basketItem" key={item.id} onMouseMove={() => handleSizeChange(item.size)}>
      <div className="basketItem__items">
        <div className="basketItem__img">
          <img src={item.img} alt="some image" />
        </div>
        <div className="basketItem__info">
          <div className="basketItem__info-top">
            <p>{item.title}</p>
            <p className="basketItem__info-top_price">{item.price}₽</p>
          </div>
          <div className="basketItem__info-size">Размер {item.size}</div>
          <div className="basketItem__info-text">Количество</div>
          <div className="basketItem__info-bottom">
            <div className="basketItem__info-bottom_numbers">
              <button
                className="basketItem__info-bottom_minus"
                onClick={() => {
                  dispatch(deletePrice(item.id));
                }}
              ></button>
              <div className="basketItem__info-bottom_center">{item.count}</div>
              <button
                className="basketItem__info-bottom_plus"
                onClick={() => {
                  dispatch(addPrice(item.id)) && handleSizeChange(item.size)
                }}
              ></button>
            </div>
            <div
              className="basketItem__info-delete"
              onClick={() => {
                dispatch(deleteTask(item.id));
              }}
            >
              Удалить
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;