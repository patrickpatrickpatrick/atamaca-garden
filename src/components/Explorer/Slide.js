import LazyLoad from 'react-lazy-load';

const Slide = ({
  slideId,
  title,
  url,
  info,
  show,
  setShow,
  rowRef,
  row,
  screenshot
}) => {
  return (
    <button
      tabIndex={0}
      onClick={() => setShow(!show)}
      className={`slide-link-container ${show ? 'slide-link-container--drawer-open' : ''}`}
    >
      {
        !show ? <LazyLoad><div
          className="slide-link"
          style={{
            backgroundImage: `url(${screenshot})`
          }}
        ></div></LazyLoad> : <div className="slide-link-close">
          x
        </div>
      }

    </button>
  )
};

export default Slide;
