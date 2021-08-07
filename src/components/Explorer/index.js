import { createContext, useReducer, useState, useEffect } from 'react';
import { filtersReducer } from './../../reducers';
import { filterReferences } from './../../utils';
import SlideViewer from './SlideViewer';
import { Filters } from './Filters';
import './Explorer.css';

const Context = createContext({
  activeFilters: [],
  toggleFilters: () => {},
});

const withContext = (El) => (props) =>
  <Context.Consumer>
    {
      ({ activeFilters }) => <El activeFilters={activeFilters} {...props} />
    }
</Context.Consumer>;

const SlidesWithContext = withContext(SlideViewer);
const FiltersWithContext = withContext(Filters);

const Explorer = ({
  data
}) => {
  const [show, setShow] = useState([-1, -1]);
  const [slidesPerRow, setSlidesPerRow ] = useState(5);

  const [activeFilters, toggleFilters] = useReducer(
    filtersReducer,
    {
      curators: [],
      tags: [],
      // years: [],
    }
  );

  const availableFilters = {
    curators: {
      filters: []
    },
    tags: {
      filters: []
    },
    //years: {
      //filters: []
    //},
  };

  useEffect(() => {
    const changeSlideCount = () => {
      if (window.innerWidth < 450) {
        setSlidesPerRow(1);
      } else if (window.innerWidth < 650) {
        setSlidesPerRow(2);
      } else if (window.innerWidth < 900) {
        setSlidesPerRow(3);
      } else {
        setSlidesPerRow(4);
      }
    };

    changeSlideCount();

    const resizeFunction = () => {
      changeSlideCount();
      if (show[0] !== -1 && show[1] !== -1) {
        setShow([-1, -1]);
      }
    };

    window.addEventListener('resize', () => {
      resizeFunction();
    });

    return _ => {
      window.removeEventListener('resize', changeSlideCount)
    }
  });

  const dataWithImages = data.references.map((ref, i) => ({
    ...ref,
    screenshot: `/screenshots/screenshot-${i + 1}.png`
  }))

  const filteredReferences = filterReferences(dataWithImages, activeFilters);

  //availableFilters.years.filters = Array.from(new Set(filteredReferences.reduce(
  //  (x, y) => { return [ ...x, ...y.years ] },[]))).sort((a, b) => b - a);
  availableFilters.curators.filters = Array.from(new Set(filteredReferences.map((x) => x.curator)));
  availableFilters.tags.filters = Array.from(new Set(filteredReferences.map((x) => x.tag)));


  return (
    <>
      <Context.Provider value={{ activeFilters }}>
        <FiltersWithContext {...{ availableFilters, setShow, toggleFilters }} />
        <SlidesWithContext {...{show, setShow, slidesPerRow, toggleFilters}} references={filteredReferences} />
      </Context.Provider>
    </>
  )
};

export default Explorer;
