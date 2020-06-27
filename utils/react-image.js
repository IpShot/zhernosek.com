import { useImage as useReactImage } from 'react-image';

function imgPromise(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      img.decode ? img.decode().then(resolve).catch(reject) : resolve();
    }
    img.onerror = reject;
    img.src = src;
  });
}

export function useImage({ srcList }) {
  return useReactImage({
    srcList,
    imgPromise,
    useSuspense: false,
  });
}
