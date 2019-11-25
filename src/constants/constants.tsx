//export const API = "http://localhost:3000/api/users/";
import { FilterType } from "../interfaces";

export const ADD_TODO = "ADD_TODO";
export const FAIL_TODO = "FAIL_TODO";
export const GET_ALL_TODO = "GET_ALL_TODO";
export const DELITE_TODO = "DELITE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_FILTER = "SET_FILTER";
export const LOGIN_ACTION = "LOGIN_ACTION";
export const LOGOUT_ACTION = "LOGOUT_ACTION";

export const visibility = [
  FilterType.all,
  FilterType.completed,
  FilterType.incomplete
];
