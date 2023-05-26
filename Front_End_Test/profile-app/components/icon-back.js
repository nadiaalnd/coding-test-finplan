import { memo, useMemo } from "react";

const IconBack = memo(({ vector, onVectorIconClick, vectorCursor }) => {
  const vectorIconStyle = useMemo(() => {
    return {
      cursor: vectorCursor,
    };
  }, [vectorCursor]);

  return (
    <img
      className="absolute h-[3%] w-[5.33%] top-[2.7%] right-[90.13%] bottom-[94.3%] left-[4.53%] max-w-full overflow-hidden max-h-full cursor-pointer"
      alt=""
      src={vector}
      onClick={onVectorIconClick}
      style={vectorIconStyle}
    />
  );
});

export default IconBack;
