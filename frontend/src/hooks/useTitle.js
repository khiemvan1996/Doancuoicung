import { useEffect, useState } from 'react';

// set title for component
function useTitle(title = 'EK', isOverride = false) {
  useEffect(() => {
    if (isOverride) {
      document.title = title;
    } else {
      document.title = title !== 'EK' ? `${title} - EK` : title;
    }
  }, []);

  return null;
}

export default useTitle;
