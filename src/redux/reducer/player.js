import { ADD_USER, MAKE_SCORE, PLAY_AGAIN } from '../actions';

const initialState = {
  name: 'Sandrinho',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = initialState, { type, payload }) => {
  switch (type) {
  case ADD_USER:
    return { ...state, name: payload.name, gravatarEmail: payload.email };
  case MAKE_SCORE:
    return { ...state, score: payload, assertions: state.assertions + 1 };
  case PLAY_AGAIN:
    return { ...initialState };

  default:
    return state;
  }
};

export default player;
