import axios from "axios";
import {
  ADDNEW_TODO,
  GETALL_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
} from "./type";

const API_URL = "http://localhost:8000";

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, { data });

    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (err) {
    console.log(`AXIOS ERRROR AddNewTodos: ${err.message}`);
  }
};

export const getallTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos`);

    dispatch({ type: GETALL_TODO, payload: res.data });
  } catch (err) {
    console.log(`AXIOS ERRROR GetAllTodos: ${err.message}`);
  }
};

export const toggleTodos = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos/${id}`);

    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (err) {
    console.log(`AXIOS ERRROR ToggleTodos: ${err.message}`);
  }
};

export const updateTodos = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/todos/${id}`, { data });

    dispatch({ type: UPDATE_TODO, payload: res.data });
  } catch (err) {
    console.log(`AXIOS ERRROR UpdateTodos: ${err.message} Helloo`);
  }
};

export const deleteTodos = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${API_URL}/todos/${id}`);

    dispatch({ type: DELETE_TODO, payload: res.data });
  } catch (err) {
    console.log(`AXIOS ERRROR DeleteTodos: ${err.message} `);
  }
};
