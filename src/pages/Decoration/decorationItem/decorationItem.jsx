import React, { useState } from "react";
import { useDispatch } from "react-redux";
import X from "../../../assets/modal/close-svgrepo.svg";
import { addPrice, ChangeBasket, deletePrice, deleteTask } from "../../../redux/reducers/dataCrad";

const DecorationItem = ({ item }) => {
  const [list, setList] = useState(false);
  const dispath = useDispatch();

  return (
    <div className="makingItem">
      <a className="makingItem-link">
        <img src={item.img} alt="image" />
      </a>
      <div className="makingItem__flex">
        <a className="makingItem__flex-title">{item.title}</a>
        <div className="makingItem__flex-select">
          <div
            className="makingItem__flex-select_top"
            onClick={() => setList(!list)}
          >
            <div className="makingItem__flex-select_top-size">
              Размеры {item.size}
            </div>
            <div
              className="makingItem__flex-select_top-img"
              style={{ rotate: `${list ? "180deg" : "0deg"}` }}
            ></div>
          </div>
          <div
            className={`makingItem__flex-select_list ${list ? "active" : ""}`}
          >
            <div onClick={() => dispath(ChangeBasket(item.id))}>
              <input type="hidden" />
              Размер 48
            </div>
            <div>
              <input type="hidden" />
              размер 50
            </div>
            <div>
              <input type="hidden" />
              размер 50
            </div>
          </div>
        </div>
        <div className="makingItem__flex-numbers">
          <button
            type="button"
            className="makingItem__flex-numbers_minus"
            onClick={() => {
                dispath(deletePrice(item.id))
            }}
          ></button>
          <input
            className="makingItem__flex-numbers_center"
            type="text"
            value={item.count}
          />
          <button
            type="button"
            className="makingItem__flex-numbers_plus"
            onClick={() => {
                dispath(addPrice(item.id));
            }}
          ></button>
        </div>
        <div className="makingItem__flex-price">{item.price}</div>
        <a className="makingItem__flex-img" onClick={() => {dispath(deleteTask(item.id))}}>
          <img src={X} alt="x" />
        </a>
      </div>
    </div>
  );
};

export default DecorationItem;
