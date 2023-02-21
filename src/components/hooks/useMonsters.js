import { useState, useEffect, useCallback } from "react";
import { httpGetMonsters } from "./requests";

const useMonsters = () => {
  const [monsters, setMonsters] = useState([]);

  const getMonsters = useCallback(async () => {
    const fetchedMonsters = await httpGetMonsters;
    setMonsters(fetchedMonsters);
  }, []);

  useEffect(() => {
    getMonsters();
  }, [getMonsters]);

  return monsters;
};

export default useMonsters;
