import React, { useState } from "react";
import { useDispatch } from "react-redux";
import X from "../../../assets/modal/close-svgrepo.svg";
import { addPrice, changeBasket, deletePrice, deleteTask } from "../../../redux/reducers/dataCrad";

const DecorationItem = ({ item }) => {
  const [list, setList] = useState(false);
  const dispatch = useDispatch();

  const handleSizeChange = (size) => {
    dispatch(changeBasket(item.id, size));
    setList(!list)
  };
  const handleSizeMove = (size) => {
    dispatch(changeBasket(item.id, size));
  };

  return (
    <div className="makingItem" onMouseMove={() => handleSizeMove(item.size)}>
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
            <div onClick={() => handleSizeChange("48")}>
              <input type="hidden" />
              Размер 48
            </div>
            <div onClick={() => handleSizeChange("50")}>
              <input type="hidden" />
              размер 50
            </div>
            <div onClick={() => handleSizeChange("40")}>
              <input type="hidden" />
              размер 40
            </div>
            <div onClick={() => handleSizeChange("60")}>
              <input type="hidden" />
              размер 60
            </div>
            <div onClick={() => handleSizeChange("63")}>
              <input type="hidden" />
              размер 62
            </div>
            <div onClick={() => handleSizeChange("39")}>
              <input type="hidden" />
              размер 39
            </div>
          </div>
        </div>
        <div className="makingItem__flex-numbers">
          <button
            type="button"
            className="makingItem__flex-numbers_minus"
            onClick={() => {
                dispatch(deletePrice(item.id))
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
                dispatch(addPrice(item.id));
            }}
          ></button>
        </div>
        <div className="makingItem__flex-price">{item.price}</div>
        <a className="makingItem__flex-img" onClick={() => {dispatch(deleteTask(item.id))}}>
          <img src={X} alt="x" />
        </a>
      </div>
    </div>
  );
};

export default DecorationItem;
