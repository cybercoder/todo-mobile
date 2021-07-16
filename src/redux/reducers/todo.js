export default (state = [], {type, payload} = {}) => {
  switch (type) {
    case 'LIST':
      return payload;
    case 'GETONE':
      let todoIndex = state.findIndex(t => t.id === payload.id);
      todoIndex !== -1 && (state[todoIndex] = payload);
      return state;
    default:
      return state;
  }
};
