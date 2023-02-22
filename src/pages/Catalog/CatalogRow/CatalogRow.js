  import React, { useState } from "react";
  import { useDispatch } from "react-redux";
  import { Link } from "react-router-dom";
  import { MakeAdd, setFavorites } from "../../../redux/reducers/dataCrad";

  const CatalogRow = ({ products }) => {
    const dispatch = useDispatch();
    const [activeIndex, setActiveIndex] = useState("");
    
    const handleFavoriteClick = (item) => {
      dispatch(setFavorites("favorite", item));
      setActiveIndex(item.id);
    };
    
    return (
      <div className="catalog_row">
        {products.data.map((item) => (
          <div className="catalog__card" key={item.id}>
            <img className="catalog__card-img" src={item.img} alt={item.title} />
            <svg
              className="catalog__card-image"
              onClick={() => handleFavoriteClick(item)}
              src={item.image}
              alt={item.image}
              style={{
                fill: item.id === activeIndex ? "#000" : "none",
              }}
              width="23"
              height="20"
              viewBox="0 0 23 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5703 3.70142C10.9351 3.10858 8.50169 0.978395 6.34687 1.00017C4.13844 1.02277 0.729548 2.52245 1.01707 6.9662C1.2713 10.8916 11.4013 18.9636 11.4013 18.9636C11.4647 19.0121 11.5305 19.0121 11.5987 18.9636C11.5987 18.9636 21.7287 10.8908 21.9829 6.9662C22.2705 2.52245 18.8616 1.02277 16.6523 1.00017C14.1499 0.975046 11.2714 3.85214 11.2714 3.85214L9.31716 5.91953"
                stroke="#222222"
                stroke-miterlimit="3.8637"
              />
            </svg>
            <Link
              to="/MakeAnOrder"
              className="catalog__card-title"
              onClick={() => dispatch(MakeAdd("makeOrder", item))}
            >
              {item.title}
            </Link>
            <p className="catalog__card-price">{item.price} ₽</p>
            <p className="catalog__card-text">{item.text}</p>
          </div>
        ))}
      </div>
    );
  };

  export default CatalogRow;
