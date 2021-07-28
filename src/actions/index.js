const addFilterAction = (filterType, filter) => ({
  type: 'ADD_FILTER',
  filterType,
  filter
});

const removeFilterAction = (filterType, filter) => ({
  type: 'REMOVE_FILTER',
  filterType,
  filter
});

export { addFilterAction, removeFilterAction };
