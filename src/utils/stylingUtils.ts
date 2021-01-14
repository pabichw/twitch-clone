export default class StylingUtils {
  static hideScrollbar() {
    return `
      //chrome
      ::-webkit-scrollbar {
        display: none;
      }
      
      ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    `;
  }
}
