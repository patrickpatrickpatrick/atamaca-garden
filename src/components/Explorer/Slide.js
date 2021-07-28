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
    <div
      tabIndex={0}
      onClick={() => setShow(!show)}
      className={`slide-link-container ${show ? 'slide-link-container--drawer-open' : ''}`}
    >
      <div
        className="slide-link"
        style={{
          backgroundImage: `url(${screenshot})`
        }}
      ></div>
    </div>
  )
};

export default Slide;
