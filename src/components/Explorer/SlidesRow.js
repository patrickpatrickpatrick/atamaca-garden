import Slide from './Slide';
import { forwardRef } from 'react';

const SlidesRow = forwardRef(({
  row,
  setShow,
  slidesPerRows,
  show,
  slides
}, ref) => (
  <div key={`row-${row}`} className="slides-container">
    {
      slides.map((link, i) =>
        <Slide
          slideId={i + (row * slidesPerRows)}
          key={`${row}-${i}`}
          show={show[0] === row && show[1] === i}
          setShow={(current) => setShow(current ? [row, i] :[])}
          row={row}
          screenshot={link.screenshot}
          slidesPerRows={slidesPerRows}
        />
      )
    }
    <div className={`slides-container-drawer ${row === show[0] ? 'slides-container-drawer--open' : ''}`} ref={ref}></div>
  </div>
));

export default SlidesRow;
