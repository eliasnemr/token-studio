import { useEffect, useState } from "react";
import getAppUID from "../libs/getAppUID";

const useFirstVisit = () => {
  const [firstTime, setFirstTime] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkFirstVisit = () => {
      const visited = localStorage.getItem(getAppUID());
      if (!visited) {
        localStorage.setItem(getAppUID(), "1");
        setFirstTime(true);
      } else {
        setFirstTime(false);
      }
      setIsLoading(false);
    };

    checkFirstVisit();
  }, []);

  return { firstTime, isLoading };
};

export default useFirstVisit;