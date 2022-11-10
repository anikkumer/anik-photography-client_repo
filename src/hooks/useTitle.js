import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}- Anik's Photography`;
  }, [title]);
};

export default useTitle;
