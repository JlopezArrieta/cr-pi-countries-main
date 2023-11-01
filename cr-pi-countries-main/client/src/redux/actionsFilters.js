import { CONTINENTS_FILTER, ACTIVITY_FILTER, ORDER_CONT, PAGINATE, RESET, RESTORE } from "./actions-types";


export const continentsFilter = (continents) => {
  return { 
    type: CONTINENTS_FILTER, 
    payload: continents
  };
};

export const activityFilter = (activity) => {
  return { 
    type: ACTIVITY_FILTER, 
    payload: activity
  };
};

export const orderCont = (orden) => {
  return {
    type: ORDER_CONT,
    payload: orden
  }
}

export const getPage = (order) =>{
  return (dispatch) =>{
    dispatch({
      type:PAGINATE,
      payload: order
    })
  }
}

export const getReset = () =>{
  return (dispatch) =>{
    dispatch({
      type:RESET,
    })
  }
}

export const getPageRestored = () =>{
  return (dispatch) =>{
    dispatch({
      type:RESTORE,
    })
  }
}
