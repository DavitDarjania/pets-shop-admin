import { useEffect, useState } from "react";

const useFetchEach = <T>(url: string, id: string) => {
  const [data, setData] = useState<T>();
  useEffect((): void => {
    fetch(`${url}/${id}`)
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

export default useFetchEach;
