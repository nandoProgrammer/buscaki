export const Types = {
  SET_BUSINESSES: 'businesses/SET_BUSINESSES',
  SET_BUSINESS: 'businesses/SET_BUSINESS',
};

const initialState = {
  businesses: [],
  businessSelected: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_BUSINESSES:
      return { ...state, businesses: action.payload };
    case Types.SET_BUSINESS:
      return { ...state, businessSelected: action.payload };
    default:
      return state;
  }
}

export function setBusinesses(businesses) {
  return {
    type: Types.SET_BUSINESSES,
    payload: businesses,
  };
}

export function setBusiness(business) {
  return {
    type: Types.SET_BUSINESS,
    payload: business,
  };
}
