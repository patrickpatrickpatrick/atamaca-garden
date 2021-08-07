import { useRef, createRef } from 'react';
import { linksToRows } from './../../utils';

import Drawer from './Drawer';
import SlidesRow from './SlidesRow';

const SlideViewer = ({ slidesPerRow, references, show, setShow, toggleFilters }) => {
  const [row, col] = show;

  const rows = linksToRows(references, slidesPerRow);

  const rowRefs = useRef([]);
  rowRefs.current = rows.map((_, i) => rowRefs.current[i] ?? createRef());

  const isDrawerOpen = (row > -1) && (rowRefs.current[row]);

  return (
    <div className="slides-viewer">
      <>
        {
          rows.map((row, i) => (
            <SlidesRow
              slides={row}
              ref={rowRefs.current[i]}
              show={show}
              key={`row-${i}`}
              row={i}
              setShow={setShow}
              slidesPerRows={slidesPerRow}
            />
          ))
        }
      </>
      {
        isDrawerOpen &&
        <Drawer
          link={rows[row][col]}
          rowRef={rowRefs.current[row]}
          toggleFilters={toggleFilters}
        />
      }
    </div>
  );
}

export default SlideViewer;
