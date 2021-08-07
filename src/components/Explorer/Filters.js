import { addFilterAction, removeFilterAction } from './../../actions';
import { linksToRows } from './../../utils';

const Filters = ({
  availableFilters,
  activeFilters,
  toggleFilters,
  setShow
}) => {
  const addFilter = (filterType) => (filter) => toggleFilters(
    addFilterAction(filterType, filter)
  );
  const removeFilter = (filterType) => (filter) => toggleFilters(
    removeFilterAction(filterType, filter)
  );

  const FiltersRow = ({ type, filters: { filters } }) => <div key={type} className="filters__row">
    <span className="filters__row-name">{type}</span>
    <div className="filters__row-buttons">
      {
        filters.map((filter) => {
          const isActive = activeFilters[type].find(x => x === filter);
          const onClick = !isActive ?
          () => {
            addFilter(type)(filter);
            setShow([-1, -1]);
          } : () => {
            removeFilter(type)(filter);
            setShow([-1, -1]);
          }

          return (
            <button
              className={`filters__button ${isActive ? 'filters__button--close' : ''}`}
              onClick={onClick}
              key={filter}
            >
              <span className="filters__button-text">
                {
                  filter
                }
              </span>
            </button>
          )
        })
      }
    </div>
  </div>;

  return (
    <>
      {
        linksToRows(Object.keys(availableFilters), 2).map((filters, index) => <div
          className="filters__row-container"
          key={`filters-${index}`}>
          {
            filters.map((filter, index) =>
              <FiltersRow
                key={filter}
                type={filter}
                filters={availableFilters[filter]}
              />
            )
          }
        </div>)
      }
    </>
  )
}

export { Filters };
