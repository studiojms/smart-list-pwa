import { Responsive } from 'semantic-ui-react';

class Utils {
  static getWidth(): number {
    const isSSR = typeof window === 'undefined';

    return isSSR ? (Responsive.onlyTablet.minWidth as number) : (window.innerWidth as number);
  }
}

export default Utils;
