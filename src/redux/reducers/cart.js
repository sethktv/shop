const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
  };
  
  const cart = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CONTENT_CART': {
        const newItems = {
          ...state.items,
          [action.payload.id]: !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id], action.payload],
        };
  
        const allContent = [].concat.apply([], Object.values(newItems));
        const totalPrice = allContent.reduce((sum, obj) => obj.price + sum, 0);
  
        return {
          ...state,
          items: newItems,
          totalCount: allContent.length,
          totalPrice,
        };
      }
  
      default:
        return state;
    }
  };
  
  export default cart;