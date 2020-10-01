export const getImageOfSize = (src: string, width: number, height: number) =>
  src
    .replace('{height}', height.toString())
    .replace('{width}', width.toString())
    .replace(/\d{1,3}x\d{1,3}/, `${width}x${height}`); // just in case
