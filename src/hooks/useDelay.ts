import React, { useState, useEffect } from 'react';
import usePrevious from './usePrevious';

const useDelay = (active: boolean, delay: number) => {
  const lastActive = usePrevious(active);
  const [value, setValue] = useState(false);
  useEffect(() => {
    if (!lastActive && active) {
      setValue(true);
    } else if (lastActive && !active) {
      setTimeout(() => {
        setValue(false);
      }, delay);
    }
  }, [active]);
  return value;
};

export default useDelay;
