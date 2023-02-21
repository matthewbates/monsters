const API_URL = "https://jsonplaceholder.typicode.com/users";

const httpGetMonsters = async () => {
  const response = await API_URL;
  return response.json();
};

export { httpGetMonsters };
