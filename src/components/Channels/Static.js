import { useEffect, useRef, useCallback, useMemo } from 'react';

const Static = ({ width, height }) => {
  const size = useMemo(() => ({ width, height}), [width, height]);
  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);

  const tick = useCallback(() => {
    requestIdRef.current = requestAnimationFrame(tick);
    if (canvasRef.current) {
      const canvasContext = canvasRef.current.getContext('2d');
      const imageData = canvasContext.createImageData(size.width, size.height);
      for (var i = 0, a = imageData.data.length; i < a; i++) {
        imageData.data[i] = (Math.random() * 255)|0;
      }
      canvasContext.putImageData(imageData, 0, 0);
    }
  }, [size]);

  useEffect(() => {
    requestIdRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(requestIdRef.current);
    };
  }, [tick]);

  return <canvas {...size} ref={canvasRef} />;
};

export default Static;

