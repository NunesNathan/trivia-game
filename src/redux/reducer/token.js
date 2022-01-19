import { GET_TOKEN } from '../actions';

const initialState = '';

const token = (state = initialState, { type, payload }) => {
  switch (type) {
  case GET_TOKEN:
    return payload;
  default:
    return state;
  }
};

export default token;
