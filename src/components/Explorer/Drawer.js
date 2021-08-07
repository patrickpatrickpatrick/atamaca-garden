import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { addFilterAction } from './../../actions';

const Drawer = ({
  rowRef,
  link,
  toggleFilters
}) => {
  const addFilter = (filterType) => (filter) => toggleFilters(
    addFilterAction(filterType, filter)
  );

  const drawerRef = useRef(null);

  useEffect(() => {
    const rowCurrent = rowRef.current;

    if (rowRef.current && drawerRef.current) {
      rowRef.current.parentNode.querySelector('.slides-container-drawer--open').style.height = `${drawerRef.current.offsetHeight}px`;
    }

    return () => {
      if (rowCurrent) {
        Array.from(
          rowCurrent.parentNode.querySelectorAll('.slides-container-drawer')).forEach((el) => { el.style.height = '0px';});
      }
    };
  });

  if (link && rowRef.current) {
    const {
      title,
      info,
      url,
      screenshot,
      curator,
      tag,
      author
    } = link;

    return (createPortal(
        <div ref={drawerRef} className="drawer">
          <div className="drawer__text">
            <h1 className="drawer__text-title">{title}</h1>
            <h2 className="drawer__text-author">{author}</h2>
            <p>{info}</p>
            <p>Selected by <button className="drawer__filter" onClick={() => addFilter('curators')(curator)} >{curator}</button></p>
            <p>Tagged as <button className="drawer__filter" onClick={() => addFilter('tags')(tag)} >{tag}</button></p>
            <a href={url} >Visit Website</a>
          </div>
          <div
            className="drawer__image-container"
          >
            <img alt={`screenshot of ${title}`} className="drawer__image-img" src={`${screenshot}`}/>
          </div>
        </div>,
        rowRef.current
      )
    )
  } else {
    return (<></>)
  }
};

export default Drawer;
