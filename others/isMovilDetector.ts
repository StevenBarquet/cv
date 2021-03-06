// ---Dependencys
import { useState, useEffect } from 'react';
// ---Types
import { ResponsiveData } from '@Reducers/appInfo/customTypes';

// --------------MAIN----------
function isMovilDetector() : ResponsiveData {
  const isWindow = typeof window !== 'undefined';
  if (isWindow) {
    const getSize = (): ResponsiveData => {
      const size = window.innerWidth;
      const caseXS = size < 576;
      const caseSM = size > 576 && size < 768;
      const caseMD = size > 768 && size < 992;
      const caseLG = size > 992 && size < 1200;
      const caseXL = size > 1200 && size < 1600;
      const caseXXL = size > 1600;
      if (caseXS) return { isMovil: true, winSize: 'xs' };
      if (caseSM) return { isMovil: true, winSize: 'sm' };
      if (caseMD) return { isMovil: false, winSize: 'md' };
      if (caseLG) return { isMovil: false, winSize: 'lg' };
      if (caseXL) return { isMovil: false, winSize: 'xl' };
      if (caseXXL) return { isMovil: false, winSize: 'xxl' };
      return { isMovil: false, winSize: 'lg' };
    };
    const [windowSize, setWindowSize] = useState(getSize);

    const handleResize = () => {
      setWindowSize(getSize());
    };

    const handleWindow = () => {
      if (!isWindow) return false;

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    };

    useEffect(() => {
      handleWindow();
    }, []);

    return windowSize;
  }

  return { isMovil: false, winSize: 'lg' };
}

export default isMovilDetector;
