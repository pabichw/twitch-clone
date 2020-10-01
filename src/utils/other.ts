export const getImageOfSize = (src: string, width: number, height: number) =>
  src
    .replace('{height}', height.toString())
    .replace('{width}', width.toString());
