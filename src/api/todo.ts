import axios from "axios";
const BASE_URL = "https://paywork-todolist.netlify.app";

export const fetchTodoList = (url: string) => {
  //localStorage에서 데이터 받아오기
  return {
    count: 1,
  };
};
export const getTodosList = async () => {
  const response = await axios.get(`/todos`);
  console.log(response);

  return response.data;
};

export const getTodoById = async (id: number) => {
  const response = await axios.get(`${BASE_URL}/todos/${id}`);
  console.log(response);

  return response.data;
};
