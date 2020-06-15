import { Responsive } from 'semantic-ui-react';

/**
 * Utitilities functions
 */
class Utils {
  static getWidth(): number {
    const isSSR = typeof window === 'undefined';

    return isSSR ? (Responsive.onlyTablet.minWidth as number) : (window.innerWidth as number);
  }

  static isMobile(): boolean {
    let isMobile = false;
    if (Responsive && Responsive.onlyMobile && Responsive.onlyMobile.maxWidth) {
      isMobile = Utils.getWidth() <= Responsive.onlyMobile.maxWidth;
    }

    return isMobile;
  }
}

export default Utils;
