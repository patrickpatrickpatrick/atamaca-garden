const filtersReducer = (state, {
  type,
  filterType,
  filter
}) => {
  switch(type) {
    case 'ADD_FILTER':
      return {
        ...state,
        [filterType]: Array.from(new Set([
          ...state[filterType],
          filter
        ]))
      }
    case 'REMOVE_FILTER':
      const indexToDelete = state[filterType].findIndex(x => filter === x);
      return {
        ...state,
        [filterType]: [
          ...state[filterType].slice(0, indexToDelete),
          ...state[filterType].slice(indexToDelete + 1)
        ]
      }
    default:
      throw new Error();
  }
}

export { filtersReducer };
