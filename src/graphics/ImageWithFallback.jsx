import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageWithFallback({ src, fallbackSrc, ...rest }) {
  const [imgSrc, set_imgSrc] = useState(src);

  useEffect(() => {
    set_imgSrc(src);
  }, [src]);

  // can be used for 'onLoadingComplete' prop for next/image
  //	if we begin using a version of next that has it
  /*
  const onLoadHandler = (result) => {
	if (result.naturalWidth === 0) {
	  // Broken image
	  set_imgSrc(fallbackSrc);
	}
  }*/

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        set_imgSrc(fallbackSrc);
      }}
    />
  );
}