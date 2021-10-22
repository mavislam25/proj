import debounce from "lodash/debounce";
import { useCallback } from "react";

const useDebounce = (callback, waitMs, deps = []) => {
  return useCallback(debounce(callback, waitMs), [waitMs, ...deps]);
};

export default useDebounce;
