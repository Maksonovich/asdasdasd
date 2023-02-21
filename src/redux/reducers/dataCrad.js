const coin = {
  task: [],
  favorite: [],
  makeOrder: []
};

export default (state = coin, action) => {
  switch (action.type) {
    case "DELETE": {
      return {
        ...state,
        task: state.task.filter((item) => {
          return item.id !== action.id;
        }),
      };
    }
    case "ADD_PRICE": {
      return {
        ...state,
        task: state.task.map((el) => {
          if (el.id === action.id) {
            el.price = el.price + el.underPrice;
            el.count = el.count + 1;
          }
          return el;
        }),
      };
    }
    case "MINUS_PRICE": {
      return {
        ...state,
        task: state.task.map((item) => {
          if (item.id === action.id) {
            item.price = item.price - item.underPrice;
            item.count = item.count - 1;
          }
          if (item.count < 1) {
            item.price = item.price = item.underPrice;
            item.count = item.count = 1;
          }
          return item;
        }),
      };
    }
    case 'CHANGE_BASKET':
      return {
        ...state,
        task: state.task.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              size: action.payload.size
            }
          }
          return item;
        })
      };
    case "SET_FAVORITES":
      return { ...state, favorite: [...state.favorite, action.payload] };
    case "MAKE__ADD":
      return { ...state, makeOrder: [...state.makeOrder, action.payload] }
    case "TASK__ADD":
      return { ...state, task: [...state.task, action.payload] }
    default:
      return state;
  }
};

export const deleteTask = (id) => {
  return (dispath) => {
    return dispath({ type: "DELETE", id });
  };
};

export const addPrice = (id) => {
  return (dispath) => {
    return dispath({ type: "ADD_PRICE", id });
  };
};

export const deletePrice = (id) => {
  return (dispath) => {
    return dispath({ type: "MINUS_PRICE", id });
  };
};

export const changeBasket = ( id,size) => {
  return (dispath) => {
      return dispath({type: "CHANGE_BASKET", payload:{id,size}})
  }
}

export const setBasket = (task, payload) => {
  return (dispath) => {
    return dispath({ type: "TASK__ADD", task, payload });
  };
};

export const setFavorites = (favorite, payload) => {
  return (dispath) => {
    return dispath({ type: "SET_FAVORITES", favorite, payload });
  };
};

export const MakeAdd = (makeOrder, payload) => {
  return (dispath) => {
    return dispath({ type: "MAKE__ADD", makeOrder, payload });
  };
};