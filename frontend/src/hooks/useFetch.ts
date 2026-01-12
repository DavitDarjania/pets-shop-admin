import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T[]>();
  useEffect((): void => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const reFetch = (): void => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  return { data, reFetch };
};

export default useFetch;
