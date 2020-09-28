export const imageWithDimensions = (
  src: string,
  width: number,
  height: number,
) =>
  src
    .replace('{height}', height.toString())
    .replace('{width}', width.toString());
