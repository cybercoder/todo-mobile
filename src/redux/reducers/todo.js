export default (state = {}, {type, payload} = {}) => {
  switch (type) {
    case 'LIST':
      return payload;
    default:
      return state;
  }
};
